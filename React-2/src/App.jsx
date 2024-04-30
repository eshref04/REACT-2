import  { useState } from 'react';


function App() {
 
  const [check, checkModal] = useState(false);
  function openModal() {
    checkModal(true)
  }

  function closeModal() {
    checkModal(false)
  }
 

  return (
    <div style={{width:'100%',display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center",height:'100vh',gap:'60px'}}>
     <button style={{cursor:"pointer",padding:'12px',borderRadius:'6px',border:'none',backgroundColor:'orangered',color:"white",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} onClick={openModal}>Open Modal</button>

     {
      check?(
        <div  style={{display:'flex',justifyContent:'space-between',width:'80%',alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:'14px'}}>
      <p>Some text in the Modal..</p>
      <span style={{cursor:"pointer",backgroundColor:'orangered',color:"white",padding:"8px"}} onClick={closeModal}>X</span>
     </div>
      ):""
     }
    </div>
  )
}

export default App
