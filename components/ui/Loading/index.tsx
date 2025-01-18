import { LoadingWrapper, LoadingImage } from "./styled";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingImage
        src="/images/chairman.svg"
        alt="Loading..."
        width={100}
        height={100}
      />
    </LoadingWrapper>
  );
};

export default Loading;
