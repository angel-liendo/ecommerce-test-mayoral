import { LoaderParentStyle, LoaderStyle } from './Loader.style';

export interface LoaderTypes {
  column: string;
}

const Loader = ({ column }: LoaderTypes) => {
  return (
    <LoaderParentStyle role="loader" column={column}>
      <LoaderStyle></LoaderStyle>
    </LoaderParentStyle>
  );
};

export default Loader;
