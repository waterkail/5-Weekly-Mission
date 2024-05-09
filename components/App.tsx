import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { getUsersData } from "./Api/Api";
import { useData } from "../Hooks/useData";

function App({
  children,
  headerFixed,
  foot,
}: {
  children: ReactNode;
  headerFixed: boolean;
  foot?: (node?: Element | null | undefined) => void;
}) {
  const [user, getUser] = useData(getUsersData);
  const [isLogIn, setIsLogIn] = useState(true);

  const getData = useCallback(async () => {
    try {
      await getUser(1);
      setIsLogIn(true);
    } catch (err) {
      setIsLogIn(false);
    }
  }, [getUser]);

  useEffect(() => {
    getData();
  }, [isLogIn, getData]);

  return (
    <>
      <Header
        isLogIn={isLogIn}
        email={user?.data[0]?.email}
        img={user?.data[0]?.image_source}
        fixed={headerFixed}
      />
      {children}
      <Footer observer={foot} />
    </>
  );
}

export default App;
