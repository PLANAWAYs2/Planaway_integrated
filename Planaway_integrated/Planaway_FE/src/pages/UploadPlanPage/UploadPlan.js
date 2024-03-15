import { useState, useRef } from "react";
import Header from "../../components/Header.js";
import PlanSideBar from "../../components/PlanSideBar.js";
import { Container } from "../../Layout.js";
import {
  UPWrapper,
  PE3Input,
  PE3Wrapper,
  PEWrapper,
} from "./PlanEditor1Style.js";
import PlanEditor1 from "./PlanEditor1.js";
import PlanEditor2 from "./PlanEditor2.js";
import PlanEditor3 from "./PlanEditor3.js";
import PlanEditor4 from "./PlanEditor4.js";

const UploadPlan = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const titleRef = useRef();
  const [title, setTitle] = useState("");
  const [numDays, setNumDays] = useState(0);

  const [inputCountry, setInputCountry] = useState([
    {
      id: 0,
      item: {
        continent: "",
        country: "",
      },
    },
  ]);

  return (
    <>
      <Header />
      <Container>
        <UPWrapper>
          <PlanSideBar
            setActive1={setActive1}
            setActive2={setActive2}
            setActive3={setActive3}
            setActive4={setActive4}
          />
          <PE3Wrapper>
            <PE3Input
              placeholder="제목을 입력하세요."
              value={title}
              ref={titleRef}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <hr />
            <PEWrapper isActive={active1}>
              <PlanEditor1
                numDays={numDays}
                setNumDays={setNumDays}
                inputCountry={inputCountry}
                setInputCountry={setInputCountry}
              />
            </PEWrapper>

            <PEWrapper isActive={active2}>
              <PlanEditor2 numDays={numDays} inputCountry={inputCountry} />
            </PEWrapper>
            <PEWrapper isActive={active3}>
              <PlanEditor3 />
            </PEWrapper>
            <PEWrapper isActive={active4}>
              <PlanEditor4 inputCountry={inputCountry} />
            </PEWrapper>
          </PE3Wrapper>
        </UPWrapper>
      </Container>
    </>
  );
};

export default UploadPlan;
