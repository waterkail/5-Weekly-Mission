import styled from 'styled-components';
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
  row-gap: 40px;
`;

const NoLink = styled.div`
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199px) {
    margin-bottom: 1133px;
    width: 704px;
  }

  @media (max-width: 767px) {
    margin-bottom: 844px;
    width: 325px;
    font-size: 14px;
    line-height: normal;
  }
`;

function Favorite({ items }) {
  return (
    <Main>
      <Content>
        <SearchBar palceholder={SEARCH_LINK} />
        {items?.length ? (
          <CardList items={items} />
        ) : (
          <NoLink>저장된 링크가 없습니다.</NoLink>
        )}
      </Content>
    </Main>
  );
}

export default Favorite;
