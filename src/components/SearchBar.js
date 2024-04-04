import styled from 'styled-components';
import searchIcon from '../asset/Search.svg';

const BAR_COLOR = '#f5f5f5';
const BAR_BORDER_RADIUS = '10px';

const BarOfSearch = styled.div`
  display: flex;
  padding: 15px 16px;
  border-radius: ${BAR_BORDER_RADIUS};
  background-color: ${BAR_COLOR};
  overflow: hidden;

  &::before {
    content: '';
    background-image: url(${searchIcon});
    background-size: cover;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;
const SearchInput = styled.input`
  flex-grow: 1;
  background-color: ${BAR_COLOR};
  border: 0px;
  outline: none;
`;

const SearchBar = ({ palceholder }) => {
  return (
    <BarOfSearch>
      <SearchInput placeholder={palceholder} />
    </BarOfSearch>
  );
};

export default SearchBar;
