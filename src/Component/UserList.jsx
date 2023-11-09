import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUsers(res.data);   
        console.log(res.data)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col px-4">
      
      <table className="table-auto text-start ">
      <caption className="caption-top text-lg text-center font-bold">
    User List.
  </caption>
  <thead className="text-start bg-slate-800 px-5 py-2 text-gray-200">
    <tr className="text-start px-5 py-2 ">
      <th className="text-start  bg-slate-800 text-gray-200">Name</th>
      <th className="text-start">Username</th>
      <th className="text-start">Email</th>
      <th className="text-start">Telephone</th>
      <th className="text-start">Address</th>

    </tr>
  </thead>
  <tbody>
    {
        listOfUsers?.map((user)=> (
<tr key={user.id}>
      <td >{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address.street}, {user.address.city}</td>
    </tr>
        ))
    }
    
   
  </tbody>
</table>
      {/* <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <p>Name:
            
            </p>
            <p>Address</p>
            <p>Email</p>
            <p>Username:</p>
            <p>Telephone:</p>
            <p>City:</p>
          </li>
        
        
        ))}
      </ul> */}
    </div>
  );
};

export default UserList;
