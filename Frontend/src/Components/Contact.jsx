import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-8">
          Have a question? Need help? Contact us and we'll get back to you soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">📍 Contact Information</h3>
            <p className="text-gray-700 text-sm">
              Feel free to reach out via email or phone.
            </p>
            <p className="mt-4">📧 <a href="mailto:piyushsainiyt868@gmail.com" className="text-gray-600 hover:text-black">PiyushSainiyt868@gmail.com</a></p>
            <p className="mt-2">📞 <a href="tel:+917742853977" className="text-gray-600 hover:text-black">+917742853977</a></p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">📬 Send Us a Message</h3>
            <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="redirect" value="https://thank-you-page-the-tech-shop.vercel.app/" />
              <input type="hidden" name="access_key" value="82acfad1-8915-4689-a780-e9d599072811"></input>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Your Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Write your message..." rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
