/* eslint-disable react/prop-types */
import { useState } from "react";

const SplitForm = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState("you");

  const friendExpense = bill ? bill - yourExpense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !yourExpense) {
      alert("Please enter valid amounts");
      return;
    }

    if (yourExpense > bill) {
      alert("Your expense cannot exceed the total bill amount");
      return;
    }

    onSplitBill(Number(friendExpense), payer);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Split a Bill with {selectedFriend.name}
      </h2>
      <label style={{ display: "block", marginBottom: "5px" }}>
        Bill Amount
      </label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ display: "block", marginBottom: "5px" }}>
        Your Expense
      </label>
      <input
        type="number"
        value={yourExpense}
        onChange={(e) => setYourExpense(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ display: "block", marginBottom: "5px" }}>
        {selectedFriend.name}'s Expense
      </label>
      <input
        type="number"
        value={friendExpense}
        disabled
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
        }}
      />

      <label style={{ display: "block", marginBottom: "5px" }}>
        Who is paying the bill?
      </label>
      <select
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Split
      </button>
    </form>
  );
};

export default SplitForm;
