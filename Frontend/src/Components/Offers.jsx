import React from "react";

const Offers = () => {
    const offers = [
        { 
            id: 1, 
            title: "🔥 20% Off on Gaming Keyboards!", 
            description: "Upgrade your gaming experience with premium mechanical keyboards.", 
            validUntil: "March 10, 2025",
            image: "https://imgs.search.brave.com/2wutyylhpRvqPiDCeEIDqq6rXxwdEPh9Ir1WutzfUUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVsZ2Vlay5jb20v/Y2RuL3Nob3AvZmls/ZXMva2V5Ym9hcmRz/LmpwZz92PTE2ODcx/NzA1MjMmd2lkdGg9/MTMyMA"
        },
        { 
            id: 2, 
            title: "🎧 Free Mouse with Every Purchase of a High-End PC Cabinet!", 
            description: "Limited-time offer on selected gaming PC cases.", 
            validUntil: "March 5, 2025",
            image: "https://imgs.search.brave.com/SwLvAexrFBGZ1G27_oH6617M5L9P4TpXaZAJ3traZDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF5YWdkelNjQ0wu/anBn"
        },
        { 
            id: 3, 
            title: "💻 Special Deal on RGB Gaming Mouse", 
            description: "Get a premium RGB gaming mouse at just $29.99!", 
            validUntil: "March 15, 2025",
            image: "https://imgs.search.brave.com/eGWafNrl6lgCSUYxO-XHEWeq_psSPq4Mpiqdk8-TmpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0tN/TTJjcXVTcGpHaHlQ/U2pNbXd1TkstMzIw/LTgwLmpwZw"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 text-black flex items-center justify-center px-6 py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">🎮 Exclusive Offers</h2>
                <p className="text-gray-600 text-center mb-8">Grab these limited-time deals before they're gone!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div 
                            key={offer.id} 
                            className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition duration-300"
                        >
                            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{offer.title}</h3>
                                <p className="text-gray-700">{offer.description}</p>
                                <p className="text-gray-500 text-sm mt-4">📅 Valid Until: {offer.validUntil}</p>
                                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
                                    Grab Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;
