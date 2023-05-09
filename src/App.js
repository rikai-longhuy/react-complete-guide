import "./App.css";
import AddUsers from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { Fragment, useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prveUsersList) => {
      return [
        ...prveUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
