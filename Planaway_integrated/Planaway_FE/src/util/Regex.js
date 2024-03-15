export const onChangeButton = (type, state, setStateMsg) => {
  switch (type) {
    case 'email': {
      const emailRegExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!emailRegExp.test(state)) {
        setStateMsg(
          '가입한 적 없거나 올바르지 않은 이메일 주소를 입력하신 경우 메일을 받으실 수 없습니다.'
        );
      } else {
        setStateMsg(`${state}으로 아이디를 전송했습니다.`);
      }
      break;
    }
    case 'email_verify': {
      const emailRegExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!emailRegExp.test(state)) {
        setStateMsg(
          '가입한 적 없거나 올바르지 않은 이메일 주소를 입력하신 경우 메일을 받으실 수 없습니다.'
        );
      } else {
        setStateMsg(`${state}으로 아이디를 전송했습니다.`);
      }
      break;
    }

    case 'password': {
      const passwordRegExp =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
      if (!passwordRegExp.test(state)) {
        setStateMsg(
          '최소 하나 이상의 영문자, 숫자, 특수문자를 이용하여 8~16자의 비밀번호를 설정해야 합니다.'
        );
      } else {
        setStateMsg('비밀번호 생성');
      }
      break;
    }
    case 'telephone': {
      const telephoneRegExp = /^(010)[0-9]{3,4}[0-9]{4}$/;
      if (!telephoneRegExp.test(state)) {
        alert('올바른 전화번호를 작성해주세요!');
      }
    }
    default:
      return;
  }
};
