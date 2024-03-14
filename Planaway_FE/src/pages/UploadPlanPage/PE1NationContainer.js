import React from "react";
import PE1Nation from "./PE1Nation";

const PE1NationContainer = ({ inputCountry, setInputCountry }) => {
  const handleInputChange = (id, field, value) => {
    setInputCountry((prevInputItems) =>
      prevInputItems.map((item) =>
        item.id === id
          ? { ...item, item: { ...item.item, [field]: value } }
          : item
      )
    );
  };

  const handleAddInput = () => {
    setInputCountry((prevInputItems) => [
      ...prevInputItems,
      {
        id: prevInputItems.length,
        item: {
          continent: "",
          country: "",
        },
      },
    ]);
  };

  const handleDeleteInput = (id) => {
    setInputCountry((prevInputItems) =>
      prevInputItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <PE1Nation
        inputCountry={inputCountry}
        onInputChange={handleInputChange}
        onAddInput={handleAddInput}
        onDeleteInput={handleDeleteInput}
      />
    </div>
  );
};

export default PE1NationContainer;
