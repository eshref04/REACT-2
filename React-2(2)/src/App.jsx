import  { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#222',height:'100vh',margin:"-8px",paddingTop:'40px',paddingLeft:'30px'  }}>
      <button onClick={toggleDarkMode} style={{textAlign:'center' ,cursor:'pointer' ,padding:'16px',borderRadius:'6px',border:'none',boxShadow: darkMode? "rgba(255, 255, 255, 0.35) 0px 5px 15px":"rgba(0, 0, 0, 0.35) 0px 5px 15px",backgroundColor:darkMode ? 'orange' : '#fff', color: darkMode ? '#222' : '#222'}}>
        WHITE MODE
      </button>
      <h1 style={{textAlign:'center',color:darkMode ? "orange":"black"}}>WELCOME TO <br /> REACT JS</h1>
      
    </div>
  );
};

export default App;


