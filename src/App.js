import { useState } from "react";
import "./styles.css";

export default function App() {
  const initialState = {
    prefix: "",
    name: "",
    surname: ""
  };

  const [formValues, setFormValues] = useState(initialState);

  const [names, setNames] = useState([
    {
      first: "eze",
      last: "caste"
    },
    {
      first: "fred",
      last: "simpson"
    }
  ]);

  const [active, setActive] = useState(false);

  const { name, surname, prefix } = formValues;

  const filteredNames = names.filter((name) => {
    return name.last.startsWith(prefix);
  });

  const handleSelectChange = (e) => {
    setActive(true);
    setFormValues({
      ...formValues,
      name: e.target.value.split(",")[1].trim(),
      surname: e.target.value.split(",")[0]
    });
  };
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };
  const reset = () => {
    setFormValues(initialState);
  };
  const addUser = () => {
    const index = names.findIndex(
      (item) => item.first.includes(name) || item.last.includes(surname)
    );
    // validate if user already exists
    if (index !== -1) {
      alert("User already in list");
      reset();
      return null;
    }
    // validate if inputs are empty
    if (name !== "" && surname !== "") {
      let newNames = [...names];
      newNames.push({
        first: name,
        last: surname
      });
      setNames(newNames);
      // clear input fields
      reset();
    } else {
      alert("Please fill out Name and Surname");
    }
  };
  const updateUser = (e) => {
    // find user
    const index = findUserIndex();
    // make copy
    const newNames = [...names];
    newNames[index] = {
      first: name,
      last: surname
    };
    // update names
    setNames(newNames);
  };
  const deleteUser = (e) => {
    // find user
    const index = findUserIndex();
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
    reset();
  };
  const findUserIndex = () => {
    return names.findIndex((item) => {
      return name.includes(item.first) || item.first.includes(name);
    });
  };
  return (
    <div className="App">
      <div id="prefix-search">
        <label htmlFor="prefix">Filter prefix</label>
        <input
          type="text"
          name="prefix"
          value={prefix}
          onChange={handleInputChange}
        />
      </div>
      <div id="list-of-names">
        <select id="names" size="5" onChange={handleSelectChange}>
          {filteredNames.map((name) => (
            <option key={name.first}>
              {name.last}, {name.first}
            </option>
          ))}
        </select>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="surname">Surname: </label>
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div id="button-container">
        <button onClick={addUser}>Create</button>
        <button onClick={updateUser} disabled={!active}>
          Update
        </button>
        <button onClick={deleteUser} disabled={!active}>
          Delete
        </button>
      </div>
    </div>
  );
}
