import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../../common/SummerAPI'

export const AdminDashboard = () => {
  const [stats, setStats] = useState({ total: 0, totalRent: 0, totalSell: 0 })
  const [recentProperties, setRecentProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, propsRes] = await Promise.all([
          axios.get(SummaryApi.getPropertyStats.url),
          axios.get(SummaryApi.getProperties.url),
        ])

        if (statsRes.data.success) {
          setStats(statsRes.data)
        }
        if (propsRes.data.success) {
          // Only show latest 5 properties
          setRecentProperties(propsRes.data.properties.slice(0, 5))
        }
      } catch (err) {
        console.error('Dashboard fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  const statusColor = (status) => {
    if (status === 'For Sale') return 'bg-blue-50 text-blue-700'
    if (status === 'For Rent') return 'bg-yellow-50 text-yellow-700'
    if (status === 'Auction') return 'bg-red-50 text-red-700'
    return 'bg-gray-100 text-gray-600'
  }

  const categoryColor = (cat) => {
    if (cat === 'new') return 'bg-green-50 text-green-700'
    if (cat === 'open-soon') return 'bg-purple-50 text-purple-700'
    if (cat === 'upcoming') return 'bg-orange-50 text-orange-700'
    return 'bg-gray-100 text-gray-600'
  }

  return (
    <div>
      <h1 className="text-3xl font-serif text-[#111] mb-8 border-b pb-4">Dashboard Overview</h1>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Properties */}
        <div className="bg-white p-6 shadow-md rounded-sm border-l-4 border-black">
          <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Total Properties</h3>
          {loading ? (
            <div className="h-12 w-20 bg-gray-100 animate-pulse rounded" />
          ) : (
            <p className="text-5xl font-bold text-[#111]">{stats.total}</p>
          )}
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-400">all active listings</span>
          </div>
        </div>

        {/* Properties For Rent */}
        <div className="bg-white p-6 shadow-md rounded-sm border-l-4 border-[#ffe512]">
          <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Properties For Rent</h3>
          {loading ? (
            <div className="h-12 w-20 bg-gray-100 animate-pulse rounded" />
          ) : (
            <p className="text-5xl font-bold text-[#111]">{stats.totalRent}</p>
          )}
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-400">active rental listings</span>
          </div>
        </div>

        {/* Properties For Sell */}
        <div className="bg-white p-6 shadow-md rounded-sm border-l-4 border-blue-500">
          <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Properties For Sale</h3>
          {loading ? (
            <div className="h-12 w-20 bg-gray-100 animate-pulse rounded" />
          ) : (
            <p className="text-5xl font-bold text-[#111]">{stats.totalSell}</p>
          )}
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-400">active sale listings</span>
          </div>
        </div>
      </div>

      {/* --- Recent Properties --- */}
      <div className="mt-12 bg-white p-8 shadow-sm rounded-sm">
        <h2 className="text-sm font-bold text-[#333] mb-6 uppercase tracking-wider">Recent Property Listings</h2>

        {loading ? (
          <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className="h-14 bg-gray-100 animate-pulse rounded" />
            ))}
          </div>
        ) : recentProperties.length === 0 ? (
          <p className="text-gray-400 italic text-sm">No properties added yet. Go add your first property!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 uppercase text-xs tracking-widest">
                  <th className="pb-3 pr-4">Title</th>
                  <th className="pb-3 pr-4">Address</th>
                  <th className="pb-3 pr-4">Price</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3 pr-4">Category</th>
                  <th className="pb-3">Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentProperties.map((p) => (
                  <tr key={p._id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 font-semibold text-[#111] truncate max-w-[140px]">{p.title}</td>
                    <td className="py-3 pr-4 text-gray-500 truncate max-w-[160px]">{p.address}</td>
                    <td className="py-3 pr-4 font-medium text-[#111]">{p.price}</td>
                    <td className="py-3 pr-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-sm ${statusColor(p.status)}`}>
                        {p.status || '—'}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-sm capitalize ${categoryColor(p.category)}`}>
                        {p.category || '—'}
                      </span>
                    </td>
                    <td className="py-3 text-gray-400 text-xs whitespace-nowrap">{formatDate(p.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
