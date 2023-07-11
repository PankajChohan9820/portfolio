import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = ({isDarkTheme}) => {
  return (
    <div className="contact p-4 md:p-8 m-6">
      {/* Google Map */}
      <div className="map-container h-64 mb-4">
        {/* Replace the iframe source with your own Google Maps embed */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?your_map_embed_link_here"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Information */}
      <div className="contact-info md:flex md:items-center mt-12">
        {/* First Column */}
        <div className="contact-column md:w-2/5 md:mr-4">
          <div className="contact-row flex items-center mb-2">
            <FaPhone className="mr-2" />
            <span>+1 8783481130</span>
          </div>
          <div className="contact-row flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span>San Diego, California</span>
          </div>
          <div className="contact-row flex items-center">
            <FaEnvelope className="mr-2" />
            <span>pankajchohan9820@gmail.com</span>
          </div>
        </div>

        {/* Second Column */}
        <div className="contact-column md:w-3/5">
          <h2 className="text-left text-2xl font-bold mb-4">How can I help you?</h2>
          <div className="inner-column md:flex">
            <div className="md:w-2/5 pr-8">
              <div className="contact-row mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </div>
              <div className="contact-row mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </div>
              <div className="contact-row mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </div>
              <div className="contact-row">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="md:w-3/5 mt-4 md:mt-0">
              <div className="message-container">
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Message"
                  className="border border-gray-300 px-2 py-1 w-full"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
