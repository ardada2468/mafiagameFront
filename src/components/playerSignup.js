import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerForm() {
  const navigate = useNavigate();

    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("http://localhost:8080/addPlayer?name="+formData.get("name"), requestOptions)
        .then(response => response.text())
        .then(result => localStorage.setItem("player", result))
        // .then(record => localStorage.setItem("id", record['id']))
        .catch(error => console.log('error', error));
      // You can pass formData as a fetch body directly:
      
    console.log(localStorage.getItem("player"))
    const jsonobj = JSON.parse(localStorage.getItem('player'))
    const id = jsonobj.id;
    console.log(id)
    if(id === 1){
      navigate('/admin')
    }else{
      navigate("/")
    }
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
            <label>
                 Enter Name: <input name="name"/>
            </label>

        <button type="submit">Submit form</button>

      </form>
    );
  }
  