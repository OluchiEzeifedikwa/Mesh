

import { useEffect, useState } from 'react';

function App() {
    const [ users, setUsers ] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, []);
  
  
    return (
      <div>
        <p>hello</p>
        {users.map(user => (
          <p key={user.id}>{user.email},{user.username}</p>
          ))}
      </div> 
    );
  }
  
  export default App;
  