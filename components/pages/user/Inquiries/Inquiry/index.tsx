import React from "react";
import { ProductImages, ContentRow, Icon, Grid } from "./styled";
import { InquiryData } from "../data";
import { MdFileOpen } from "react-icons/md";

type InquiryRowProps = {
  inquiry: InquiryData;
};

const Inquiry: React.FC<InquiryRowProps> = ({ inquiry }) => {
  const { id, products, createdDate, isSuggest, status } = inquiry;

  return (
    <ContentRow key={id}>
      <Grid>{id}</Grid>
      <Grid>
        <ProductImages>
          {products.map((product, index) => (
            <img key={index} src={product} alt={`Product ${index + 1}`} />
          ))}
        </ProductImages>
      </Grid>
      <Grid>{createdDate}</Grid>
      <Grid $isSuggest={isSuggest}>{status}</Grid>
      <Grid>
        <Icon>
          <MdFileOpen size={20} color="#FFFFFF" />
        </Icon>
      </Grid>
      <Grid>
        <Icon>
          <MdFileOpen size={20} color="#FFFFFF" />
        </Icon>
      </Grid>
    </ContentRow>
  );
};

export default Inquiry;
