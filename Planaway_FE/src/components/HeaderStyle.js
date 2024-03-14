import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  hr {
    width: 100%;
    margin: 14px 0 0;
    border: #ff6827 1px solid;
  }
`;

export const Nav = styled.nav`
  font-family: 'Pretendard-Regular';
  color: #2c2c2c;
  display: flex;
  flex-direction: column;
  width: 1040px;
  margin: 75px auto 0;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;

export const NavMenu1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
`;

export const NavMenu2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MenuWrapper = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #2c2c2c;
  display: flex;
  justify-content: space-between;

  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  width: 192px;
  margin-right: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9a9a9a;
  }

  img {
    height: 40px;
  }
`;

export const HSearchForm = styled.form`
  background-color: #efefef;
  border-radius: 4px;
  display: flex;
  width: 228px;
  height: 33px;
  align-items: center;
  padding: 0 10px;

  svg {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;

export const HInput = styled.input`
  border: none;
  background-color: #efefef;
  width: 100%;

  font-family: 'Pretendard-Regular';
  font-size: 14px;
  color: #2c2c2c;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const HButton = styled.button`
  height: 40px;
  border-radius: 4px;
  background-color: white;
  border: #e9e9e9 1px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  font-weight: 600;
  color: #2c2c2c;
  padding: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9a9a9a;
  }
`;
