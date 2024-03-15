import {
  PE3Contents,
  PE3ContentTitle,
  PE3MapWrapper,
  PE3ContentBox,
  PE3ContentBoxLine,
  PE3Container,
} from "./PlanEditor34Style";
import PE3InputContainer from "./PE3InputContainer";

const PlanEditor4 = ({ inputCountry }) => {
  return (
    <PE3Container>
      {inputCountry.map((country, index) => (
        <div key={index}>
          <PE3ContentBoxLine>
            <PE3ContentBox>
              <PE3ContentTitle>
                <h4>{inputCountry[index]?.item?.country}</h4>
              </PE3ContentTitle>

              <PE3Contents>
                <PE3MapWrapper>
                  <PE3InputContainer />
                </PE3MapWrapper>
              </PE3Contents>
            </PE3ContentBox>
          </PE3ContentBoxLine>
        </div>
      ))}

      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>면세점</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>
    </PE3Container>
  );
};

export default PlanEditor4;
