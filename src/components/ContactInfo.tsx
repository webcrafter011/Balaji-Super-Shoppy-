import React from 'react';
import { MapPin, Phone, User } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visit <span className="text-green-600">Us Today</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to see you in person. Drop by our store or get in touch with us for any inquiries.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <User className="text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Owner</h4>
                    <p className="text-gray-600">Niraj Gujrati</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+91 77982 23222</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                    5/6 dyma complex, Nimzari naka, Shirpur, 425405<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-2">Opening Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Monday - Friday:</p>
                    <p className="font-medium">Saturday:</p>
                    <p className="font-medium">Sunday:</p>
                  </div>
                  <div>
                    <p>8:00 AM - 9:00 PM</p>
                    <p>8:00 AM - 8:00 PM</p>
                    <p>9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-green-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Message</label>
                  <textarea 
                    rows={3}
                    className="w-full p-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;