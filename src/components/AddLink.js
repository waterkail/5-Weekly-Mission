import styled from 'styled-components';
import linkIcon from '../asset/linkIcon.svg';
import { PRIMARY } from './color';

const BAR_COLOR = '#fff';
const BAR_BORDER_RADIUS = '15px';
const LinkPlaceHolder = '링크를 추가해 보세요';

const AddlinkBar = styled.div`
  display: flex;
  padding: 16px 20px;
  width: 100%;
  max-width: 800px;
  min-width: 336px;
  margin: 40px 0 30px;
  border-radius: ${BAR_BORDER_RADIUS};
  background-color: ${BAR_COLOR};
  border: 1px solid ${PRIMARY};
  align-items: center;
  box-shadow: 2px 2px 2px rgb(0 0 0 /20%);

  @media (max-width: 767px) {
    margin-top: 14px;
    padding: 8px 10px;
  }
`;

const LinkInput = styled.input`
  margin-left: 12px;
  flex-grow: 1;
  background-color: ${BAR_COLOR};
  border-radius: ${BAR_BORDER_RADIUS};
  border: 0px;
  outline: none;
`;

const AddLinkButton = styled.button`
  width: 80px;
  height: 37px;
  display: flex;
  flex-shrink: 0;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
`;

const LinkIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`;

const AddLink = () => {
  return (
    <AddlinkBar>
      <LinkIcon src={linkIcon} />
      <LinkInput placeholder={LinkPlaceHolder} />
      <AddLinkButton>추가하기</AddLinkButton>
    </AddlinkBar>
  );
};

export default AddLink;
