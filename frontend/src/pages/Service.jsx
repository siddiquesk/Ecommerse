import React from "react";
import "../pages/styles/service.css";
import { useAuth } from "../store/Authstore";

function Service() {
  const { service } = useAuth();

  return (
    <div className="service-container">
      <div className="service-header">
        <h2>Our Services</h2>
      </div>
      <div className="card-container">
        {Array.isArray(service) && service.length > 0 ? (
          service.map((item, index) => (
            <div className="card" key={item._id || index}>
              <img
                src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?ga=GA1.1.386693064.1710494351&semt=ais_hybrid"
                alt="Service"
              />
              <div className="card-details">
                <h4>{item.name}</h4>
                <p>
                  <strong>Service:</strong> {item.service}
                </p>
                <p>
                  <strong>Description:</strong> {item.description}
                </p>
                <p className="price">
                  <strong>Price:</strong> ${item.price}
                </p>
                <h5 className="provider">
                  <strong>Provider:</strong> {item.provider}
                </h5>
              </div>
            </div>
          ))
        ) : (
          <h3 className="no-service">No services available</h3>
        )}
      </div>
    </div>
  );
}

export default Service;
