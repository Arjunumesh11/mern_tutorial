import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const History = useHistory();
  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          body,
          photo: url,
          title
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error)
            return alert(data.error);

          History.push('/');
          console.log(data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [url])
  const postDetails = () => {

    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "mern_tut")
    data.append("coud_name", "jarvisfriday")
    fetch(" https://api.cloudinary.com/v1_1/jarvisfriday/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setUrl(data.url)
      })
      .catch(err => console.log(err))


  }


  return (
    <div
      className="card input-field"
      style={{
        margin: "50px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input type="text" placeholder="title" value={title} onChange={e => {
        setTitle(e.target.value)
      }} />
      <input type="text" placeholder="body" value={body} onChange={e => {
        setBody(e.target.value)
      }} />
      <div className="file-field input-field">
        <div className="btn #42a5f5 blue darken-1">
          <span>upload</span>
          <input type="file" onChange={e => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light #42a5f5 blue darken-1"
        onClick={() => postDetails()}>
        Submit
      </button>
    </div>
  );
};
export default CreatePost;
