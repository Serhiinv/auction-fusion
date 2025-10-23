import * as React from "react";
import { basePath } from "@/config/basePath";

const ContactPage = () => {
    return (
        <>
            <div className="w-full bg-blue-100 text-gray-900 flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold pt-6 mb-6 text-center">Our Customers</h1>
                <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed ml-2 mr-2 text-center">
                    The Auction Fusion model is simple: create a modular, highly extensible auctions
                    platform and integrate with the best-in-class globally, notably:</h3>

                <div className="w-full px-4 md:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-40">
                        <div className="bg-white p-4 pt-18 rounded-lg shadow-md">
                            <a href="https://www.lyonandturnbull.com/" target="_blank" rel="noopener noreferrer" className="block">
                                <img
                                    alt="Customers"
                                    src={`${basePath}/l&t_logo.svg`}
                                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </a>
                        </div>
                        <div className="bg-white p-4 pt-8 pb-10 rounded-lg shadow-md">
                            <a href="https://sgbaldwins.com/" target="_blank" rel="noopener noreferrer" className="block">
                                <img
                                    alt="Partners diagram"
                                    src={`${basePath}/sgb_logo.svg`}
                                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ContactPage;