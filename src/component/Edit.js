import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route } from 'react-router'

const Edit = ({id}) => {
  const [Name, setName] = useState('')
  const [desc, setdesc] = useState('')
  const [type, settype] = useState('')
  const [userid, setUserid] = useState(id)
  const [list, setlist] = useState([])
  useEffect(() => {
    console.log(id)
    axios.get("http://localhost:3001/info/"+id).then((resp) => {
      console.log(resp.data)
      setName(resp.data[0].nom)
      setdesc(resp.data[0].description)
      settype(resp.data[0].type)
      
    })
  }, [])


  const submitform = () => {
    axios.post("http://localhost:3001/edit", {
      nom: Name,
      description: desc,
      type: type,
      userid: userid
    }).then(() => {
      alert("work");
    });


  }
  return (
    <div>
    
      <div>
        <form onSubmit={onsubmit}  >
          <label>entrer l'Id</label><br /><br />
          <input type='number' name='id' value={userid} disabled onChange={(e) => {
            setUserid(e.target.value)

          }


          } />
          <br /><br />

          <label>nom</label><br /><br />
          <input type='text' name='nom' placeholder='new' value={Name} onChange={(e) => {

            setName(e.target.value)

          }} /><br /><br />
          <label>Description</label><br /><br />
          <input type='text' name='description' placeholder='new' value={desc} onChange={(e) => {
            setdesc(e.target.value)
          }} /><br /><br />
          <label>Type</label><br /><br />
          <input type='text' name='type' placeholder='new' value={type} onChange={(e) => {
            settype(e.target.value)
          }} /><br /><br />
          <div className='bt'>
            <input type='submit' value='confirmer' className='btn btn-dark' style={{
              marginRight: "30px"
            }} onClick={submitform} />

          </div>
        </form>

      </div>
    </div>
  )
}

export default Edit
