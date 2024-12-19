import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GroupManagerPage.css"; // Adaugă stiluri personalizate

const GroupManagerPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/group-managers")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching group managers:", error));
  }, []);

  const handleInvite = () => {
    axios
      .post("/api/invitations", { users: selectedUsers })
      .then(() => alert("Invitations sent!"))
      .catch((error) => console.error("Error sending invitations:", error));
  };

  const toggleSelection = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  return (
    <div className="group-manager-page">
      <h2>Group Manager</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Invite</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleSelection(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleInvite}>Send Invitations</button>
    </div>
  );
};

export default GroupManagerPage;
