import React, { useState, useEffect } from 'react';

const AppraisalForm = ({ isOpen, onClose }) => {
    // Jab form open ho toh background scroll lock karne ke liye
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const [formData, setFormData] = useState({
        fullName: '', phone: '', email: '', message: '',
        streetAddress: '', suburbPostcode: '', bedrooms: '',
        bathrooms: '', carSpaces: '', additionalDetails: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Appraisal Request Sent Successfully!");
        onClose(); // Submit hone ke baad form auto-close ho jayega
    };

    const inputClass = "w-full border border-gray-300 p-2.5 mt-1 text-[14px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-gray-50";

    // Agar 'isOpen' false hai, toh form ko screen par mat dikhao
    if (!isOpen) return null;

    return (
        // 1. Modal Wrapper (Ye poori screen cover karega)
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">

            {/* 2. Blurred Background (Peeche ka dark/blur effect) */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose} // Background pe click karne se form band hoga
            ></div>

            {/* 3. Main Form Box (Width kam ki hai (max-w-xl) aur Scrollbar hide kiya hai) */}
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white p-6 md:p-8 shadow-2xl z-10 animate-fadeIn [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                {/* Close Button (Right corner me X) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#333] mb-6 uppercase tracking-wide border-b pb-3 pr-8">
                            Request an Appraisal
                        </h2>
                    </div>
                </div>

                {/* --- FORM SHURU --- */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* SECTION 1: Contact Details */}
                    <div>
                        <h3 className="text-lg font-bold text-[#111] mb-4">Your Contact Details</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-[13px] font-semibold text-gray-700">Your Full Name *</label>
                                <input type="text" name="fullName" placeholder="e.g. Joe Bloggs" value={formData.fullName} onChange={handleChange} required className={inputClass} />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[13px] font-semibold text-gray-700">Your Phone Number *</label>
                                    <input type="tel" name="phone" placeholder="e.g. 04xx xxx xxx" value={formData.phone} onChange={handleChange} required className={inputClass} />
                                </div>
                                <div>
                                    <label className="block text-[13px] font-semibold text-gray-700">Your Email *</label>
                                    <input type="email" name="email" placeholder="e.g. j.bloggs@gmail.com" value={formData.email} onChange={handleChange} required className={inputClass} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[13px] font-semibold text-gray-700">Message (Optional)</label>
                                <textarea name="message" placeholder="Tell us more about your requirements..." rows="2" value={formData.message} onChange={handleChange} className={inputClass}></textarea>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: Property Details */}
                    <div>
                        <h3 className="text-lg font-bold text-[#111] mb-4">Property Details</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-[13px] font-semibold text-gray-700">Street Address *</label>
                                <input type="text" name="streetAddress" placeholder="e.g. 123 Example Street" value={formData.streetAddress} onChange={handleChange} required className={inputClass} />
                            </div>
                            <div>
                                <label className="block text-[13px] font-semibold text-gray-700">Suburb and Postcode *</label>
                                <input type="text" name="suburbPostcode" placeholder="City, Suburb, Postcode" value={formData.suburbPostcode} onChange={handleChange} required className={inputClass} />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-[13px] font-semibold text-gray-700">Bedrooms *</label>
                                    <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} required className={inputClass}>
                                        <option value="" disabled>Select</option>
                                        <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5+">5+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-semibold text-gray-700">Bathrooms *</label>
                                    <select name="bathrooms" value={formData.bathrooms} onChange={handleChange} required className={inputClass}>
                                        <option value="" disabled>Select</option>
                                        <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5+">5+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-semibold text-gray-700">Car Spaces *</label>
                                    <select name="carSpaces" value={formData.carSpaces} onChange={handleChange} required className={inputClass}>
                                        <option value="" disabled>Select</option>
                                        <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5+">5+</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[13px] font-semibold text-gray-700">Additional Details</label>
                                <textarea name="additionalDetails" placeholder="Any other features like Pool, Garden..." rows="2" value={formData.additionalDetails} onChange={handleChange} className={inputClass}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full bg-[#363636] text-white hover:bg-[#ffe512] hover:text-black font-bold uppercase tracking-widest py-3.5 transition-colors duration-300">
                            Request Appraisal
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AppraisalForm;