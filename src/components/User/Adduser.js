import React, { useState,useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "./ErrorModal";
import classes from "./AddUser.module.css";

const Adduser = (props) => {
  const [enteredusername, setenteredusername] = useState("");
  const [Modifiedusername, setModifiedusername] = useState('');
  const [enteredage, setenteredage] = useState("");
  const [Modifiedage, setModifiedage] = useState('');
  const [error, seterror] = useState();

  useEffect(()=>{
  if (props.user) {
    let name=props.user.name;
    let age=props.user.age;
    setModifiedusername(name );
    setModifiedage( age);
  }
  },[props.user])


  const Onadduser = (event) => {
    event.preventDefault();
    if (
      (enteredage && enteredusername&&  (enteredusername.trim().length === 0 || enteredage.trim().length === 0))
    ) {
      seterror({
        title: "Invalid Input!",
        message: "Name and Age should be non-empty values.",
      });
      return;
    }
    if (
      props.user &&
      (Modifiedusername.trim().length === 0 || Modifiedage.trim().length === 0)
    ) {
      seterror({
        title: "Invalid Input!",
        message: "Name and Age should be non-empty values.",
      });
      return;
    }
    if ((enteredage && enteredage < 1) || (props.user && Modifiedage < 1)) {
      seterror({
        title: "Invalid Input!",
        message: "Age should be greater than 0 (>0)",
      });
      return;
    }
    props.user
      ? props.Adduser(Modifiedusername, Modifiedage)
      : props.Adduser(enteredusername, enteredage);
    setenteredusername("");
    setenteredage("");
    props.Removeuser();
    setModifiedusername('');
    setModifiedage('');
  };

  function namechangegandler(event) {
    setenteredusername(event.target.value);
  }
  function agechangegandler(event) {
    setenteredage(event.target.value);
  }
  function errorhandler() {
    seterror(null);
  }
  return (
    <div>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorhandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={Onadduser}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={props.user ? Modifiedusername : enteredusername}
            onChange={namechangegandler}
          />
          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            value= {props.user ? Modifiedage : enteredage}
            onChange={agechangegandler}
          />
          <Button type="Submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Adduser;
