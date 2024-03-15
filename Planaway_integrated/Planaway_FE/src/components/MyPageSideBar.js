import { SBWrapper, SBLink } from './SideBarStyle';

const MyPageSideBar = () => {
  return (
    <SBWrapper>
      <SBLink
        to="/planlist"
        isActive={(match, location) => location.pathname === '/planlist'}
      >
        여행 계획 리스트
      </SBLink>
      <SBLink
        to="/plansets"
        isActive={(match, location) => location.pathname === '/plansets'}
      >
        여행지 모아보기
      </SBLink>
      <SBLink
        to="/wishlist"
        isActive={(match, location) => location.pathname === '/wishlist'}
      >
        여행 위시 리스트
      </SBLink>
    </SBWrapper>
  );
};

export default MyPageSideBar;
