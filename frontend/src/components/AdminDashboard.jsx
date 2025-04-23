// frontend/components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchReports();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("/api/admin/users");
    setUsers(res.data.users);
  };

  const fetchReports = async () => {
    const res = await axios.get("/api/admin/reports");
    setReports(res.data.reports);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`/api/admin/users/${id}`);
      fetchUsers(); // Refresh after deletion
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">👥 All Users</h2>
      <table className="w-full mb-8 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="text-center border-t">
              <td className="p-2">{u.username}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteUser(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

  

      <h2 className="text-2xl font-bold mb-4">📩 User Reports</h2>
      {reports.map((r) => (
        <div
          key={r._id}
          className="border rounded-md p-4 mb-4 shadow bg-white"
      >
        <p className="font-semibold">
          {r.reportedBy?.username || "Unknown User"} ({r.reportedBy?.role || "Unknown Role"})
        </p>
        <p className="text-gray-800 my-2">"{r.description}"</p>
    
        {r.propertyId && (
          <p className="text-gray-700 mt-1">
            🏠 <strong>Reported Property:</strong> {r.propertyId.houseName}
          </p>
        )}
     
        <p className="text-xs text-gray-500 mt-1">
          Reported on {new Date(r.createdAt).toLocaleString()}
        </p>
      </div>
      ))}

    </div>
  );
};

export default AdminDashboard;
