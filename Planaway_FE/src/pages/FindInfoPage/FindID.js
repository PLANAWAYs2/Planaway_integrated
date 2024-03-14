import { useState } from 'react';
import { Container } from '../../Layout';
import Header from '../../components/Header';
import Input from '../../components/Input';
import './FindId.css';
import { useNavigate } from 'react-router-dom';

const FindId = () => {
  const navigate = useNavigate();
  const [stateMsg, setStateMsg] = useState('');

  const handleFindPw = () => {
    navigate('/findPw');
  };

  return (
    <>
      <Header />;
      <Container>
        <div className="FIFindID">
          <div className="FIText">아이디 찾기</div>
          <div className="FIInputAndFP">
            <div className="FIInput">
              <Input
                text="이메일"
                btnText="이메일 전송하기"
                type="email"
                setStateMsg={setStateMsg}
                btnState="true"
              />
            </div>
            <div className="FIFindPw">
              <span>혹시 비밀번호를 잊으셨나요?</span>
              <button onClick={handleFindPw}>비밀번호 찾기</button>
            </div>
          </div>
          <div className="FIDescription">{stateMsg}</div>
        </div>
      </Container>
    </>
  );
};

export default FindId;
