import Image from 'next/image';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e7eb;
  font-size: 16px;
  font-weight: 500;
  color: #374151;
`;

type AvatarProps = {
  isLoggedIn: boolean;
  imageSrc: string;
}

const Avatar = ({ isLoggedIn, imageSrc }: AvatarProps) => {
  // const [imageError, setImageError] = useState(false);
  // const showDefaultAvatar = !isLoggedIn || imageError;
  // console.log(isLoggedIn, imageError, showDefaultAvatar);
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
