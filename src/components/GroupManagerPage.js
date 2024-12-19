import React, { useState } from "react";

// Hardcoded user data for demonstration
const hardcodedUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Hotel Manager" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Hotel Manager" },
];

const GroupManagerPage = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleInvite = () => {
    console.log("Invitations sent to:", selectedUsers);
    alert("Invitations sent!");
  };

  const toggleSelection = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  return (
    <div>
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
          {hardcodedUsers.map((user) => (
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
