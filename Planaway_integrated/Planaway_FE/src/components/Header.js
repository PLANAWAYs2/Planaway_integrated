import { React, useContext, useRef, useState } from "react";
import {
  HeaderWrapper,
  Nav,
  MenuWrapper,
  NavLink,
  NavMenu1,
  NavMenu2,
  HSearchForm,
  HInput,
  NavBtn,
  HButton,
} from "./HeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { DispatchContext } from "../Router";

const Header = () => {
  const { onSearch } = useContext(DispatchContext);

  const searchRef = useRef();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    const searchTerm = searchRef.current.value;

    if (searchTerm.length < 1) {
      searchRef.current.focus();
      return;
    }
    navigate("/search");
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      navigate("/userinfo");
    } else {
      navigate("/login");
    }
  };

  return (
    <HeaderWrapper>
      <Nav>
        <NavMenu1>
          <NavLink to="/" activestyle="true">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt="Logo"
            />
          </NavLink>

          <NavBtn>
            {isLoggedIn ? (
              <HButton onClick={handleUserClick}>사용자 이름</HButton>
            ) : (
              <HButton onClick={handleUserClick}>로그인/회원가입</HButton>
            )}
          </NavBtn>
        </NavMenu1>

        <NavMenu2>
          <MenuWrapper>
            <NavLink to="/uploadplan" activestyle="true">
              여행 계획 시작하기
            </NavLink>
            <NavLink to="/planlist" activestyle="true">
              기존 계획 조회하기
            </NavLink>
            <NavLink to="/viewplan" activestyle="true">
              여행지 둘러보기
            </NavLink>
          </MenuWrapper>

          <HSearchForm onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <HInput
              placeholder="가고 싶은 국가나 도시를 검색하세요."
              value={searchTerm}
              ref={searchRef}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value);
              }}
              type="text"
            />
          </HSearchForm>
        </NavMenu2>
      </Nav>
      <hr />
    </HeaderWrapper>
  );
};

export default Header;
