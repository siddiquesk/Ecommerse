import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Authstore";

function AdminUser() {
  const { AuthorisationToken } = useAuth();
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(null); // Track if user is admin

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:8000/admin/user", {
        method: "GET",
        headers: {
          Authorization: AuthorisationToken,
        },
      });

      if (!response.ok) {
        if (response.status === 403) {
          setIsAdmin(false); // User is not an admin
          return;
        }
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch data");
      }

      const data = await response.json();
      setUsers(data.msg);
      setIsAdmin(true); // User is an admin
    } catch (err) {
      console.error("Error fetching user data:", err.message);
      setIsAdmin(false); // If any error occurs, assume not admin
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  const destroyUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/user/delete/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorisationToken,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete user");
      }
      if (response.ok) {
        getAllUserData();
      }
      console.log("User deleted successfully");
    } catch (err) {
      console.error("Error deleting user:", err.message);
    }
  };

  return (
    <div id="admin-user-section">
      <h2 id="admin-user-heading">All Users</h2>

      {isAdmin === false ? (
        <p style={{ color: "red", fontSize: "18px" }}>You are not an admin</p>
      ) : (
        <div id="user-table-container">
          <table id="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button id="update-btn">Update</button>
                  </td>
                  <td>
                    <button
                      id="delete-btn"
                      onClick={() => destroyUser(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminUser;
