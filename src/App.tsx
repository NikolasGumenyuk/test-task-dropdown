import { useState } from "react";
import CountryOption from "./components/CounryOption/CountryOption";
import Dropdown from "./components/Dropdown/Dropdown";
import "./App.css";
import UserOption from "./components/UserOption/UserOption";

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
    image: "https://xsgame",
  },
];

function App() {
  const [currentCountry, setCurrentCountry] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<string>("");

  const handleChange = (name: string) => {
    if (countries.some((country) => country.name === name)) {
      return setCurrentCountry(name);
    }
    if (users.some((user) => user.name === name)) {
      return setCurrentUser(name);
    }
    console.log(name);
  };

  return (
    <div className="App">
      <Dropdown handleChange={handleChange} currentValue={currentCountry}>
        {countries.map((country) => (
          <CountryOption
            key={country.id}
            data={country}
            isSelected={currentCountry === country.name}
          />
        ))}
      </Dropdown>
      <Dropdown handleChange={handleChange} currentValue={currentUser}>
        {users.map((user) => (
          <UserOption
            key={user.id}
            data={user}
            isSelected={currentUser === user.name}
          />
        ))}
      </Dropdown>
    </div>
  );
}

export default App;
