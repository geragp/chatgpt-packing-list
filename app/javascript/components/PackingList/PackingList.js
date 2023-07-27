import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const PackingList = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    axios.post('/packing_list', {
      message: message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

	return (
		<div>
      <form onSubmit={ handleSubmit }>
        <input value={message} onChange={(e) => setMessage(e.target.value)}></input>
        <button type="submit">piquele</button>
      </form>
    </div>
	)
}

export default PackingList
