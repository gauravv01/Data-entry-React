import React, { useState } from "react";
import Adduser from "./components/User/Adduser";
import UserList from "../src/components/User/UserList";

function App() {
  const [userslist, setuserslist] = useState([]);
  const [User,setUser] = useState('');

  const Userhandler = (uName, uAge) => {
    setuserslist((prevlist) => {
      return [
        ...prevlist,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const removehandler = (selecteduser) => {
    setuserslist((prevlist) => {
      return prevlist.filter((user) => user.id !== selecteduser);
    });
  };
  const modifyhandler = (selecteduser) => {
    setUser(selecteduser);
    setuserslist((prevlist) => {
      return prevlist.filter((user) => user.id !== selecteduser.id);
    });
  };

  const Removemodified = () => {
   return setUser(null);
  };

  return (
    <div>
      <Adduser Adduser={Userhandler} user={User} Removeuser={Removemodified} />
      <UserList
        users={userslist}
        onModify={modifyhandler}
        onRemove={removehandler}  
      />
    </div>
  );
}

export default App;
