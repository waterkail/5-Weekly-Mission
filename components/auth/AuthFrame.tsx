import styled from "styled-components";
import { GRAY3, GRAY5, PRIMARY, WHITE } from "../color";
import { ReactNode } from "react";

const Div = styled.div`
  padding-top: 238px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${GRAY5};
`;

const AuthFrame = ({ children }: { children: ReactNode }) => {
  return <Div>{children}</Div>;
};

export default AuthFrame;
