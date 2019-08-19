import React, { Component } from "react";

import AccordionWrapper from "../../../../shared/accordion/AccordionWrapper";
import Rota from "./Rota";

const uuid = require("uuid/v4");

class RotaAddon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Carl",
          events: [
            { title: "work", info: "06-14" },
            { title: "pick up Taran", info: "14.30" }
          ]
        },
        {
          name: "Alex",
          events: [
            { title: "work", info: "16-00" },
            { title: "make appointment", info: "dentist" }
          ]
        },
        {
          name: "Isla",
          events: [
            { title: "school", info: "08.30" },
            { title: "cooking day", info: "take 3 euro" },
            { title: "go upstairs", info: "14" }
          ]
        },
        {
          name: "Taran",
          events: [{ title: "nursery", info: "08.30-14.30" }]
        }
      ],
      accordionOpen: false
    };
    this.toggleAccordionHandler = this.toggleAccordionHandler.bind(this);
  }
  toggleAccordionHandler(target) {
    this.setState(prevState => ({
      ...prevState,
      accordionOpen: !prevState.accordionOpen
    }));
  }
  render() {
    const listTitle = "Rota";
    const listNum = this.state.people.length;
    return (
      <AccordionWrapper
        toggleAccordion={this.toggleAccordionHandler}
        accordionOpen={this.state.accordionOpen}
        listTitle={listTitle}
        listNum={listNum}
      >
        {this.state.people.map(person => (
          <Rota key={uuid()} person={person} />
        ))}
      </AccordionWrapper>
    );
  }
}

export default RotaAddon;
