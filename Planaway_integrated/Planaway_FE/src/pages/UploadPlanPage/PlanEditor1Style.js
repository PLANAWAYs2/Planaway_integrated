import styled from "styled-components";

export const UPWrapper = styled.div`
  display: flex;
`;

export const PE3Wrapper = styled.div`
  margin: 73px 0 0 40px;

  display: flex;
  flex-direction: column;
  width: 100%;
  hr {
    width: 100%;
    margin: 26px 0 57px;
    border: #efefef 1px solid;
  }
`;

export const PE3Input = styled.input`
  border: none;
  font-family: "Pretendard-Regular";
  color: #2c2c2c;
  font-size: 36px;
  font-weight: 600;
`;

export const PEWrapper = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
`;
