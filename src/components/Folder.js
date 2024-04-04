import styled from 'styled-components';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import FolderBar from './FolderPage/FolderBar';
import FolderContents from './FolderPage/FolderContents';
import { useData } from '../Hooks/useData';
import { getFoldersData, getLinksData } from '../components/Api';
import { useEffect, useState } from 'react';

const NoLink = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 41px 0px 35px;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;

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
  const [linkData, getLinkData] = useData(getLinksData);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const selectFolder = (e) => {
    const folderId = Number(e.target.name);
    if (Number.isNaN(folderId)) return;
    const selected = folderInfo?.data.filter((item) => item.id === folderId);
    setSelectedFolder(selected[0]);
  };

  const getData = async () => {
    try {
      await getLinkData(selectedFolder?.id ?? '');
      await getFolderInfo();
    } catch (err) {
      console.log(err);
    } finally {
      console.log(linkData);
    }
  };

  useEffect(() => {
    getData();
  }, [selectedFolder]);

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
          {linkData?.data.length ? (
            <FolderContents items={linkData} />
          ) : (
            <NoLink>저장된 링크가 없습니다.</NoLink>
          )}
        </Frame>
      </MainContent>
    </>
  );
}

export default Folder;
