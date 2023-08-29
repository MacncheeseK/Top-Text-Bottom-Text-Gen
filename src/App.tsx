import Nav from './components/Nav';
import Gen from'./components/Gen';
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode=()=>{
    setDarkMode((prevMode)=>!prevMode);
  }
  
  return (
    <section>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Gen darkMode={darkMode}/>
    </section>
  );
};
export default App;
