import React from "react";

export default class Accordion extends React.Component{
  state = {
    currentContent: -1,
    expanded: false
  };

  handleClick(index) {
    this.setState({currentContent: index, expanded: !this.state.expanded})
  }

  displayContent(currentContent) {
    if (this.props.sections) {
    let buttonDisplay = this.props.sections.map((section, index ) => (
      <li key={index}><button onClick={() => this.handleClick(index)}>{section.title}</button>
      {(this.state.currentContent === index && this.state.expanded === true) && <p>{section.content}</p>}
      </li>
     ))
    return buttonDisplay;
    } else {
      return <li></li>
    }
  };

  render() {
    let showButton = this.displayContent(this.state.currentContent)
    return (
    <ul>{showButton}</ul>
   )
  }
}


