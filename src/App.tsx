import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import "./App.css";
import { Data } from "./models/Data";

const countries = [
  { name: "Norway", id: 1 },
  { name: "Finland", id: 2 },
  { name: "Estonia", id: 3 },
  { name: "Denmark", id: 4 },
];

const users = [
  {
    name: "Alex",
    surname: "Thurner",
    id: 1,
    image: "https://xsgames.co/randomusers/assets/avatars/male/51.jpg",
  },
  {
    name: "Elvis",
    surname: "Dolsen",
    id: 2,
    image: "https://xsgames.co/randomusers/assets/avatars/male/42.jpg",
  },
  {
    name: "Susann",
    surname: "Hark",
    id: 3,
    image: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
  },
  {
    name: "Veronica",
    surname: "Briar",
    id: 4,
    image: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
  },
];

function App() {
  const [currentCountry, setCurrentCountry] = useState<Data>({
    id: 0,
    name: "Please select a country",
  });
  const [currentUser, setCurrentUser] = useState<Data>({
    id: 0,
    name: "Please select a user",
  });

  const handleChange = (item: Data) => {
    if (countries.some((country) => country.name === item.name)) {
      setCurrentCountry(item);
    }
    if (users.some((user) => user.name === item.name)) {
      setCurrentUser(item);
    }
  };

  return (
    <div className="App" onClick={() => console.log("click")}>
      <Dropdown
        handleChange={handleChange}
        currentValue={currentCountry}
        data={countries}
      />
      <Dropdown
        handleChange={handleChange}
        currentValue={currentUser}
        data={users}
      />
    </div>
  );
}

export default App;
