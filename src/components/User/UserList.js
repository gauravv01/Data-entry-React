import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './UsersList.module.css'

const UserList=props=>{

    return(
        <Card className={classes.users}>
<ul>
    {props.users.map(user=>(
        <li key={user.id} >{user.name} ({user.age} years old)
        <Button onClick={props.onModify.bind(this,user)}>Modify</Button>
        <Button onClick={props.onRemove.bind(this,user.id)}>Delete</Button></li>
    ))}
</ul>
        </Card>
    )
}
export default UserList;