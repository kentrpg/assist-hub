import { AvatarWrapper, DefaultAvatar } from "./styled";

const Avatar = ({ name = "U" }: { name?: string }) => {
  return (
    <AvatarWrapper>
      <DefaultAvatar>{name}</DefaultAvatar>
    </AvatarWrapper>
  );
};

export default Avatar;
