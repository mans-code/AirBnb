import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { DateRangePicker } from "react-date-range";

import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DatePicker.css";

function Date() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }

  return (
    <div className="datePicker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h5>
        Number Of Guests
        <PeopleIcon />
        </h5>
        <input min={0} defaultValue={2} type="number" />
   
      <Button onClick={() => history.push("/search")} >Search AirBnb</Button>
    </div>
  );
}

export default Date;
