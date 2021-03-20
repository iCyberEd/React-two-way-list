import React from 'react';
import './List.css';
import NestedList from './NestedList';
import Button from './Button';

function List() {

  let listItems = {
    listName: "Nagłówek drzewa wielowierszowy",
    mainList: { 
      options: {
        caption: "Poddodział",
        type: "radio",
      },
      sections: {
        1: {
          options: {
            caption: "Zespół",
            type: "checkbox",
          },
          sections: {
                "HR": false,
                "Marketing": false,
                "Analitycy":  {
                    options: {
                      caption: "Podzespół",
                      type: "checkbox",
                    },
                    sections: {
                      "Kalendarz": false,
                      "Kokpit": false,
                      "Widok": false,
                      "Różności": false,
                      "Szukaj": false
                    }
                },
                "Programiści": {
                    options: {
                      caption: "Podzespół",
                      type: "checkbox",
                    },
                    sections: {
                      "Front-end": false,
                      "Middle-front-end": false,
                      "Middle-end": false,
                      "Middle-back-end": false,
                      "Back-end": false
                    },   
                },
          }},
        2: {},
        3: {},
        "Niezrzeszeni": false
      },
    },
  }

  return (<React.Fragment>
    <ul className="main-list">
      <li>
        <Button type="checkbox" 
                key="1000"
                index="-10"
                active="unfold"
                switcher={ () => false }
                />
        <span>{listItems.listName}</span>
        <ul className="nestedList">
          <NestedList index={0} nested={listItems.mainList} />
        </ul>
      </li>
    </ul>
    </React.Fragment>)
}

export default List;
