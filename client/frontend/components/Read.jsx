import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {

    const [data , setData] = useState([])
    const [error , setError] = useState("")

    const getData = async () => {

        try {
            const response = await axios.get("http://localhost:8080/")
            setData(response.data)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect( () => {
        getData()
    },[])


    const handelDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8080/${id}`)
            setError("Deleted Successfully")
            setTimeout( () => {
                setError("")
                getData()
            }, 1000)
        } catch (error) {
            console.log(setError(error));
        }
    } 

  return (

    <div className="container my-2">
    <h2 className='text-center'>All Data</h2>
    {error && <div class="alert alert-danger" role="alert">{error}</div>}

    <div className="row">
    {data.map( (item) => (
        <div key={item.id} className="col-3">
        <div class="card">
  <div class="card-header">
    Featured Data
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name : {item.name}</li>
    <li class="list-group-item">email : {item.email}</li>
    <li class="list-group-item">age : {item.age}</li>

    <div className="btns" style={{display : 'flex', justifyContent:"space-evenly", padding:'2px' }}>
    <Link to={`/${item._id}`} class="card-link">Update</Link>
    <Link  onClick={ () => handelDelete(item._id)} class="card-link">Delete</Link>
    </div>
  </ul>
</div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Read
