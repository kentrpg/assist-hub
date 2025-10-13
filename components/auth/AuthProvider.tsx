import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "@/utils/redux/slices/user";
import Layout from "@/components/layout/Layout";
import Loading from "@/components/ui/Loading";
import { hasError, isEmptyData } from "@/helpers/api/status";

type AuthProviderProps = {
  children: React.ReactNode;
};

let didInit = false;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");
  const dispatch = useDispatch();

  useEffect(() => {
    if (didInit) {
      setIsLoading(false);
      return;
    }

    didInit = true;
    let ignore = false;

    const fetchUserProfile = async () => {
      try {
        const res = await fetch("/api/member/getProfile");
        const result = await res.json();

        if (ignore || hasError(result) || isEmptyData(result)) {
          console.log("fetchUserProfile failed", result);
          return;
        }

        console.log("fetchUserProfile success", result);
        dispatch(setUser(result.data));
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchUserProfile();

    return () => {
      ignore = true;
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (isAdminPage) {
    return <>{children}</>;
  }

  return <Layout>{children}</Layout>;
}
