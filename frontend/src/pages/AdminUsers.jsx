import React, { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { BACKEND_URL } from "../utils/util"
function AdminUsers() {
  const { AuthorizationToken } = useAuth();
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/admin/users`, {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        }
      });
      const result = await response.json();
      setUsers(result.users || []);
    } catch (err) {
      // Optionally show an error toast here
    }
  };

  useEffect(() => {
    if (AuthorizationToken) {
      getUserData();
    }
  }, [AuthorizationToken]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/admin/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        }
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.msg || "User deleted");
        // Refresh the user list after deletion
        getUserData();
      }
    } catch (err) {
      // Optionally show an error toast here
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality if needed
  };

  return (
    <div className="pb-3">
      <h1 className="text-3xl font-bold mb-4">Users List</h1>

      {/* Table for medium+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4 flex gap-4">
                    <Link
                      to={`/admin/contact`}  // You might want to update this route for editing users specifically
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <FaEdit /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card/List view for small screens */}
      <div className="md:hidden space-y-4">
        {users.length > 0 ? (
          users.map(user => (
            <div
              key={user._id}
              className="bg-white p-4 rounded shadow border border-gray-200"
            >
              <p><strong>Name:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <div className="mt-3 flex gap-4">
                <button
                  onClick={() => handleEdit(user._id)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-6 text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;



