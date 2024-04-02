import styled from 'styled-components';
import { GRAY5 } from './color';

const Container = styled.div`
  padding: 20px 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: ${GRAY5};

  & .Container_folderName {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 40px;
    font-weight: 600;
    line-height: normal;
  }

  @media (max-width: 767px) {
    padding: 10px - 40px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;

  & .Info_Img {
    width: 60px;
    height: 60px;
  }

  & .Info_nameSpan {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    line-height: 24px;
  }
`;

const UserInfo = ({ name, profileImg }) => {
  return (
    <Info>
      <img className="Info_Img" src={profileImg} alt="유저이미지" />
      <span className="Info_nameSpan">{name}</span>
    </Info>
  );
};

const Top = ({ ownerName, profileImg, folderName }) => {
  return (
    <Container>
      <UserInfo name={ownerName} profileImg={profileImg} />
      <h2 className="Container_folderName">{folderName}</h2>
    </Container>
  );
};

export default Top;
