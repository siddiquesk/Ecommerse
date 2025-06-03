import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

function AdminContact() {
  const { AuthorizationToken } = useAuth();
  const [contact, setContact] = useState([]);

  const getContactData = async () => {
    try {
      const response = await fetch('https://ecommerse-web.onrender.com/api/admin/contact', {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        }
      });
      const result = await response.json();
      console.log('contact data', result);
      setContact(result.contacts || []);
    } catch (err) {
      // You may want to add error toast here
    }
  };

  useEffect(() => {
    if (AuthorizationToken) {
      getContactData();
    }
  }, [AuthorizationToken]);

  const handleEdit = (id) => {
    // Implement edit functionality as needed
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://ecommerse-web.onrender.com/api/admin/contact/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg || "Contact deleted");
        // Refresh the contact list after delete
        getContactData();
      }
    } catch (err) {
      // Optionally show an error toast here
    }
  };

  return (
    <div className="pb-3">
      <h1 className="text-3xl font-bold mb-4">Contact Messages</h1>

      {/* Desktop/tablet view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contact.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No contact messages found.
                </td>
              </tr>
            ) : (
              contact.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{item.username}</td>
                  <td className="py-3 px-4">{item.email}</td>
                  <td className="py-3 px-4">{item.message}</td>
                  <td className="py-3 px-4 flex gap-4">
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-4">
        {contact.length === 0 ? (
          <p className="text-center py-6 text-gray-500">No contact messages found.</p>
        ) : (
          contact.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded shadow border border-gray-200"
            >
              <p><strong>Name:</strong> {item.username}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Message:</strong> {item.message}</p>
              <div className="mt-3 flex gap-4">
                <button
                  onClick={() => handleEdit(item._id)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminContact;



