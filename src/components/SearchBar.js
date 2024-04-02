import styled from 'styled-components';

const BAR_COLOR = '#f5f5f5';
const BAR_BORDER_RADIUS = '10px';

const BarOfSearch = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 15px 16px;
  border-radius: ${BAR_BORDER_RADIUS};
  background-color: ${BAR_COLOR};
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: ${BAR_COLOR};
  border-radius: ${BAR_BORDER_RADIUS};
  border: 0px;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchBar = ({ palceholder, src }) => {
  return (
    <BarOfSearch>
      <SearchIcon src={src} />
      <SearchInput placeholder={palceholder} />
    </BarOfSearch>
  );
};

export default SearchBar;
