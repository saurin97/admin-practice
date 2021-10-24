import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Example extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = (date:any) => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Example