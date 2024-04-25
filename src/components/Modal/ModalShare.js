import ModalFrame from "./ModalFrame";
import styled from "styled-components";
import LinkImg from "../../asset/linkIcon.svg";
import KakaoImg from "../../asset/Kakao.svg";
import FaceImg from "../../asset/Facebook.svg";

const Span = styled.span`
  color: #9fa6b2;
  text-align: center;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Shares = styled.div`
  display: flex;
  column-gap: 32px;
`;

const IconName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 10px;
  color: #373740;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  line-height: 15px;
`;

const IconContainer = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 37.333px;
  background-color: ${({ $color }) => $color};
  background-image: url(${({ $img }) => $img});
  background-position: center;
  background-repeat: no-repeat;
`;

const ModalShare = ({ onClick, info }) => {
  return (
    <ModalFrame name="폴더 공유" onClick={onClick}>
      <Span>{info}</Span>
      <Shares>
        <IconName>
          <IconContainer $color="#FEE500" $img={KakaoImg}></IconContainer>
          <span>카카오톡</span>
        </IconName>
        <IconName>
          <IconContainer $color="#1877F2" $img={FaceImg}></IconContainer>
          <span>페이스북</span>
        </IconName>
        <IconName>
          <IconContainer
            $color="rgba(157, 157, 157, 0.04)"
            $img={LinkImg}
          ></IconContainer>
          <span>링크 복사</span>
        </IconName>
      </Shares>
    </ModalFrame>
  );
};

export default ModalShare;
