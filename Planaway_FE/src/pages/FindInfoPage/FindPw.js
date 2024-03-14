import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container } from '../../Layout';

import './FindPw.css';
const FindPw = () => {
  const [stateMsg, setStateMsg] = useState('');

  const navigate = useNavigate();

  const onChangePw = () => {
    //새 비밀번호 데이터베이스에 저장
    navigate('/login');
  };
  return (
    <>
      <Header />;
      <Container>
        <div className="FPFindPW">
          <div className="FPText">비밀번호 찾기</div>
          <div className="FPInput">
            <Input
              text="이메일"
              btnText="이메일 전송하기"
              type="email_verify"
              setStateMsg={setStateMsg}
              btnState="true"
            />
            <Input
              text="인증번호"
              btnText="인증번호 확인"
              type="verify"
              setStateMsg={setStateMsg}
              btnState="true"
            />
            <Input
              text="새 비밀번호"
              type="password"
              setStateMsg={setStateMsg}
              btnText="비밀번호 확인"
              btnState="true"
            />
            <Input
              text="새 비밀번호 확인"
              type="passwordCheck"
              setStateMsg={setStateMsg}
              btnState="false"
            />
            <div className="FPCheckBtn">
              <button onClick={onChangePw}>비밀번호 변경하기</button>
            </div>
          </div>
          <div className="FPDescription">{stateMsg}</div>
        </div>
      </Container>
    </>
  );
};

export default FindPw;
