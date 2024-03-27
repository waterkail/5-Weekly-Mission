import styled from 'styled-components';
import searchIcon from '../asset/Search.svg';

const SEARCH_LINK = '링크를 검색해보세요';

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 40px 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 16px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 0px;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 16px;
`;

const Cards = styled.div`
  display: grid;
  gap: 25px 20px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1123px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Favorite() {
  return (
    <Main>
      <Content>
        <SearchBar>
          <SearchIcon src={searchIcon} />
          <SearchInput placeholder={SEARCH_LINK} />
        </SearchBar>
        <Cards></Cards>
      </Content>
    </Main>
  );
}

export default Favorite;
