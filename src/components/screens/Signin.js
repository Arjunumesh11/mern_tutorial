import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App'
const Signin = () => {

  const { state, dispatch } = useContext(UserContext)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const History = useHistory();
  const Postdata = () => {
    fetch("/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
        email: email
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error)
          alert(data.error);
        else {
          console.log(data)
          localStorage.setItem('jwt', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          console.log(data.user)
          dispatch({ type: "USER", payload: data.user })
          console.log("state " + state)
          History.push('/');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2 className="instagram">Instagram</h2>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn waves-effect waves-light #42a5f5 blue darken-1 " onClick={() => Postdata()} >
          Sigin
        </button>
      </div>
    </div>
  );
};

export default Signin;
