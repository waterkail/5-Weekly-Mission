import styled from 'styled-components';
import { GRAY5 } from './color';

const Container = styled.div`
  padding: 113px 32px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY5};

  @media (max-width: 767px) {
    padding: 103px 32px 40px;
  }
`;

const SubHeader = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SubHeader;
