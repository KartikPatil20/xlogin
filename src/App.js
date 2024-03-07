import React, {useState} from 'react'
import './App.css';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [match, setMatch] = useState(false);
  const [validate, setValidate] = useState("");
    
  const fromsubmit = (event) =>{
    event.preventDefault();

    if(username === "user" && password === "password"){
      setMatch(true)
      setValidate("")
    }else{
      setMatch(false)
      setValidate("Invalid username or password")
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      {validate && <p>{validate}</p>}
      { match ? <h1>Welcome, user!</h1> : <form>
          <div>
          <label>Username:</label>
          <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} required></input>
          </div>
          <div>
          <label>Password:</label>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
          </div>
          <button type='submit' onClick={(e)=>fromsubmit(e)}>Submit</button>
        </form>}
    </div>
  );
}

export default App;
