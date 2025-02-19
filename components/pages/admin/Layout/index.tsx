import Sidebar from "@/components/pages/admin/SideBar";
import { MainContent } from "./style";

type LayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default AdminLayout;
