import './UserInfo.css';
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import { Container } from '../../Layout';
import Input from '../../components/Input';

const UserInfo = () => {
  const [state, setState] = useState({
    name: '',
    id: '',
    email: '',
    password: '',
    checkPw: '',
    telephone: '',
    profileImage: process.env.PUBLIC_URL + './assets/프로필.jpeg',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageURL = event.target.result;
      setState({ ...state, profileImage: imageURL });
    };

    if (file) {
      reader.readAsDataURL(file); //비동기작업
    }
  };

  const handleSubmit = (e) => {
    alert('프로필 수정이 완료되었습니다.');
  };

  return (
    <>
      <Header />
      <Container>
        <div className="UIUserInfoPage">
          <div className="UIUserInfo">프로필 수정</div>
          <div className="UIinfoBtn">
            <div className="UIinfo">
              <div className="UIPfp">
                <span>프로필 사진</span>
                <img
                  src={state.profileImage}
                  alt="프로필 사진"
                  className="UIPfpPicture"
                ></img>
                <div className="UIPfpButton">
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <button
                    className="UIPfpEditBtn"
                    onClick={() => document.getElementById('fileInput').click()}
                  >
                    변경
                  </button>
                  <button className="UIPfpRemoveBtn">삭제</button>
                </div>
              </div>
              <div className="UIname">
                <Input text="이름" type="name" btnState="false" />
              </div>

              <div className="UIid">
                <Input
                  text="아이디"
                  type="id"
                  btnState="true"
                  btnText="중복 아이디 확인"
                />
              </div>

              <div className="UIemail">
                <Input
                  text="이메일"
                  type="email"
                  btnState="true"
                  btnText="중복 이메일 확인"
                />
              </div>
              <div className="UIpassword">
                <Input text="비밀번호" type="password" btnState="false" />
              </div>
              <div className="UIcheckPw">
                <Input
                  text="비밀번호 확인"
                  type="password_check"
                  btnState="false"
                />
              </div>
              <div className="UItelephone">
                <Input text="전화번호" type="telephone" btnState="false" />
              </div>
            </div>
            <button onClick={handleSubmit} className="UISignUpnButton">
              변경사항 저장
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserInfo;
