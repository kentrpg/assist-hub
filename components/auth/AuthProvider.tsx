import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import Loading from "@/components/ui/Loading";

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/getToken");
      const data = await res.json();
      setIsAuthenticated(data.status);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isAdminPage) {
    return <>{children}</>;
  }

  return <Layout isAuthenticated={isAuthenticated}>{children}</Layout>;
}
