/*
Components:

Calendar Setter: (row x col)
- Year Selector 4 x 4 grid
- Month Selector 3 x 4 grid

Calendar:
- Use React-Calendar (https://www.npmjs.com/package/react-calendar)
- Use React-Datepicker (https://www.npmjs.com/package/react-datepicker)
*/

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

ValuePiece = Date | null;

Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ShowCalendar() {
  const [value, onChange] = useState < Value > new Date();

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
