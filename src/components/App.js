import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { getUsersData } from './Api';
import { useData } from '../Hooks/useData';

function App({ children, headerFixed }) {
  const [user, getUser] = useData(getUsersData);
  const [isLogIn, setIsLogIn] = useState(true);

  const getData = async () => {
    try {
      await getUser(1);
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
        email={user?.data[0]?.email}
        img={user?.data[0]?.image_source}
        fixed={headerFixed}
      />
      {children}
      <Footer />
    </>
  );
}

export default App;
