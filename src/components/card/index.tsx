import Link from 'next/link';
import { ProductTypes } from '../../types/Product';
import { currency, percentageNumber, setNumberToEuropeanFormat } from '../../utilities/utilities';
import { ButtonStyle } from '../button/Button.style';
import {
  CardDiscountPriceStyle,
  CardFigureImage,
  CardPriceStyle,
  CardPriceBoxStyle,
  CardStyle,
  CardTitle,
  MoreColorsBtn,
} from './Card.style';

interface CardTypes {
  item: ProductTypes;
}

const Card = ({ item }: CardTypes) => {
  const { id, title, img, price, discount } = item;

  const CardPrice = ({ isDiscountActive }: { isDiscountActive: boolean }): JSX.Element => {
    return (
      <CardPriceStyle textDecorationLine={isDiscountActive}>
        {setNumberToEuropeanFormat(price)}
        {currency}
      </CardPriceStyle>
    );
  };

  const RenderPriceItem = (): JSX.Element => {
    return (
      <CardPriceBoxStyle>
        <CardPrice isDiscountActive={discount !== null} />

        {discount !== null && (
          <CardDiscountPriceStyle>
            {setNumberToEuropeanFormat(discount)}
            {currency}
            {percentageNumber}
          </CardDiscountPriceStyle>
        )}
      </CardPriceBoxStyle>
    );
  };

  return (
    <CardStyle>
      <>
        <CardFigureImage>
          <img src={`${process.env.NEXT_PUBLIC_REACT_URL}img/${img}`} alt={title} />
        </CardFigureImage>
        <Link href={`/details?itemId=${id}`} as={`/details/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <RenderPriceItem />
        <MoreColorsBtn>Más colores </MoreColorsBtn>
        <ButtonStyle theme="primary">Añadir</ButtonStyle>
      </>
    </CardStyle>
  );
};

export default Card;
