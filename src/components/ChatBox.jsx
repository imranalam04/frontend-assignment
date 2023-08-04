// ChatBox.js

import React, { useState } from "react";
import "./ChatBox.css"; // You can create your own CSS file for additional styling
import axios from "axios";
import { useEffect } from "react";


const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://panorbit.in/api/users.json");
      setUsers(response.data.users);
      console.log({ response });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="chatbox-container">
      <div
        className={`chatbox card ${isOpen ? "open" : ""}`}
        onClick={toggleChatBox}
      >
        <div className="card-header bg-info">
          <h5 className="mb-0">Chat's</h5>
        </div>
        {isOpen && (
          <div className="card-body chatbox-content">
          <div className="user-list">
          {users.map((user) => (
            <div>
            <img src={user.profilepicture} className="rounded-5 mt-4" style={{width:"14%"}} alt="profiles" />
            <h6 className="mx-5" style={{marginTop:"-12%"}}>{user.name}</h6>
            </div>
          ))}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
