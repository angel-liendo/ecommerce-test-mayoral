import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ButtonStyle } from '../../components/button/Button.style';
import { CardDiscountPriceStyle, CardPriceStyle } from '../../components/card/Card.style';
import Loader from '../../components/loader';
import { FIND_PRODUCT_BY_ID } from '../../graphql/querys';
import { useGetDataParameter } from '../../hooks/use-get-data';
import { currency, percentageNumber, setNumberToEuropeanFormat } from '../../utilities/utilities';
import { DetailsStyle } from './Details.style';

const Details = () => {
  const router = useRouter();
  const { itemId } = router.query;
  console.log('router2', router.query);

  const [getData, { data, loading }] = useGetDataParameter(FIND_PRODUCT_BY_ID);

  useEffect(() => {
    getData({
      variables: { findProductId: itemId },
    });
  }, []);

  return (
    <DetailsStyle>
      {loading && <Loader column="1/-1" />}
      {loading === false && (
        <>
          <div>
            <figure>
              <img
                src={`${process.env.NEXT_PUBLIC_REACT_URL}img/${data?.findProduct?.img}`}
                alt=""
              />
            </figure>
          </div>
          <div>
            <span> {data?.findProduct?.title} </span>
            <div>
              <CardPriceStyle textDecorationLine={data?.findProduct?.discount}>
                {setNumberToEuropeanFormat(data?.findProduct?.price)} {currency}
              </CardPriceStyle>
              {data?.findProduct?.discount && (
                <CardDiscountPriceStyle>
                  {setNumberToEuropeanFormat(data?.findProduct?.discount)}
                  {currency}
                  {percentageNumber}
                </CardDiscountPriceStyle>
              )}
              <ButtonStyle theme="primary">Comprar</ButtonStyle>
            </div>
          </div>
        </>
      )}
    </DetailsStyle>
  );
};

export default Details;
