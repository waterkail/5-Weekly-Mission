import styled from 'styled-components';

const BarOfSearch = styled.div`
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
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const SearchBar = ({ palceholder, src, size }) => {
  return (
    <BarOfSearch>
      <SearchIcon src={src} size={size} />
      <SearchInput placeholder={palceholder} />
    </BarOfSearch>
  );
};

export default SearchBar;
