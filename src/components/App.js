import Header from './Header';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import { useEffect, useState } from 'react';
import { getUserData, getFolderData } from './Api';
import Top from './Top';
import styled from 'styled-components';
import Favorite from './Favorite';

const TopMargin = styled.div`
  margin-top: 93px;
`;

const FooterMargin = styled.div`
  margin-top: 60px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

function App() {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    profileImageSource: '',
  });
  const [folderData, setFolderData] = useState({
    name: '',
    owner: {
      name: '',
      profileImageSource: '',
    },
  });
  const [isLogIn, setIsLogIn] = useState(true);

  async function getData() {
    const result = await getUserData();
    setUserData(result);
  }

  async function getFolder() {
    const { folder } = await getFolderData();
    setFolderData(folder);
  }

  useEffect(() => {
    getData();
    getFolder();
  }, [isLogIn]);

  return (
    <>
      <GlobalStyle />
      <Header
        isLogIn={isLogIn}
        email={userData.email}
        img={userData.profileImageSource}
      />
      <TopMargin></TopMargin>
      {isLogIn ? (
        <Top
          ownerName={folderData.owner.name}
          profileImg={folderData.owner.profileImageSource}
          folderName={folderData.name}
        />
      ) : (
        <div>대충 로그인 해달라고 하는 내용, 따로 과제에 없어서 구현 X</div>
      )}
      <Favorite />
      <FooterMargin></FooterMargin>
      <Footer />
    </>
  );
}

export default App;
