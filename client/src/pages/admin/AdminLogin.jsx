import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../common/SummerAPI'

export const AdminLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // Pehle se logged in hai toh dashboard pe bhejo
    useEffect(() => {
        const token = localStorage.getItem('rw_admin_sec_tkn')
        if (token) {
            navigate('/admin/dashboard', { replace: true })
        }
    }, [navigate])

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const res = await axios.post(`${baseURL}/api/admin/login`, { email, password })

            if (res.data.success) {
                // Secure token aur admin info store karo
                localStorage.setItem('rw_admin_sec_tkn', res.data.token)
                localStorage.setItem('rw_admin_info', JSON.stringify(res.data.admin))
                navigate('/admin/dashboard', { replace: true })
            }
        } catch (err) {
            const msg = err.response?.data?.message || 'Login failed. Please try again.'
            setError(msg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-[100vh] bg-[#f5f5f5] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-[#ffe512] w-28 h-28 mx-auto flex flex-col justify-end p-2 pb-3 shadow-lg">
                    <span className="text-[#333] font-bold text-2xl tracking-tighter" style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>
                    RayWhite.
                    </span>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase tracking-widest">
                    Admin Access
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Sign in to manage properties and content.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-sm sm:px-10 border-t-4 border-[#222]">

                    {/* Error message */}
                    {error && (
                        <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm">
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 uppercase tracking-widest">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[2px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ffe512] focus:border-black sm:text-sm transition-colors"
                                    placeholder="admin@raywhite.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 uppercase tracking-widest">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[2px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ffe512] focus:border-black sm:text-sm transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[2px] shadow-sm text-sm font-bold uppercase tracking-widest text-[#111] bg-[#ffe512] hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffe512] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Authenticating...' : 'Secure Log In'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
