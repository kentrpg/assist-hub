import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/utils/redux/slices/user";
import { RootState } from "@/utils/redux/store";
import Layout from "@/components/layout/Layout";
import Loading from "@/components/ui/Loading";
import { hasError, isEmptyData, isValid } from "@/helpers/api/status";
import AdminLayout from "@/components/pages/admin/Layout";

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/getToken");
      const result = await res.json();

      isValid(result) && setIsAuthenticated(result.status);
      await setUserData();
      setIsLoading(false);
    };

    const setUserData = async () => {
      setIsUserDataLoading(true);
      if (user.name !== "") return;

      const res = await fetch("/api/member/getProfile");
      const result = await res.json();

      if (hasError(result) || isEmptyData(result)) {
        setIsAuthenticated(false);
        return;
      }

      dispatch(setUser(result.data));
      setIsUserDataLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <Layout isAuthenticated={isAuthenticated} isLoading={isUserDataLoading}>
      {children}
    </Layout>
  );
}
