import { getFoldersData } from '../Api';
import styled from 'styled-components';
import { PRIMARY, WHITE } from '../color';
import Add from '../../asset/add.svg';
import AddWhite from '../../asset/addWhite.svg';
import { useData } from '../../Hooks/useData';
import { useEffect } from 'react';

const Block = styled.button`
  display: flex;
  align-items: center;
  height: 35px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid ${PRIMARY};
  background: #fff;

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
    height: 29px;
  }
`;

const FolderList = styled.ul`
  display: flex;
  gap: 12px 8px;
  flex-wrap: wrap;
`;

const Bar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AddFolder = styled.button`
  color: ${PRIMARY};
  display: flex;
  align-items: center;
  text-align: center;
  font-family: Pretendard;
  flex-shrink: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  &::after {
    content: '';
    background-image: url(${Add});
    background-size: cover;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }

  @media (max-width: 767px) {
    color: ${WHITE};
    text-align: center;
    padding: 8px 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 101px;
    border-radius: 20px;
    border: 1px solid ${WHITE};
    background: ${PRIMARY};
    width: 130px;

    &::after {
      background-image: url(${AddWhite});
    }
  }
`;

const FolderBlock = ({ children }) => {
  return <Block>{children}</Block>;
};

const FolderIndex = ({ items }) => {
  return (
    <FolderList>
      {items?.map((item) => {
        return (
          <li key={item?.id}>
            <FolderBlock>{item?.name}</FolderBlock>
          </li>
        );
      })}
    </FolderList>
  );
};

function FolderIndexBar() {
  const [folderInfo, getFolderInfo] = useData(getFoldersData);

  const getData = async () => {
    try {
      await getFolderInfo();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Bar>
      <FolderIndex items={folderInfo?.data} />
      <AddFolder>폴더 추가</AddFolder>
    </Bar>
  );
}

export default FolderIndexBar;
