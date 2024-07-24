import { useState } from "react";
import "./DateRangePickerMUI.css";
import { DateRange, DateRangePicker } from "@mui/lab";
import { TextField, TextFieldProps, Input } from "@mui/material";
import Vacation from "../../../Model/Vacation";

function DateRangePickerMUI(): JSX.Element {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Date>>([
    null,
    null,
  ]);
  const currentDate = new Date();

  const handleDateChange = (newValue: [Date | null, Date | null]) => {
    setSelectedDateRange(newValue);
  };

  return (
    <div className="DateRangePickerMUI">
      <DateRangePicker
        startText="Start Date"
        endText="End Date"
        value={selectedDateRange}
        onChange={handleDateChange}
        // renderInput={(props.vacationData.startDate, props.vacationData.endDate) => (
        //     <Input {...props.vacationData.startDate} />
        //     <Input {...props.vacationData.endDate} />
        // )}
      />
    </div>
  );
}

export default DateRangePickerMUI;
