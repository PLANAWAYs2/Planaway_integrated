import { useContext } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { SearchKeyword } from '../../Router';
import './SearchPage.css';
import { Container } from '../../Layout';

const SearchPage = () => {
  const keyword = useContext(SearchKeyword);
  return (
    <div>
      <Header />
      <Container>
        <div className="SPSearchPage">
          <div className="SPInfo">
            <div className="SPInfoKeyword">
              검색어 : <span>{keyword}</span>
            </div>
            <div className="SPInfoDescription">
              해당 여행지가 포함된 유저들의 여행 플랜을 열람해보세요
            </div>
          </div>
          <Card />
        </div>
      </Container>
    </div>
  );
};
export default SearchPage;
