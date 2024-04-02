import styled from 'styled-components';
import { GRAY5 } from './color';

const Container = styled.div`
  padding: 20px 32px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  background-color: ${GRAY5};

  @media (max-width: 767px) {
    padding: 10px 32px 40px;
  }
`;

const Top = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Top;
