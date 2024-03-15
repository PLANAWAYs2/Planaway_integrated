import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { differenceInDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { PE1DayBox, PE1ContentTitle } from "./PE1DayStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const PE1Day = ({ numDays, setNumDays }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [numNights, setNumNights] = useState(0);

  useEffect(() => {
    const nights = differenceInDays(
      selectionRange.endDate,
      selectionRange.startDate
    );
    const days = nights + 1; // 체크인/체크아웃 날을 포함하기 위해 +1

    setNumNights(nights);
    setNumDays(days);
  }, [selectionRange]);

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  return (
    <PE1DayBox>
      <PE1ContentTitle>
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        {/*<h4>여행할 기간을 입력하세요.</h4>*/}
        <h4>
          {`${selectionRange.startDate.toLocaleDateString()} - ${selectionRange.endDate.toLocaleDateString()}`}
          {` (${numNights}박 ${numDays}일)`}
        </h4>
      </PE1ContentTitle>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </PE1DayBox>
  );
};

export default PE1Day;
