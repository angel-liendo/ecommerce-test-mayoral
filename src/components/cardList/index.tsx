import { ProductTypes } from '../../types/Product';
import Card from '../card';
import { CardListStyle } from './CardList.style';

const CardList: React.FC<{ listItems: ProductTypes[] }> = ({ listItems }) => {
  return (
    <CardListStyle role="card-list">
      {listItems.map((item: ProductTypes) => (
        <Card key={item.id} item={item} />
      ))}
    </CardListStyle>
  );
};

export default CardList;
