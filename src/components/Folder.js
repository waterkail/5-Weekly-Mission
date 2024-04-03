import styled from 'styled-components';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import FolderIndexBar from './FolderPage/FolderIndexBar';
import FolderNameBar from './FolderPage/FolderNameBar';

const NoLink = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 41px 0px 35px;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: normal;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function Folder() {
  return (
    <>
      <MainContent>
        <SearchBar />
        <Frame>
          <FolderIndexBar />
          <FolderNameBar />
          <NoLink>저장된 링크가 없습니다.</NoLink>
        </Frame>
      </MainContent>
    </>
  );
}

export default Folder;
