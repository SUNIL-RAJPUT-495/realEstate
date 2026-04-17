import React, { useEffect, useMemo, useState } from 'react'
import Axios from '../../utils/axios'
import SummaryApi from '../../common/SummerAPI'

const sortOptions = ['Listed At', 'Updated At', 'Price: Lowest', 'Price: Highest']
const fallbackImage = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80'

const getPriceValue = (price) => {
  const match = String(price || '').replace(/,/g, '').match(/\d+(\.\d+)?/)
  return match ? Number(match[0]) : 0
}

export const Rent = () => {
  const [activeSort, setActiveSort] = useState('Listed At')
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRentProperties = async () => {
      setLoading(true)
      setError('')
      try {
        const response = await Axios.get(SummaryApi.getProperties.url, { params: { type: 'rent' } })
        setProperties(response?.data?.properties || [])
      } catch (err) {
        setError(err?.response?.data?.message || 'Unable to load rent properties.')
      } finally {
        setLoading(false)
      }
    }

    fetchRentProperties()
  }, [])

  const sortedProperties = useMemo(() => {
    const list = [...properties]
    if (activeSort === 'Updated At') return list.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    if (activeSort === 'Price: Lowest') return list.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price))
    if (activeSort === 'Price: Highest') return list.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price))
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }, [activeSort, properties])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="text-[15px] text-[#333]">
          {loading ? 'Loading properties...' : `Showing ${sortedProperties.length} rent properties`}
        </div>
        <div className="flex gap-5 text-[15px] font-medium text-[#333]">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveSort(option)}
              className={`pb-1 transition-all ${activeSort === option ? 'border-b-[3px] border-[#ffe512] text-black' : 'text-gray-600 hover:text-black'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {error && <div className="mb-6 text-red-600">{error}</div>}

      {!loading && !error && sortedProperties.length === 0 && (
        <div className="text-gray-600">No properties found. Admin se property add karne ke baad yahan show hogi.</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {sortedProperties.map((property) => (
          <div key={property._id} className="group cursor-pointer flex flex-col">
            <div className="relative w-full h-[320px] overflow-hidden mb-4 bg-gray-100">
              <img
                src={property.images?.[0] || fallbackImage}
                alt={property.title || property.address}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {property.badge && (
                <div className="absolute top-0 right-0 bg-[#ffe512] text-black text-[11px] font-bold px-4 py-2 uppercase tracking-widest z-10">
                  {property.badge}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[15px] text-[#888]">{property.status || 'For Rent'}</span>
                <span className="text-[15px] text-[#333] font-medium">Price Guide: ₹{property.price}</span>
              </div>
              <h3 className="text-lg font-bold text-[#111] mb-2 leading-snug">{property.address}</h3>
              <p className="text-[14px] text-[#666] mb-2">{property.title}</p>

              <div className="flex items-center text-[15px] text-[#555] font-medium space-x-2">
                <span>{property.beds} {property.beds > 1 ? 'Beds' : 'Bed'}</span>
                <span className="text-gray-300 font-light">/</span>
                <span>{property.baths} {property.baths > 1 ? 'Baths' : 'Bath'}</span>
                {property.cars > 0 && (
                  <>
                    <span className="text-gray-300 font-light">/</span>
                    <span>{property.cars} {property.cars > 1 ? 'Cars' : 'Car'}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
