import React from "react";
import { useAuth } from "../context/AuthContext";

function ServiceCards() {
  const { service } = useAuth();

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-emerald-700">Our Services</h1>
        <p className="text-gray-600 mt-2">Explore the services we offer.</p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service && service.length > 0 ? (
          service.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="./services.png" // static image for all services
                  alt="Service"
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.service}</h2>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 font-bold">₹{item.price}</span>
                  <span className="text-gray-500 text-sm">{item.provider}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No services available</p>
        )}
      </div>
    </section>
  );
}

export default ServiceCards;



