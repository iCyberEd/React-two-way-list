import React, { useState } from 'react';

const Button = (props) => {
  let {index, active, type, switcher} = props
  let [checkbox, checkboxSwitch] = useState("collapsed")

  function switchButton() {
    console.log(index)
    type === "radio" ? switcher(index) : checkboxIsActive()
  }

  function checkboxIsActive() {
    checkbox === "collapsed" ? checkboxSwitch("unfold") : checkboxSwitch("collapsed")
  }

  return (<div className={"btn " + type + " " + (type === "radio" ? active : checkbox)} 
              onClick={switchButton}></div>)
}

export default Button