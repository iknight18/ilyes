import React,{useState,useEffect} from 'react'
import axios from 'axios';



const Form = () => {
   const [Name,setName]=useState('')
   const [desc,setdesc]=useState('')
   const [type,settype]=useState('')
   const [file,setfile]=useState(null)
   const [fileName,setfilename]=useState('')
   const [filetype,setfiletype]=useState('')
   //const [list,setlist]=useState([])
   const [show,setshow]=useState({vis:true})
   /*useEffect(()=>{
       axios.get("http://localhost:3001/info").then((resp)=>{
           setlist(resp.data)
       })
   },[])*/
   const submitform = () => {
    axios.post("http://localhost:3001/upload",{
      nom: Name,
      description: desc,
      type:type,
      filename:fileName
    }).then(() => {
      axios.post("http://localhost:3001/uploaddrive",{
      nom: Name,
      description: desc,
      type:type,
      filename:fileName,
      filetype:filetype
    })
    });
    const form= new FormData();
    form.append("file",file);
    console.log(form)
    axios.post("http://localhost:3001/upload",form).then((res)=>{
      console.log('file uploaded with success')

    })
  };
  
  
    return (
        <div className='container' >
        <div>
        <form onSubmit={onsubmit} className='frr' >
            <label>nom</label><br/><br/>
            <input type='text' name='nom' onChange={(e)=>{
                setName(e.target.value)
            }} /><br/><br/>
            <label>Description</label><br/><br/>
            <input type='text' name='description' onChange={(e)=>{
                setdesc(e.target.value) }}/><br/><br/>
                <label>Type</label><br/><br/>
              <input type='text' name='type' onChange={(e)=>{
                settype(e.target.value) }}/><br/><br/>
            <input type='file' name='file' onChange={(e)=>{
                setfile(e.target.files[0])
                setfilename(e.target.files[0].name);
                setfiletype(e.target.files[0].type);
              }
              }/><br/><br/>  
              <div className='bt'>                  
            <input type='submit' value='confirmer' className='btn btn-dark' style={{
              marginRight:"30px"
            }} onClick={submitform} />
           
            </div>
        </form>
               
        </div>
        </div>
    )
}

export default Form
