import React from "react";
import {
  SBWrapper,
  SBLink,
  SBTemporarySaveBtn,
  SBSaveBtn,
  SBBtnWrapper,
} from "./SideBarStyle";

const PlanSideBar = ({ setActive1, setActive2, setActive3, setActive4 }) => {
  return (
    <SBWrapper>
      <SBLink
        onClick={() => {
          setActive1(true);
          setActive2(false);
          setActive3(false);
          setActive4(false);
        }}
      >
        여행 정보
      </SBLink>
      <SBLink
        onClick={() => {
          setActive1(false);
          setActive2(true);
          setActive3(false);
          setActive4(false);
        }}
      >
        여행 상세정보
      </SBLink>
      <SBLink
        onClick={() => {
          setActive1(false);
          setActive2(false);
          setActive3(true);
          setActive4(false);
        }}
      >
        여행 준비물 리스트
      </SBLink>
      <SBLink
        onClick={() => {
          setActive1(false);
          setActive2(false);
          setActive3(false);
          setActive4(true);
        }}
      >
        여행 기념품 리스트
      </SBLink>
      <SBBtnWrapper>
        <SBTemporarySaveBtn>임시저장</SBTemporarySaveBtn>
        <SBSaveBtn>저장</SBSaveBtn>
      </SBBtnWrapper>
    </SBWrapper>
  );
};

export default PlanSideBar;
