import styled from 'styled-components';
import MainContent from './MainContent';

const NoLink = styled.div`
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199px) {
    margin-bottom: 1133px;
    width: 704px;
  }

  @media (max-width: 767px) {
    margin-bottom: 844px;
    width: 325px;
    font-size: 14px;
    line-height: normal;
  }
`;

function Folder() {
  return (
    <>
      <MainContent>
        <NoLink>저장된 링크가 없습니다.</NoLink>
      </MainContent>
    </>
  );
}

export default Folder;
