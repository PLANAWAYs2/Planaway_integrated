import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const SBWrapper = styled.div`
  width: 172px;
  margin-top: 207px;
  display: flex;
  flex-direction: column;
`;

export const SBLink = styled(Link)`
  width: 172px;
  border: none;
  border-bottom: 1px solid #9a9a9a;
  width: 172px;
  font-family: 'Pretendard-Regular';
  font-size: 16px;
  color: #9a9a9a;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 0 0 8px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #2c2c2c;
    border-bottom: 1px solid #2c2c2c;
  }

  &.active {
    color: #2c2c2c;
    font-weight: 600;
    border-bottom: 1px solid #2c2c2c;
  }
`;

export const SBTemporarySaveBtn = styled.button`
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  color: #9b9b9b;
  background-color: #efefef;
  border: none;
  border-radius: 4px;
  margin-right: 17px;
  padding: 8px 10px;
  cursor: pointer;
`;
export const SBSaveBtn = styled.button`
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  color: #ffffff;
  background-color: #ff6827;
  border: none;
  border-radius: 4px;
  padding: 8px 10px;
  cursor: pointer;
`;
export const SBBtnWrapper = styled.div``;
