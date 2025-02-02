import {
  Completed,
  Container,
  PageButton,
  Pagination,
  Sort,
  SortIcon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
} from "./styled";
import { useState } from "react";
import { filterSuggestMapping, SuggestListProps } from "./data";
import { Header } from "../Header";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useFilteredData } from "@/hooks/useFilteredData";

const SuggestList = ({ data: inquiriesData }: SuggestListProps) => {
  console.log("data", inquiriesData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredOrders = useFilteredData(inquiriesData, activeTab);

  return (
    <Container>
      <Header
        tabs={inquiriesData}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        iconMapping={filterSuggestMapping}
      />
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Sort>詢問單狀態</Sort>
            </Th>
            <Th>
              <Sort>
                詢問單
                <SortIcon>
                  <CgArrowLongDown size={14} />
                  <CgArrowLongUp size={14} />
                </SortIcon>
              </Sort>
            </Th>
            <Th>
              <Sort>
                建議單
                <SortIcon>
                  <CgArrowLongDown size={14} />
                  <CgArrowLongUp size={14} />
                </SortIcon>
              </Sort>
            </Th>
            <Th>會員聯絡方式</Th>
            <Th>
              <Sort>
                收件日期
                <SortIcon>
                  <CgArrowLongDown size={14} />
                  <CgArrowLongUp size={14} />
                </SortIcon>
              </Sort>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((inquiry) => (
              <Tr
                key={`inquiry-${inquiry.inquiryId}`}
                $isCompleted={inquiry.isReplied}
              >
                <Td>{inquiry.isReplied ? "已回覆" : "尚未回覆"}</Td>
                <Td>
                  <Link
                    href={`/inquiry/${inquiry.inquiryCode}`}
                    target="_blank"
                  >
                    {inquiry.inquiryCode}
                  </Link>
                </Td>
                <Td>
                  <Link
                    href={
                      inquiry.isReplied
                        ? `/suggest/${inquiry.suggetsCode}`
                        : `/admin/suggest?inquiryId=${inquiry.inquiryId}`
                    }
                    target="_blank"
                  >
                    <Completed $completed={inquiry.isReplied}>
                      {inquiry.isReplied ? inquiry.suggetsCode : "前往回覆"}
                    </Completed>
                  </Link>
                </Td>
                <Td>contactInfo</Td>
                {/* <Td>{inquiry.contactInfo || "contactInfo"}</Td> */}
                <Td>{inquiry.createdStamp}</Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={5}>No data</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      <Pagination>
        <PageButton
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <MdChevronLeft size={18} />
        </PageButton>
        <PageButton $active={true}>{currentPage}</PageButton>
        <PageButton onClick={() => setCurrentPage((p) => p + 1)}>
          <MdChevronRight size={18} />
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default SuggestList;
