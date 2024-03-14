import './TravelPlanList.css';

const TravelPlanList = () => {
  return (
    <div className="TravelPlanList">
      <div className="TPPlanListCurrent">
        <div className="TPPlanListCurrentTitle">
          <img src={process.env.PUBLIC_URL + '/assets/Polygon 1.png'}></img>
          <span>현재 작성 중인 여행 계획</span>
          <div className="TPPlanListCurrentCard">
            <div className="TPPlanListCurrentCard_1"></div>
            <div className="TPPlanListCurrentCard_2"></div>
          </div>
        </div>
      </div>
      <div className="TPPlanListPast">
        <div className="TPPlanListPastTitle">
          <img src={process.env.PUBLIC_URL + '/assets/Polygon 1.png'}></img>
          <span>과거의 여행 계획 리스트</span>
          <div className="TPPlanListPastCard">
            <div className="TPPlanListPastCard_1"></div>
            <div className="TPPlanListPastCard_2"></div>
            <div className="TPPlanListPastCard_3"></div>
            <div className="TPPlanListPastCard_4"></div>
            <div className="TPPlanListPastCard_5"></div>
            <div className="TPPlanListPastCard_6"></div>
            <div className="TPPlanListPastCard_7"></div>
            <div className="TPPlanListPastCard_8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TravelPlanList;
