const PartnersPage = () => {
    return (
        <>
            <div className="w-full bg-blue-100 text-gray-900 flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold pt-6 mb-6 text-center">Our Partners</h1>
                <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed ml-2 mr-2 text-center">
                    The Auction Fusion model is simple: create a modular, highly extensible auctions
                    platform and integrate with the best-in-class globally, notably:</h3>

                <div className="w-full px-4 md:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-40">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <a href="https://stream.bid/" target="_blank" rel="noopener noreferrer" className="block">
                                <img
                                    alt="Partners diagram"
                                    src="https://img.genially.com/68d26f057c28ae001ffb4c58/7d788077-b017-42e2-8694-bf182f6b56c1.svg"
                                    className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                                />
                            </a>
                        </div>
                        <div className="bg-white p-4 pb-10 rounded-lg shadow-md">
                            <a href="https://www.artisio.co/" target="_blank" rel="noopener noreferrer" className="block">
                                <img
                                    alt="Partners diagram"
                                    src="https://img.genially.com/68d26f057c28ae001ffb4c58/ced3574a-8994-44e7-8885-e164de4cdcf1.png"
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
export default PartnersPage;