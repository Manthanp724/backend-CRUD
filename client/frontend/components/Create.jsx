import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [createUser , setCreateUser] = useState("")
  
  console.log(name, email, age);

  const navigate = useNavigate()
  
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };
    try {
      const response = await axios.post("http://localhost:8080/", addUser);
      console.log(response.data);
      setCreateUser("User Created Successfully")
      
      setTimeout( () => {
        setCreateUser("")
        setName("")
      setEmail("")
      setAge(0)
      navigate("/all")
    }, 1000)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div class="container">
    {createUser && (<div class="alert alert-danger" role="alert">{createUser}</div>)}
    <h2 className='text-center'>Create Data</h2>
      <form onSubmit={HandleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
