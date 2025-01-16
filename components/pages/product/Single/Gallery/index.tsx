import React, { useState } from "react";
import { GalleryContainer, Main, InfoImage, Thumbnail } from "./styled";

// 定義型別
type GalleryProps = {
  initialImage?: string; // 初始圖片
  thumbnails: string[]; // 縮圖圖片陣列
};

const Gallery: React.FC<GalleryProps> = ({
  initialImage = "/images/infoMain.png", 
  thumbnails,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(initialImage);

  return (
    <GalleryContainer>
      <Main>
        <InfoImage src={selectedImage} alt="Product" />
      </Main>
      <Thumbnail>
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(thumbnail)}
          />
        ))}
      </Thumbnail>
    </GalleryContainer>
  );
};

export default Gallery;
