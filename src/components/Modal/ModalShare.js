import ModalFrame from "./ModalFrame";
import styled from "styled-components";

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

const ModalShare = ({ onClick, info }) => {
  return (
    <ModalFrame name="폴더 공유" onClick={onClick}>
      <Span>{info}</Span>
      <div>공유버튼들</div>
    </ModalFrame>
  );
};

export default ModalShare;
