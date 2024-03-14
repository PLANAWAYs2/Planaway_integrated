import {
  PE3Contents,
  PE3ContentTitle,
  PE3MapWrapper,
  PE3ContentBox,
  PE3ContentBoxLine,
  PE3Container,
} from "./PlanEditor34Style";
import PE3InputContainer from "./PE3InputContainer";

const PlanEditor3 = () => {
  return (
    <PE3Container>
      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>항공 관련</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>

        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>생활</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>

      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>전자 기기</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>

        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>기타</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>

      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>샤워 화장</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>

        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>추가로 작성하세요</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>

      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>의류</h4>
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

export default PlanEditor3;
