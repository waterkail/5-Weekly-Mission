import styled from 'styled-components';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import FolderBar from './FolderPage/FolderBar';
import { useData } from '../Hooks/useData';
import { getFoldersData } from '../components/Api';
import { useEffect, useState } from 'react';

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
  const [folderInfo, getFolderInfo] = useData(getFoldersData);
  const [selectedFolder, setSelectedFolder] = useState();

  const selectFolder = (e) => {
    const folderId = Number(e.target.name);
    const selected = folderInfo?.data.filter((item) => item.id === folderId);
    setSelectedFolder(selected[0]);
  };

  const getData = async () => {
    try {
      await getFolderInfo();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <MainContent>
        <SearchBar />
        <Frame>
          <FolderBar
            folderInfo={folderInfo}
            onClick={selectFolder}
            selectedFolder={selectedFolder}
          />
          <NoLink>저장된 링크가 없습니다.</NoLink>
        </Frame>
      </MainContent>
    </>
  );
}

export default Folder;
