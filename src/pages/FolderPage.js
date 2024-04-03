import SubHeader from '../components/SubHeader';
import AddLink from '../components/AddLink';
import Folder from '../components/Folder';
import App from '../components/App';
import { useData } from '../Hooks/useData';
import { getFoldersData } from '../components/Api';
import { useEffect } from 'react';

function FolderPage() {
  const [folderInfo, getFolderInfo] = useData(getFoldersData);

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
    <App headerFixed={false}>
      <SubHeader headerfixed={false}>
        <AddLink />
      </SubHeader>
      <Folder folderInfo={folderInfo} />
    </App>
  );
}

export default FolderPage;
