import Header from './Header';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import { useEffect, useState } from 'react';
import { getUserData, getFolderData } from './Api';
import SubHeader from './SubHeader';
import Favorite from './Favorite';
import { useData } from '../Hooks/useData';
import UserFolderInfo from './UserFolderInfo';
import AddLink from './AddLink';

function App() {
  const [user, getUser] = useData(getUserData);
  const [folder, getFolder] = useData(getFolderData);
  const [isLogIn, setIsLogIn] = useState(true);

  const getData = async () => {
    try {
      await getUser();
      await getFolder();
      setIsLogIn(true);
    } catch (err) {
      setIsLogIn(false);
    }
  };

  useEffect(() => {
    getData();
  }, [isLogIn]);

  return (
    <>
      <GlobalStyle />
      <Header
        isLogIn={isLogIn}
        email={user?.email}
        img={user?.profileImageSource}
      />
      <SubHeader>
        {folder?.folder?.links.length ? (
          <UserFolderInfo
            name={folder?.folder?.owner?.name}
            profileImg={folder?.folder?.owner?.profileImageSource}
            folderName={folder?.folder?.name}
          />
        ) : (
          <AddLink />
        )}
      </SubHeader>
      <Favorite items={folder?.folder?.links} />
      <Footer />
    </>
  );
}

export default App;
