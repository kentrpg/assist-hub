import Loading from "@/components/ui/Loading";
import { MainWrapper } from "@/styles/wrappers";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { isValid } from "@/helpers/api/status";

type LineLoginError = {
  error: string;
  error_description: string;
};

type Props = {
  isSuccess: boolean;
  error?: LineLoginError;
  code?: string;
  fullQuery?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  resolvedUrl,
}) => {
  if (query.error) {
    return {
      props: {
        isSuccess: false,
        error: {
          error: query.error as string,
          error_description: (query.error_description as string) || "未知錯誤",
        },
      },
    };
  }

  // 檢查必要參數
  console.log("query.code", query.code);
  console.log("query.state", query.state);
  if (!query.code || !query.state) {
    return {
      props: {
        isSuccess: false,
        error: {
          error: "invalid_request",
          error_description: "缺少必要參數",
        },
      },
    };
  }

  // 取得 query string
  const queryIndex = resolvedUrl.indexOf("?");
  const fullQuery = queryIndex !== -1 ? resolvedUrl.slice(queryIndex) : "";

  console.log("fullQuery", fullQuery);
  console.log("query", query);

  // 成功取得授權碼
  return {
    props: {
      isSuccess: true,
      code: query.code as string,
      fullQuery,
    },
  };
};

const ConfirmPage = ({ isSuccess, error, code, fullQuery }: Props) => {
  const router = useRouter();

  console.log("ConfirmPage", isSuccess, error, code, fullQuery);

  useEffect(() => {
    // if (!isSuccess) {
    //   setTimeout(() => {
    //     router.push("/auth/signin");
    //   }, 3000);
    //   return;
    // }
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
      if (isValid(result)) {
        window.location.href = "/user/profile";
      } else {
        alert(`${result.error}, ${result.message}`);
        window.location.href = "/auth/signin";
      }
    };

    getAccessToken();
    console.log("confirm useEffect end");
  }, [isSuccess, error, code, fullQuery, router]);

  return (
    <>
      <Head>
        <title>{isSuccess ? "登入中" : "登入失敗"}</title>
        <meta name="description" content={isSuccess ? "登入中" : "登入失敗"} />
      </Head>
      <MainWrapper>
        {isSuccess ? (
          <Loading />
        ) : (
          <div>
            <h1>登入失敗</h1>
            <p>{error?.error_description}</p>
            <p>即將返回登入頁面...</p>
          </div>
        )}
      </MainWrapper>
    </>
  );
};

export default ConfirmPage;
