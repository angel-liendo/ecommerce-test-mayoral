interface IconTypes {
  imgRoute: string;
}
const Icon = ({ imgRoute }: IconTypes) => {
  return (
    <figure>
      <img src={`${process.env.NEXT_PUBLIC_REACT_URL}img/${imgRoute}`} alt="" />
    </figure>
  );
};

export default Icon;
