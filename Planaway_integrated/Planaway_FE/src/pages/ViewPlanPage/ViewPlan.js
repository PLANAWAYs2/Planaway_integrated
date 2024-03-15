import { useRef, useState } from 'react';
import { Container } from '../../Layout';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Dropdown from './Dropdown';
import './ViewPlan.css';

const ViewPlan = () => {
  const [DropdownView, setDropdownView] = useState(false);
  const [initState, setInitState] = useState('최신순');

  const handleClickDropdown = () => {
    setDropdownView(!DropdownView);
  };

  const onChangeState = (value) => {
    setInitState(value);
    setDropdownView(false);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="VPpage">
          <div className="VPTextSort">
            <div className="VPSortingText">
              <span>10</span>개의 여행일기가 있습니다.
            </div>
            <div>
              <button onClick={handleClickDropdown} className="DDropdownBtn">
                {DropdownView ? (
                  <img src={process.env.PUBLIC_URL + '/assets/ArrowUp.png'} />
                ) : (
                  <img src={process.env.PUBLIC_URL + '/assets/ArrowDown.png'} />
                )}
                <span>{initState}</span>
              </button>
              <Dropdown visiblity={DropdownView}>
                <ul>
                  <li onClick={() => onChangeState('최신순')}>최신순</li>
                  <li onClick={() => onChangeState('인기순')}>인기순</li>
                  <li onClick={() => onChangeState('오래된순')}>오래된순</li>
                </ul>
              </Dropdown>
            </div>
          </div>

          <Card />
        </div>
      </Container>
    </>
  );
};

export default ViewPlan;
