import React from "react";
import { Tbody, Tr, Id, Products, Creatd, Status, Link, Icon } from "./styled";
import { MdFileOpen } from "react-icons/md";
import { InquiryData } from "../data";

type InquiryRowProps = {
  inquiry: InquiryData;
};

const Inquiry: React.FC<InquiryRowProps> = ({ inquiry }) => {
  return (
    <Tbody>
      <Tr>
        <Id>{inquiry.id}</Id>
        <Products>
          {inquiry.products.map((product, index) => (
            <img
              key={index}
              width={80}
              height={80}
              className="InquiryItemImage"
              src={product}
              alt={`Product ${index + 1}`}
            />
          ))}
        </Products>
        <Creatd>{inquiry.createdDate}</Creatd>
        <Status $isSuggest={inquiry.isSuggest}>
          <span>{inquiry.status}</span>
        </Status>
        <Icon>
          <MdFileOpen size={20} color="white" />
        </Icon>
        <Icon>
          <MdFileOpen size={20} color="white" />
        </Icon>
      </Tr>
    </Tbody>
  );
};

export default Inquiry;
