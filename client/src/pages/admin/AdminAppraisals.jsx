import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../common/SummerAPI';

export const AdminAppraisals = () => {
    const [appraisals, setAppraisals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppraisals = async () => {
            try {
                const token = localStorage.getItem('rw_admin_sec_tkn');
                const res = await axios.get(`${baseURL}/api/appraisal`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                if (res.data.success) {
                    setAppraisals(res.data.data);
                }
            } catch (err) {
                console.error("Error fetching appraisals:", err);
                setError(err.response?.data?.message || 'Failed to fetch appraisals');
            } finally {
                setLoading(false);
            }
        };

        fetchAppraisals();
    }, []);

    if (loading) return <div className="text-center py-10">Loading appraisals...</div>;
    if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-widest">Appraisal Requests</h1>
                <p className="mt-2 text-gray-600">Manage all property appraisal requests here.</p>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {appraisals.length === 0 ? (
                        <li className="px-6 py-4 text-gray-500">No appraisal requests found.</li>
                    ) : (
                        appraisals.map((appraisal) => (
                            <li key={appraisal._id} className="px-6 py-6 hover:bg-gray-50 transition-colors">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Contact Details */}
                                    <div>
                                        <h3 className="text-[14px] font-bold text-gray-900 uppercase tracking-wider mb-2">Contact Details</h3>
                                        <p className="text-sm text-gray-700"><strong>Name:</strong> {appraisal.fullName}</p>
                                        <p className="text-sm text-gray-700"><strong>Email:</strong> {appraisal.email}</p>
                                        <p className="text-sm text-gray-700"><strong>Phone:</strong> {appraisal.phone}</p>
                                        {appraisal.message && (
                                            <p className="text-sm text-gray-700 mt-2"><strong>Message:</strong> {appraisal.message}</p>
                                        )}
                                        <p className="text-xs text-gray-500 mt-2">
                                            <strong>Submitted On:</strong> {new Date(appraisal.createdAt).toLocaleString()}
                                        </p>
                                    </div>

                                    {/* Property Details */}
                                    <div>
                                        <h3 className="text-[14px] font-bold text-gray-900 uppercase tracking-wider mb-2">Property Details</h3>
                                        <p className="text-sm text-gray-700"><strong>Address:</strong> {appraisal.streetAddress}, {appraisal.suburbPostcode}</p>
                                        <p className="text-sm text-gray-700">
                                            <strong>Layout:</strong> {appraisal.bedrooms} Bed | {appraisal.bathrooms} Bath | {appraisal.carSpaces} Car
                                        </p>
                                        {appraisal.additionalDetails && (
                                            <p className="text-sm text-gray-700 mt-2"><strong>Details:</strong> {appraisal.additionalDetails}</p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};
