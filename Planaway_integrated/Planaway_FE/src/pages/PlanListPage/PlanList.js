import { Container } from '../../Layout';
import Header from '../../components/Header';
import MyPageSideBar from '../../components/MyPageSideBar';
import PlanSideBar from '../../components/PlanSideBar';
import Profile from '../../components/Profile';
import TravelPlanList from '../../components/TravelPlanList';
import './PlanList.css';

const PlanList = () => {
  return (
    <>
      <Header />
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="MPframe">
            <MyPageSideBar />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Profile />
            <TravelPlanList />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PlanList;
