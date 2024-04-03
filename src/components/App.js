import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { getUserData } from './Api';
import { useData } from '../Hooks/useData';

function App({ children, headerFixed = true }) {
  const [user, getUser] = useData(getUserData);
  const [isLogIn, setIsLogIn] = useState(true);

  const getData = async () => {
    try {
      await getUser();
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
      <Header
        isLogIn={isLogIn}
        email={user?.email}
        img={user?.profileImageSource}
        fixed={headerFixed}
      />
      {children}
      <Footer />
    </>
  );
}

export default App;
