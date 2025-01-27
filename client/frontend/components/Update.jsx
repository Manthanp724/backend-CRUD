import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleUser();
  }, []);

  const getSingleUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/${id}`);
      const userData = response.data;
      userData.map( (users) => {
      setName(users.name);
      setEmail(users.email);
      setAge(users.age);
      console.log(users)
    })
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };

    try {
      await axios.patch(`http://localhost:8080/${id}`, updatedUser);
      navigate("/all");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Update Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
