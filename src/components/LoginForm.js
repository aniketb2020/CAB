import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logInCustomer } from '../services/userLogService';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const user = { username, password };
        console.log(user);
        logInCustomer(user).then((response) => {
            console.log(response.data);
            navigate('/user');
        }).catch(error => {
           console.log(error);
        });

    }
  return (
       <div>
      <br /><br />
      <div className="container">
     <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
      <h2 className="text-center">Login</h2>
     <div className="card-body">
     <form>
      <div className="form-group mb-2">
      <label className="form-label">Username:</label>
     <input
      type="text"
        name="username"
        className="form-control"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
       />

     </div>

     <div className="form-group mb-2">
     <label className="form-label">Password:</label>
     <input
     type="password"
     name="password"
     className="form-control"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
      />
     </div>
         <button className="btn btn-success" onClick={handleLogin}>Login</button>
      </form>
     </div>
     </div>
      </div>
     </div>
     </div>

    )

}

export default LoginForm;

 