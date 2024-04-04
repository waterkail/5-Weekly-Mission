import { useEffect } from 'react';
import { getFolderData } from '../components/Api';
import SubHeader from '../components/SubHeader';
import Shared from '../components/SharedPage/Shared';
import { useData } from '../Hooks/useData';
import UserFolderInfo from '../components/UserFolderInfo';
import App from '../components/App';

function SharedPage() {
  const [folder, getFolder] = useData(getFolderData);

  const getData = async () => {
    try {
      await getFolder();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <App headerFixed={true}>
      <SubHeader headerfixed={true}>
        <UserFolderInfo
          name={folder?.folder?.owner?.name}
          profileImg={folder?.folder?.owner?.profileImageSource}
          folderName={folder?.folder?.name}
        />
      </SubHeader>
      <Shared items={folder?.folder?.links} />
    </App>
  );
}

export default SharedPage;
