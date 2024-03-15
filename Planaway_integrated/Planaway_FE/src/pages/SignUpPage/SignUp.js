import './SignUp.css';
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import { Container } from '../../Layout';
import Input from '../../components/Input';

const SignUp = () => {
  const nameInput = useRef();
  const idInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const checkPwInput = useRef();
  const telephoneInput = useRef();

  const [state, setState] = useState({
    name: '',
    id: '',
    email: '',
    password: '',
    checkPw: '',
    telephone: '',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.name.length < 1) {
      nameInput.current.focus();
      return;
    }

    if (state.id.length < 1) {
      idInput.current.focus();
      return;
    }

    if (state.email.length < 1) {
      emailInput.current.focus();
      return;
    }

    if (state.password.length < 1) {
      passwordInput.current.focus();
      return;
    }

    if (state.checkPw.length < 1) {
      checkPwInput.current.focus();
      return;
    }

    if (state.telephone.length < 1) {
      telephoneInput.current.focus();
      return;
    }
    alert('회원가입이 완료되었습니다.');
  };

  return (
    <>
      <Header />
      <Container>
        <div className="SUSingUpPage">
          <div className="SUSignUp">회원가입</div>
          <div className="SUinfoBtn">
            <div className="SUinfo">
              <div className="SUname">
                <Input text="이름" type="name" btnState="false" />
              </div>

              <div className="SUid">
                <Input
                  text="아이디"
                  type="id"
                  btnState="true"
                  btnText="중복 아이디 확인"
                />
              </div>

              <div className="SUemail">
                <Input
                  text="이메일"
                  type="email"
                  btnState="true"
                  btnText="중복 이메일 확인"
                />{' '}
              </div>
              <div className="SUpassword">
                <Input text="비밀번호" type="password" btnState="false" />
              </div>
              <div className="SUcheckPw">
                <Input
                  text="비밀번호 확인"
                  type="password_check"
                  btnState="false"
                />
              </div>
              <div className="SUtelephone">
                <Input text="전화번호" type="telephone" btnState="false" />
              </div>
            </div>
            <button onClick={handleSubmit} className="SUSignUpnButton">
              가입하기
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
