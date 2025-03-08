import React from "react";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Top 5 Gaming Keyboards for 2025 🎮",
            description: "Discover the best mechanical keyboards for gaming enthusiasts.",
            date: "Feb 24, 2025",
            image: "https://imgs.search.brave.com/eRxOV5TioXJ7rSP1k8gNsQQG-omrAPmQWA-_dGeh1I8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zd2l0/Y2hhbmRjbGljay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTIvSU1HXzAw/NzItMTAyNHg2ODMu/anBn",
            link: "https://www.tomshardware.com/peripherals/gaming-keyboards/best-gaming-keyboards"
        },
        {
            id: 2,
            title: "How to Build a Budget Gaming PC 💻",
            description: "A step-by-step guide to assembling a high-performance gaming rig without overspending.",
            date: "Feb 18, 2025",
            image: "https://imgs.search.brave.com/uKzh8ZPC9gN3xkofdxotcTIm9P01AOkFLzQ-0Xd-3BU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI2/NzAwMjMwL3Bob3Rv/L3Nlbmlvci1tYW4t/YXNzZW1ibGluZy1h/LWRlc2t0b3AtY29t/cHV0ZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU1naW43/aUFraEg4a0liSGtG/Q3MtaUJZRHlId3k5/bXJKTFFhN2hqSDJ2/eHc9",
            link: "https://www.tomshardware.com/best-picks/best-pc-builds-gaming"
        },
        {
            id: 3,
            title: "Mechanical vs. Membrane Keyboards",
            description: "Understand the differences between mechanical and membrane keyboards.",
            date: "Feb 10, 2025",
            image: "https://imgs.search.brave.com/41i_OnHWJRbuQsLGbQP3xOvsAn9OS8x479qtjES1hZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3NV/cVdZeHNUTEsyV0dI/Y3VvUUhpSzctMTIw/MC04MC5qcGVn",
            link: "https://www.corsair.com/us/en/explorer/gamer/keyboards/mechanical-vs-membrane-keyboard/"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-black flex items-center justify-center">
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-center mb-6">Latest Blog Posts</h2>
                <p className="text-gray-600 text-center mb-8">
                    Stay updated with the latest tech news, guides, and buying tips!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                            <p className="text-gray-700 text-sm mb-4">{post.description}</p>
                            <p className="text-gray-500 text-xs mb-4">📅 {post.date}</p>
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-300"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
