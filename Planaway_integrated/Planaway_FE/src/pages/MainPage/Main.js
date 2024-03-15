import Header from '../../components/Header';
import { Container } from '../../Layout';
import './Main.css';

const Main = () => {
  return (
    <>
      <Header />
      <div className="Mbanner">
        <div className="MbannerImg">
          <div className="MbannerImgPic"></div>
          <div className="MbannerImgInfo">
            <div className="MbannerImgInfoTitle">
              지금<span> 인기있는</span> 여행지는?
            </div>
            <div className="MbannerImgInfoContent">
              인기있는 여행지가 포함된 유저들의 여행 플랜을 열람해보세요.
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="MTravelSpot">
          <div className="MTravelSpotOversea">
            <img src={process.env.PUBLIC_URL + '/assets/Polygon 1.png'}></img>
            <span>국외 여행지</span>
            <div className="MTravelSpotOverseasCard">
              <div className="MTravelSpotOverseasCard_1">
                <span>일본, 홋카이도</span>
              </div>
              <div className="MTravelSpotOverseasCard_2"></div>
              <div className="MTravelSpotOverseasCard_3"></div>
              <div className="MTravelSpotOverseasCard_4"></div>
              <div className="MTravelSpotOverseasCard_5"></div>
            </div>
          </div>
          <div className="MTravelSpotDomestic">
            <div>
              <img src={process.env.PUBLIC_URL + '/assets/Polygon 1.png'}></img>
              <span>국내 여행지</span>
              <div className="MTravelSpotDomesticCard">
                <div className="MTravelSpotDomesticCard_1">
                  <span>강릉</span>
                </div>
                <div className="MTravelSpotDomesticCard_2"></div>
                <div className="MTravelSpotDomesticCard_3"></div>
                <div className="MTravelSpotDomesticCard_4"></div>
                <div className="MTravelSpotDomesticCard_5"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
