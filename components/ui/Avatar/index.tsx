import Image from "next/image";
import { AvatarWrapper, DefaultAvatar } from "./styled";

export type AvatarProps = {
  isLoggedIn: boolean;
  imageSrc: string;
};

const Avatar = ({ isLoggedIn, imageSrc }: AvatarProps) => {
  return (
    <AvatarWrapper>
      {isLoggedIn ? (
        <Image
          src={imageSrc}
          alt="User avatar"
          width={32}
          height={32}
          priority
        />
      ) : (
        <DefaultAvatar>U</DefaultAvatar>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
