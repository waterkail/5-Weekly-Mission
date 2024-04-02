import styled from 'styled-components';
import searchIcon from '../asset/Search.svg';
import CardList from './CardList';
import SearchBar from './SearchBar';

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

function Favorite({ items }) {
  return (
    <Main>
      <Content>
        <SearchBar src={searchIcon} palceholder={SEARCH_LINK} size="16" />
        <CardList items={items} />
      </Content>
    </Main>
  );
}

export default Favorite;
