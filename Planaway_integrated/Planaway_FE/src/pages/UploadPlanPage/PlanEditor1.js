import PE1NationContainer from "./PE1NationContainer";
import PE1Day from "./PE1Day";

const PlanEditor1 = ({
  numDays,
  setNumDays,
  inputCountry,
  setInputCountry,
}) => {
  return (
    <>
      <PE1NationContainer
        inputCountry={inputCountry}
        setInputCountry={setInputCountry}
      />
      <PE1Day numDays={numDays} setNumDays={setNumDays} />
    </>
  );
};

export default PlanEditor1;
