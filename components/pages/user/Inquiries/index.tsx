import {
  CreationDate,
  InquiryContainer,
  InquiryLink,
  InquiryTitle,
  NumberHeader,
  OthersHeader,
  ProductId,
  Products,
  ProductsHeader,
  Status,
  SuggestionLink,
  Table,
  Tbody,
  Thead,
  TableHeadTr,
  TableBodyTr,
} from "./styled";
import { MdFileOpen } from "react-icons/md";

const Inquiries = () => {
  return (
    <>
      <InquiryContainer>
        <InquiryTitle>詢問單</InquiryTitle>
        <Table>
          <Thead>
            <TableHeadTr>
              <NumberHeader>單號</NumberHeader>
              <ProductsHeader>詢問輔具</ProductsHeader>
              <OthersHeader>建立日期</OthersHeader>
              <OthersHeader>狀態</OthersHeader>
              <OthersHeader>詢問單</OthersHeader>
              <OthersHeader>建議單</OthersHeader>
            </TableHeadTr>
          </Thead>

          <Tbody>
            <TableBodyTr>
              <ProductId>AKC833</ProductId>
              <Products>
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="輪椅"
                />
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="拐杖"
                />
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="藍色輪椅"
                />
              </Products>
              <CreationDate>2024/10/04</CreationDate>
              <Status $isSuggest>
                <span>店家已評估</span>
              </Status>
              <InquiryLink>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </InquiryLink>
              <SuggestionLink>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </SuggestionLink>
            </TableBodyTr>
          </Tbody>
          <Tbody>
            <TableBodyTr>
              <ProductId>KDO694</ProductId>
              <Products>
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="輪椅"
                />
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="拐杖"
                />
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="藍色輪椅"
                />
              </Products>
              <CreationDate>2024/11/04</CreationDate>
              <Status>
                <span>店家評估中</span>
              </Status>
              <InquiryLink>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </InquiryLink>
              <SuggestionLink>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </SuggestionLink>
            </TableBodyTr>
          </Tbody>
          <Tbody>
            <TableBodyTr>
              <ProductId>NKD836</ProductId>
              <Products>
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="輪椅"
                />
                <img
                  width={80}
                  height={80}
                  className="InquiryItemImage"
                  src="https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?"
                  alt="拐杖"
                />
              </Products>
              <CreationDate>2024/12/04</CreationDate>
              <Status>
                <span>店家評估中</span>
              </Status>
              <InquiryLink>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </InquiryLink>
              <SuggestionLink>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </SuggestionLink>
            </TableBodyTr>
          </Tbody>
        </Table>
      </InquiryContainer>
    </>
  );
};

export default Inquiries;
