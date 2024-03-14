import { Container } from "../../Layout";
import Header from "../../components/Header";
import MyPageSideBar from "../../components/MyPageSideBar";
import Profile from "../../components/Profile";
import "./PlanSets.css";

const PlanSets = () => {
  const API_KEY = "AIzaSyDedTPh8y0kQKaWqEGKnPwXAMXhLeENOHU";
  return (
    <>
      <Header />
      <Container>
        <div style={{ display: "flex" /*justifyContent: "space-between"*/ }}>
          <div className="PSframe">
            <MyPageSideBar />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Profile />
            <div className="PSMap">
              <iframe
                width="828px"
                height="448px"
                frameborder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=프랑스&zoom=6`}
              />
            </div>
            <div className="PSCard">
              <div className="PSCard_1"></div>
              <div className="PSCard_2"></div>
              <div className="PSCard_3"></div>
              <div className="PSCard_4"></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PlanSets;
