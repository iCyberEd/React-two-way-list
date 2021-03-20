import React, { useState } from 'react';
import Button from './Button';
import './List.css';

function NestedList(props) {
  let i = props.index
  let nested = props.nested
  let sections = nested.sections
  let options = nested.options
  const [radioActive, radioActiveSwitch] = useState(-1)
  const [liClass, liClassChange] = useState("")
 
  let list = []

  // set data attribute
  function dataGroupName() {
    return options.caption || ""
  }

  function liText(listItem) {
    return Number.isInteger(+listItem) ? "" : listItem 
  }

  function switcher(i) {
    if (i === radioActive) {
      radioActiveSwitch(-1)
    } else {
      radioActiveSwitch(i)
    }
    // console.log(radioActive)
  }

  function checkIfRadioActive(i) {
    return i ===  radioActive ? "unfold" : "collapsed"
  }


  function isButton(item, i) {
    if (typeof item === 'object' && item !== null) {
      return <Button  key={i}
                      index={i}
                      active={checkIfRadioActive(i)}
                      type={options.type}
                      switcher={ switcher }
              />
    }
  }

  function checkNested(item, i) {
    if (typeof item === 'object' && item !== null && Object.keys(item).length === 0) {
      return <ul className="nestedList"><li><span>Empty list</span></li></ul>
    } else if (typeof item === 'object' && item !== null) {
      i += 100
      return <ul className="nestedList"><NestedList key={i} index={i+100} nested={item} /></ul>
    }
  }

  function liAnimating(i) {
    if (i <= liClass && i >= liClass){
      setTimeout( () => "animate", 300) 
    }
  }

  for (let listItem in sections) {
    i++
    list.push(<li className={typeof sections[listItem] === "object"  && "group"}>
      {isButton(sections[listItem], i)}
      <span data-group-name={ dataGroupName() }>{ liText(listItem) }</span>
      {checkNested(sections[listItem], i)}
      </li>)
  }

  return (<React.Fragment>
            {list}
          </React.Fragment>)
}

export default NestedList