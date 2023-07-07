import { useState } from 'react'
import './index.css'


// Write your Color component here
  const Color = ({color, setSelectedColor}) => {
    return(
      <div className={color}   onClick={() => setSelectedColor(color)}></div>
    
      )
    }
    //I can still see you code <.<
    function App() {
      const [selectedColor, setSelectedColor] = useState("0")
      console.log(useState(0));
      const handleClick = () => {
        setSelectedColor(color)
      };
      return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
        <button onClick={handleClick}>{}color</button>
      </div>
      
       
        <div id="colors-list">
    <Color color = "violet" setSelectedColor = {setSelectedColor}/>
    <Color color = "blue"  setSelectedColor = {setSelectedColor}/>
    <Color color = "green" setSelectedColor = {setSelectedColor}/>
    
  </div>
    </div>
  );
    }
   



export default App;