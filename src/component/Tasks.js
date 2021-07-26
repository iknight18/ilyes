import React,{useState,useEffect} from 'react'
import Edit from './Edit';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch,withRouter,useHistory} from 'react-router-dom';
const Tasks = () => {
    const [list,setlist]=useState([])
    const [id,setId]=useState(0)
    const history = useHistory()
    useEffect(()=>{
        axios.get("http://localhost:3001/info").then((resp)=>{
            setlist(resp.data)
        })
    },[])
    const deleteuser = (id) => {
        axios.post("http://localhost:3001/delete", { userid: id }).then(() => {  
        window.location.reload()
     })

    }
    return (
        <div>
            <table className='table table-dark table-striped ' style={{
                width: "80%",
                margin: "50px 50px 50px 50px"
            }} >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>description</th>
                        <th>type</th>
                        <th>image</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((val,key)=>{
                return (<tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.nom}</td>
                    <td>{val.description}</td>
                    <td>{val.type}</td>
                    <td>
                        <img src={val.image} />
                    </td>
                    <td>
                        <button className='btn btn-primary' style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginRight: "20px"
                        }} onClick={()=>{
                            history.push("/Edit/"+val.id)
                        }
                        } > edit</button>
                        <button className='btn btn-danger' style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginRight: "20px"
                        }} onClick={()=>deleteuser(val.id)
                        } >delete </button>
                    </td>
                </tr>)

            })}
                    
                </tbody>

            </table>

            
            
        </div>
    )
}

export default Tasks
