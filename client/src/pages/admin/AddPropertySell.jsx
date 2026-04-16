import React, { useState, useRef } from 'react'
import SummaryApi from '../../common/SummerAPI'
import AxiosAdmin from "../../utils/axiosAdmin"

export const AddPropertySell = () => {
  const [images, setImages] = useState([])
  const [imageFiles, setImageFiles] = useState([])
  const fileInputRef = useRef(null)
  const [form, setForm] = useState({ title: '', address: '', price: '', beds: '', baths: '', cars: '', status: 'For Sale', category: 'new' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    const newPreviews = files.map((file) => ({
      id: URL.createObjectURL(file),
      url: URL.createObjectURL(file),
      name: file.name,
      file,
    }))
    setImages((prev) => [...prev, ...newPreviews])
    setImageFiles((prev) => [...prev, ...files])
    e.target.value = ''
  }

  const handleRemoveImage = (id) => {
    const removed = images.find((img) => img.id === id)
    setImages((prev) => prev.filter((img) => img.id !== id))
    setImageFiles((prev) => prev.filter((f) => f.name !== removed?.name))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title || !form.address || !form.price) {
      setMessage({ type: 'error', text: 'Title, Address and Price are required.' })
      return
    }
    setLoading(true)
    setMessage(null)
    try {
      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('address', form.address)
      formData.append('type', 'sell')
      formData.append('status', form.status)
      formData.append('category', form.category)
      formData.append('price', form.price)
      formData.append('beds', form.beds || 0)
      formData.append('baths', form.baths || 0)
      formData.append('cars', form.cars || 0)
      imageFiles.forEach((file) => formData.append('images', file))

      const res = await AxiosAdmin({
        url: SummaryApi.addProperty.url,
        method: SummaryApi.addProperty.method,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      if (res.data.success) {
        setMessage({ type: 'success', text: 'Property added successfully!' })
        setForm({ title: '', address: '', price: '', beds: '', baths: '', cars: '', status: 'For Sale', category: 'new' })
        setImages([])
        setImageFiles([])
      }
    } catch (err) {
      setMessage({ type: 'error', text: err?.response?.data?.message || 'Something went wrong.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
        <h1 className="text-3xl font-serif text-[#111] mb-8 border-b pb-4">Add Property (Sell)</h1>
        
        <div className="bg-white p-8 shadow-sm rounded-sm">
            <p className="text-gray-500 italic mb-6">Use this form to add a new property for sale to the database.</p>

            {message && (
                <div className={`mb-6 px-4 py-3 text-sm font-medium border ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    {message.text}
                </div>
            )}
            
            <form className="space-y-6 max-w-2xl" onSubmit={handleSubmit}>

                {/* Title */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Property Title</label>
                    <input name="title" value={form.title} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors" placeholder="e.g. Luxury Penthouse" />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Address</label>
                    <input name="address" value={form.address} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors" placeholder="e.g. 23F/6 Watermans Quay, Barangaroo" />
                </div>

                {/* Status & Category */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Status</label>
                        <select name="status" value={form.status} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white">
                            <option value="For Sale">For Sale</option>
                            <option value="Auction">Auction</option>
                            <option value="For Rent">For Rent</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Category</label>
                        <select name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white">
                            <option value="new">New</option>
                            <option value="open-soon">Open Soon</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </div>
                </div>

                {/* Beds / Baths / Cars */}
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Beds</label>
                        <input name="beds" value={form.beds} onChange={handleChange} type="number" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Baths</label>
                        <input name="baths" value={form.baths} onChange={handleChange} type="number" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Cars</label>
                        <input name="cars" value={form.cars} onChange={handleChange} type="number" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors" placeholder="0" />
                    </div>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Price / Guide</label>
                    <input name="price" value={form.price} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors" placeholder="e.g. Buyer Guide: $1,500,000" />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Property Images <span className="text-gray-400 normal-case font-normal text-xs ml-1">(select multiple)</span>
                    </label>
                    <input 
                        ref={fileInputRef}
                        type="file" 
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none bg-white transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-semibold file:bg-[#ffe512] file:text-black hover:file:bg-black hover:file:text-white cursor-pointer" 
                    />
                </div>

                {images.length > 0 && (
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                            Uploaded Images <span className="text-gray-400 font-normal normal-case text-xs ml-1">({images.length} selected)</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {images.map((img) => (
                                <div key={img.id} className="relative group rounded-sm overflow-hidden border border-gray-200 bg-gray-50 aspect-[4/3]">
                                    <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                                    <button type="button" onClick={() => handleRemoveImage(img.id)} className="absolute top-1.5 right-1.5 w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-700 shadow-md text-xs font-bold" title="Remove image">✕</button>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] px-2 py-1 truncate opacity-0 group-hover:opacity-100 transition-opacity duration-200">{img.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button type="submit" disabled={loading} className="bg-[#ffe512] text-black font-bold uppercase tracking-widest px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50">
                    {loading ? 'Saving...' : 'Save Property'}
                </button>
            </form>
        </div>
    </div>
  )
}
