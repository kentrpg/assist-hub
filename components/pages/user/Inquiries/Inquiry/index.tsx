import React from "react";
import Link from "next/link";
import { ProductImages, ContentRow, Icon, Grid } from "./styled";
import { ResultGetInquiries } from "@/types/getMemberInquiries";
import { MdFileOpen } from "react-icons/md";

type InquiryProps = {
  inquiry: (typeof ResultGetInquiries.data)[number];
};

const Inquiry: React.FC<InquiryProps> = ({ inquiry }) => {
  const {
    inquiryId,
    inquiryCode,
    createdStamp,
    isReplied,
    images,
    suggestCode,
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
      {/* 第一顆 Icon：詢問單 */}
      <Grid>
        <Link
          href={`/inquiry/${inquiryCode}`}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Icon>
            <MdFileOpen size={16} color="#FFFFFF" />
          </Icon>
        </Link>
      </Grid>
      {/* 第二顆 Icon：建議單 */}
      <Grid>
        {isReplied ? (
          <Link
            href={`/suggest/${suggestCode}`}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Icon>
              <MdFileOpen size={16} color="#FFFFFF" />
            </Icon>
          </Link>
        ) : (
          <Icon $isSuggest={isReplied}>
            <MdFileOpen size={16} color="#E7ECF5" />
          </Icon>
        )}
      </Grid>
    </ContentRow>
  );
};

export default Inquiry;
