import './Login.css';
import { useState } from 'react';
import Header from '../../components/Header';
import { Container } from '../../Layout';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/signUp');
  };

  const handleFindId = () => {
    navigate('/findId');
  };

  const handleFindPw = () => {
    navigate('/findPw');
  };

  return (
    <>
      <Header />
      <Container>
        <div className="LLoginPage">
          <div className="LLogin">로그인</div>
          <div className="Linfo">
            <div className="LidPwBtn">
              <div className="LidPw">
                <div className="Lid">
                  <Input text="아이디" type="id" btnState="false" />
                </div>
                <div className="Lpassword">
                  <Input text="비밀번호" type="password" btnState="false" />
                </div>
              </div>
              <button onClick={handleSubmit} className="LLoginButton">
                로그인
              </button>
            </div>
            <div className="Ladd">
              <div className="LSignup">
                <span>아직 계정이 없으신가요?</span>
                <button onClick={handleSignUp}>회원가입</button>
              </div>
              <div className="LFindId">
                <span>혹시 아이디를 잊으셨나요?</span>
                <button onClick={handleFindId}>아이디 찾기</button>
              </div>
              <div className="LFindPw">
                <span>혹시 비밀번호를 잊으셨나요?</span>
                <button onClick={handleFindPw}>비밀번호 찾기</button>
              </div>
            </div>
          </div>
          <div className="Lline1"></div>
          <div className="LanotherWay">
            <span>다른 방법으로 로그인</span>
            <button>
              <img
                src={process.env.PUBLIC_URL + '/assets/google.png'}
                alt="googleLogo"
              ></img>
              <div className="Lline2"></div>
              <div className="LgoogleLogin">구글 아이디로 로그인</div>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
