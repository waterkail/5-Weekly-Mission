import styled from 'styled-components';
import Card from './Card';

const CardsList = styled.ul`
  display: grid;
  gap: 25px 20px;
  align-self: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1123px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function CardList({ items }) {
  return (
    <CardsList>
      {items?.map((item) => {
        return (
          <li key={item.id}>
            <Card item={item} />
          </li>
        );
      })}
    </CardsList>
  );
}

export default CardList;
