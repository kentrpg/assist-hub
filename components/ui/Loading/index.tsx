import { LoadingWrapper, CardLoadingWrapper, Spinner } from "./styled";

type LoadingProps = {
  mode?: "full" | "card";
};

export default function Loading({ mode = "full" }: LoadingProps) {
  const Wrapper = mode === "card" ? CardLoadingWrapper : LoadingWrapper;

  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
}
