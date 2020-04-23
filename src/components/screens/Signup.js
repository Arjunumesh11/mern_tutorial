import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const History = useHistory();
    const Postdata = () => {
        fetch("/signup", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error)
                    alert(data.error);
                if (data.message)
                    alert(data.message);
                History.push('/signin');
                console.log(data)
            })

    }

    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2 className="instagram">Instagram</h2>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="btn waves-effect waves-light #42a5f5 blue darken-1"
                    onClick={() => Postdata()}
                >
                    Signup
        </button>
            </div>
        </div>
    );
};

export default Signup;
