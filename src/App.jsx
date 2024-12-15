import Friendslist from "./eat-n-split/Friendslist";
import Frndaddform from "./eat-n-split/Frndaddform";
import SplitForm from "./eat-n-split/SplitForm";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showaddform, setShowaddform] = useState(false);
  function handleshowaddfrnd() {
    setShowaddform(!showaddform);
  }
  
  function handleaddfriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowaddform(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friendslist friends={friends} />
        {showaddform && <Frndaddform  onaddfriends={handleaddfriend} />}
        <button
          onClick={handleshowaddfrnd}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showaddform ? "Close" : "Add Friend"}
        </button>
      </div>
      <SplitForm />
    </div>
  );
}
export default App;
