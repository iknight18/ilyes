import './App.css';
import Form from './component/Form';
import React, { ImageBa } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, li } from 'react-router-dom';
import Tasks from './component/Tasks';
import Edit from './component/Edit';


function App() {
  //const [show,setshow]=useState({vis:true})
  // const [hide,sethide]=useState({vis:true})
  const history = useHistory()
  return (
    <div className="App">
      <h1>THOR SYSTEM</h1>
      <Route exact path="/formulaire" component={() => { return <Form /> }} ></Route>
      <Route exact path="/info" component={() => { return <Tasks /> }} ></Route>
      <Route exact path="/Edit/:id" render={(props)=> <Edit id={props.match.params.id}/>} />
      <div className='pos' >
        <button className='btn btn-dark' style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginRight: "20px"
        }} onClick={() => {
          history.push("/info")
        }

        }>show information</button>
        <button className='btn btn-dark' style={{
          marginTop: "20px",
          marginBottom: "20px"
        }} onClick={() => {
          history.push("/formulaire")
        }

        }>add information</button>
        <button className='btn btn-dark' style={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "20px"
        }} onClick={() => {
          history.push("/")
        }

        }>home APP</button>
      </div>
    </div>
  );
}

export default App;
