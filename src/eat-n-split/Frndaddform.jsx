// import React from 'react'
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Frndaddform = ( {onaddfriends} ) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  };
  function handlesubmit(e) {

    if (!name) {
      alert("Please enter a name");
      return;
    }
    e.preventDefault();
    
    const newFriend = {
      id: Date.now(),
      name,
      image: image || "https://i.pravatar.cc/48",
      balance: 0,
    };
    onaddfriends(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form style={formStyle} onSubmit={handlesubmit}>
      <label htmlFor="" style={labelStyle}>
        Friend Name
      </label>
      <input
        type="text"
        style={inputStyle}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="" style={labelStyle}>
        Image url
      </label>
      <input
        type="text"
        style={inputStyle}
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button style={buttonStyle}>Submit</button>
    </form>
  );
};

export default Frndaddform;
