import React, { setState } from "react";


function Toggle() {
  let [isOn, setIsOn] = setState(false)
  function handleClick() {
    setIsOn(isOn = !isOn)
  }
  const color = isOn ? "red" : "blue"
  return <button style={{ background: color }} onClick={handleClick}>{setIsOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
