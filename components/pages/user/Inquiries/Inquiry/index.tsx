import React from "react";
import { ProductImages, ContentRow, Icon, Grid } from "./styled";
import { InquiryData } from "../data";
import { MdFileOpen } from "react-icons/md";

type InquiryRowProps = {
  inquiry: InquiryData;
};

const Inquiry: React.FC<InquiryRowProps> = ({ inquiry }) => {
  const {
    inquiryId,
    inquiryCode,
    createdDate,
    createdStamp,
    isReplied,
    images,
    suggetsId,
    suggetsCode,
  } = inquiry;
  return (
    <ContentRow key={inquiryId}>
      <Grid>{inquiryCode}</Grid>
      <Grid>
        <ProductImages>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </ProductImages>
      </Grid>
      <Grid>{createdStamp}</Grid>
      <Grid $isSuggest={isReplied}>{isReplied ? "已回覆" : "未回覆"}</Grid>
      <Grid>
        <Icon>
          <MdFileOpen size={16} color="#FFFFFF" />
        </Icon>
      </Grid>
      <Grid>
        <Icon>
          <MdFileOpen size={16} color="#FFFFFF" />
        </Icon>
      </Grid>
    </ContentRow>
  );
};

export default Inquiry;
