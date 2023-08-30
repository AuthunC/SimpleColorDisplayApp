import { useState } from "react";
import Box from "./Box";
import Form from "./Form";

function App() {
  const [color,setColor]=useState(' ');
  const [hex,setHex]=useState(' ');
  const [textColor,setTextColor]=useState(true);
  const obj={
    1:"Hey",
    2:"Hi"
  };
  const createJSON=JSON.stringify(obj);
  console.log(createJSON);
  return (
    <div className="App">
      <Box 
        color={color}
        hex={hex}
        textColor={textColor}
      />
      <Form 
        color={color}
        setColor={setColor}
        setHex={setHex}
        textColor={textColor}
        setTextColor={setTextColor}
      />
    </div>
  );
}

export default App;
