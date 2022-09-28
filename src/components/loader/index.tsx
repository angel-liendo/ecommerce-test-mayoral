import { LoaderParentStyle, LoaderStyle } from "./Loader.style";

export interface LoaderTypes {
  column: string;
}

const Loader = ({ column }: LoaderTypes) => {
  return (
    <LoaderParentStyle column={column}>
      <LoaderStyle></LoaderStyle>
    </LoaderParentStyle>
  );
};

export default Loader;
