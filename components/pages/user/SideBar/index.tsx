import {
  Button,
  SideBarContainer,
  Tabs,
  ButtonContent,
  SideBarHeader,
  ProfileImg,
  Email,
} from "./styled";
import Image from "next/image";
import { MdPerson, MdChecklist, MdOutlineAccessible } from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <ProfileImg>
          <Image
            src="/images/Avatar.png"
            alt="用戶頭像"
            width={60}
            height={60}
            priority
          />
        </ProfileImg>
        <SideBarHeader>
          <span>王小姐</span>
          <Email>A0912345678@gmail.com</Email>
        </SideBarHeader>
        <Tabs>
          <Button $isActive>
            <ButtonContent>
              <MdPerson size={24} />
              <span>基本資料</span>
            </ButtonContent>
          </Button>

          <Button>
            <ButtonContent>
              <MdChecklist size={24} />
              <span>我的訂單</span>
            </ButtonContent>
          </Button>

          <Button>
            <ButtonContent>
              <MdOutlineAccessible size={24} />
              <span>詢問單</span>
            </ButtonContent>
          </Button>
        </Tabs>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
