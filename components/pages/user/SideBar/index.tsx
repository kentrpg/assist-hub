import { SideBarButton, SideBarContainer, SideBarTabs,SideBarActiveButton } from "./styled";
import Image from "next/image";

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <Image src="/images/Avatar.png" alt="" width={60} height={60} />
        <div>王小姐</div>
        <div>A0912345678@gmail.com</div>
        <SideBarTabs>
          <SideBarActiveButton>基本資料</SideBarActiveButton>
          <SideBarButton>我的訂單</SideBarButton>
          <SideBarButton>詢問單</SideBarButton>
        </SideBarTabs>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
