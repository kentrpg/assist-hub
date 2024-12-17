import {
  InquiryContainer,
  Title,
  Table,
  Thead,
  Tr,
  IdHeader,
  ProductHeader,
  CreatedHeader,
  StatusHeader,
  InquiryHeader,
  SuggestHeader,
  Tbody,
  Id,
  Products,
  Creatd,
  Status,
  Link,
} from "./styled";
import { MdFileOpen } from "react-icons/md";

const Inquiries = () => {
  return (
    <>
      <InquiryContainer>
        <Title>詢問單</Title>
        <Table>
          <Thead>
            <Tr>
              <IdHeader>單號</IdHeader>
              <ProductHeader>詢問輔具</ProductHeader>
              <CreatedHeader>建立日期</CreatedHeader>
              <StatusHeader>狀態</StatusHeader>
              <InquiryHeader>詢問單</InquiryHeader>
              <SuggestHeader>建議單</SuggestHeader>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Id>AKC833</Id>
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
              <Creatd>2024/10/04</Creatd>
              <Status $isSuggest={true}>
                <span>店家已評估</span>
              </Status>
              <Link>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </Link>
              <Link>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </Link>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Id>KDO694</Id>
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
              <Creatd>2024/10/04</Creatd>
              <Status $isSuggest={false}>
                <span>店家評估中</span>
              </Status>
              <Link>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </Link>
              <Link>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </Link>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Id>NKD836</Id>
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
              <Creatd>2024/10/04</Creatd>
              <Status $isSuggest={false}>
                <span>店家評估中</span>
              </Status>
              <Link>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </Link>
              <Link>
                <button>
                  <MdFileOpen size={30} color="#103F99" />
                </button>
              </Link>
            </Tr>
          </Tbody>
        </Table>
      </InquiryContainer>
    </>
  );
};

export default Inquiries;
