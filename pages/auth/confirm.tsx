import Loading from "@/components/ui/Loading";
import { MainWrapper } from "@/styles/wrappers";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

type LineLoginError = {
  error: string;
  error_description: string;
};

type Props = {
  isSuccess: boolean;
  error?: LineLoginError;
  code?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  // 檢查是否有錯誤
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

  // 驗證 state 參數（防止 CSRF 攻擊）
  const expectedState = "12345abcde"; // 注意：這應該是動態生成的值
  if (query.state !== expectedState) {
    return {
      props: {
        isSuccess: false,
        error: {
          error: "invalid_state",
          error_description: "無效的 state 參數",
        },
      },
    };
  }

  // 成功取得授權碼
  return {
    props: {
      isSuccess: true,
      code: query.code as string,
    },
  };
};

const ConfirmPage = ({ isSuccess, error, code }: Props) => {
  const router = useRouter();

  console.log("ConfirmPage", isSuccess, error, code);

  useEffect(() => {
    if (!isSuccess) {
      // 登入失敗，重定向到登入頁面
      setTimeout(() => {
        router.push("/auth/signin");
      }, 3000);
      return;
    }

    const getAccessToken = async () => {
      try {
        const response = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        });

        if (response.ok) {
          // 登入成功，重定向到個人資料頁面
          router.push("/user/profile");
        } else {
          // 處理錯誤
          router.push("/auth/signin");
        }
      } catch (err) {
        console.error("獲取存取令牌失敗:", err);
        router.push("/auth/signin");
      }
    };

    getAccessToken();
  }, [isSuccess, error, code, router]);

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
