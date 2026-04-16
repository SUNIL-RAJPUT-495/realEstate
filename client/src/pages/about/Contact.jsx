import React from 'react'

export const Contact = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto mt-16">

                {/* Header Section (Centered) */}
                <div className="text-center mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold block mb-4">
                        ABOUT
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#111]">
                        Ray White Residential Sydney CBD
                    </h1>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* ================= LEFT SIDE: CONTACT US ================= */}
                        <div className="md:col-span-1 h-fit">
                            <h2 className=" mb-6">Contact Us</h2>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <strong className="text-gray-400 w-20 shrink-0">Phone:</strong>
                                    <a href="tel:+61292493738" className="hover:text-blue-600">+61 (2) 9249 3738</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <strong className="text-gray-400 w-20 shrink-0">Fax:</strong>
                                    <span>+61 (2) 9262 3737</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <strong className="text-gray-400 w-20 shrink-0">Email:</strong>
                                    <a href="mailto:michael.lowdon@raywhite.com" className="text-blue-600 hover:underline break-all sm:break-normal">
                                        michael.lowdon@raywhite.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <strong className="text-gray-400 w-20 shrink-0">Address:</strong>
                                    <div>
                                        Level 7<br />
                                        44 Martin Place<br />
                                        Sydney, NSW 2000
                                    </div>
                                </li>
                            </ul>

                            {/* Social Links */}
                            <div className="mt-8 flex space-x-4">
                                <a href="#" className="text-blue-700 font-semibold hover:underline">LinkedIn</a>
                                <a href="#" className="text-blue-400 font-semibold hover:underline">Twitter</a>
                            </div>
                        </div>

                        {/* ================= RIGHT SIDE: DESCRIPTION ================= */}
                        <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">
                            <p>
                                <strong>Ray White Residential Sydney CBD</strong> is a leading provider of Real Estate services specialising in the sale, lease and management of premium apartments in Sydney CBD.
                            </p>
                            <p>
                                The office is located within the Ray White Corporate Head office at 44 Martin Place, just moments from George Street, Macquarie Street and Hyde Park our office is ideally located within the Central Business District therefore very convenient to service our clientele. The office is able to provide an array of facilities including various meeting rooms for client meetings and boardroom facilities for telephone conferencing ideal when negotiating with overseas clients.
                            </p>
                            <p>
                                The office boasts an in-house auction room that would comfortably accommodate at least 75 buyers. This room will also be used for forthcoming investor and guest speaker’s nights exclusively for the purpose of our clients.
                            </p>
                            <p>
                                At the forefront to any professional and on-going relationship we consider our clients to be our most valuable asset. We aim to attentively listen to their needs and offer a personalised service with professional advice based on our excellent in-depth market knowledge and past market experience.
                            </p>
                            <p>
                                Ray White leads the way in technology and database marketing which due to the size of the organisation smaller agencies cannot replicate. This data management resource is continually being enhanced for the benefit of our clients to ensure that their apartments are exposed to the largest possible audience. Its extensive Sydney coverage, regional, national and global reach offers our clients the chance to tap into this huge resource and with the benefit of economies of scale it makes our office competitive in our marketplace in which we operate.
                            </p>
                            <p>
                                Our office recruits the best with some of the best industry performers including a recently nominated Top 100 Agent in Australia and one of the best Auctioneers in Sydney. As a team we will be able to provide you with exceptional customer service, unrivalled marketing that will ultimately maximise your investment.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
