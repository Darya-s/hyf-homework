import React, { useState } from "react";
import AddShift from "./AddShift";
import CalculatedShift from "./CalculatedShift";


function App() {

  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shifts, setShifts] = useState({});
  const[hourlyWage,setHourlyWage]=useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeStart = (e) => {
    setStartTime(e.target.value);
    console.log(startTime);
  };const onChangeEnd = (e) => {
    setEndTime(e.target.value);
  };const onsubmit = () => {
    let newShifts = { ...shifts };
    if (!(name in shifts)) {
      newShifts[name] = [];
    }
    newShifts[name].push({ start: startTime, end: endTime });
setShifts(newShifts);console.log("click", setShifts);
    console.log(newShifts);
  }; /*const calculateTime=()=>{
  const hourlyWage=endTime-startTime;
   setHourlyWage(hourlyWage);
 }*/


  return (
    <div className="App">
      <AddShift
        onsubmit={onsubmit}
        onChangeName={onChangeName}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
        
      ></AddShift>
      {/* <CalculatedShift shifts={shifts}/> */}
    </div>
  );
}

​
export default App;