import styled from 'styled-components';

export const Container = styled.div`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 500;
    font-style: normal;
    color: #2c2c2c;
  }

  font-family: 'Pretendard-Regular';
  width: 1040px;
  margin: 0 auto;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;
