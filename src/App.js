import {  useEffect, useState } from 'react'
import './App.css'
import {marked} from 'marked';
import data from './docs.json';


function App() {
  const [code,setCode]=useState('## Hello');
  const [compiled,setCompiled]=useState('<h2 id="hello">Hello</h2>');
  const [hide,setHide]=useState(true);
  const [docSetup, setDocSetup]=useState(true);
  const [docData,setDocData]=useState("");

 

  const openMD=()=>{
      setHide(true);
  }

  const openPreview=()=>{
    setDocSetup(true);
     setHide(false);
  }

  const openDocs=()=>{
      setHide(false)
      setDocSetup(false);   
      setDocData(JSON.stringify(data,null,2));
  }

  const handleChange=(e)=>{
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  }

  return (
    <>

      <h2>Markdown Previewer React App</h2>
      <div className='container'>
        <div className='btns'>
       <button onClick={openMD}>Markdown</button>
       <button onClick={openPreview}>Preview</button>
       <button onClick={openDocs} >Docs</button>
       </div>
        {hide ?
           <div>
             <textarea onChange={handleChange} value={code}/>
           </div>  :
          docSetup ? 
          <div><textarea value={compiled}/></div> :
          <div> <textarea value={docData}/> </div>
          }
    </div>   
    </>
  )
}

export default App
