import Loading from "@/components/ui/Loading";
import { MainWrapper } from "@/styles/wrappers";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { hasError, isValid } from "@/helpers/api/status";

type Props = {
  fullQuery: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  resolvedUrl,
}) => {
  const queryIndex = resolvedUrl.indexOf("?");
  const fullQuery = queryIndex !== -1 ? resolvedUrl.slice(queryIndex) : "";

  console.log("fullQuery", fullQuery);

  return {
    props: {
      fullQuery,
    },
  };
};

const ConfirmPage = ({ fullQuery }: Props) => {
  const router = useRouter();

  console.log("ConfirmPage", fullQuery);

  useEffect(() => {
    console.log("confirm useEffect start");

    const getAccessToken = async () => {
      console.log("getAccessToken start");
      const response = await fetch(`/api/getLineCallback${fullQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log("result", result);

      if (hasError(result)) {
        alert(`${result.error}, ${result.message}`);
        router.push("/404");
      }

      if (isValid(result)) {
        window.location.href = "/user/profile";
      } else {
        alert(`${result.message}, 請稍候再試`);
        console.error(result.error);
        router.push("/auth/signin");
      }
    };

    getAccessToken();
    console.log("confirm useEffect end");
  }, [fullQuery, router]);

  return (
    <>
      <Head>
        <title>登入中</title>
        <meta name="description" content="登入中" />
      </Head>
      <MainWrapper>
        <Loading />
        {/* {isSuccess ? (
        ) : (
          <div>
            <h1>登入失敗</h1>
            <p>{error?.error_description}</p>
            <p>即將返回登入頁面...</p>
          </div>
        )} */}
      </MainWrapper>
    </>
  );
};

export default ConfirmPage;
