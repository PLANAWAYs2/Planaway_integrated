import React, { useState } from "react";
import {
  PE3PlusMinusBtn,
  PE3InputForm,
  PE3SearchForm,
  PE3City,
  PE3BtnWrapper,
  PE3Circle,
} from "./PE3InputStyle";

const PE3Input = ({ inputItems, AddInput, DeleteInput, onChange }) => {
  const [circleColors, setCircleColors] = useState(
    Array(inputItems.length).fill("#d9d9d9")
  );

  const handleClickCircle = (index) => {
    const newCircleColors = [...circleColors];
    newCircleColors[index] =
      newCircleColors[index] === "#d9d9d9" ? "#FF6827" : "#d9d9d9";
    setCircleColors(newCircleColors);
  };

  return (
    <PE3City>
      {inputItems.map((item, index) => (
        <PE3SearchForm key={item.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PE3Circle
              style={{ backgroundColor: circleColors[index] }}
              onClick={() => handleClickCircle(index)}
            />
            <PE3InputForm
              name="one"
              type="text"
              defaultValue={item.one}
              onChange={(e) => onChange(e, item.id)}
            />
          </div>
          {index > 0 && inputItems[index - 1] && (
            <PE3PlusMinusBtn onClick={() => DeleteInput(item.id)}>
              -
            </PE3PlusMinusBtn>
          )}
        </PE3SearchForm>
      ))}
      <PE3BtnWrapper>
        <PE3PlusMinusBtn onClick={() => AddInput()}>+</PE3PlusMinusBtn>
      </PE3BtnWrapper>
    </PE3City>
  );
};

export default PE3Input;
