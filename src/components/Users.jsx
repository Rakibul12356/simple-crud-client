import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadesUsers = useLoaderData()
    const [users,setUsers]= useState(loadesUsers)
    const handleDelete = _id => {
        console.log(_id);
       fetch(`http://localhost:5000/users/${_id}`,{
        method:"DELETE"
        
      })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
            const remaining = users.filter(user=>user._id !== _id)
            setUsers(remaining)
        }
       })
    }

    return (
        <div>
            <h2>users:{users.length}</h2>
            <div>
                {
                    users.map(user => <h2 key={user.id}>{user.name} {user._id} <button
                        onClick={() => handleDelete(user._id)}>x</button></h2>)
                }
            </div>
        </div>
    );
};

export default Users;