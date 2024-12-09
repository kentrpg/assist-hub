import { SideBarContainer, SideBarTabs } from "./styled";
import Image from "next/image";

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <Image src="/images/Avatar.png" alt="" width={60} height={60} />
        <div>王小姐</div>
        <div>sk2377328815@gmail.com</div>
        <SideBarTabs>
          <button>基本資料</button>
          <button>我的訂單</button>
          <button>詢問單</button>
        </SideBarTabs>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
