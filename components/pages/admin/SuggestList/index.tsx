import {
  Completed,
  Container,
  DropdownCircle,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  PageButton,
  Pagination,
  Sort,
  SortIcon,
  StatusButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
} from "./styled";
import { useState } from "react";
import { inquiryStatuses, SuggestListProps } from "./data";
import { Header } from "../Header";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import {
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { ColorsType } from "@/types/uiProps";

const SuggestList = ({ data: inquiriesData = [] }: SuggestListProps) => {
  console.log("data", inquiriesData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Container>
      <Header
        tabs={inquiryStatuses}
        activeTab={activeTab}
        onTabChange={setActiveTab}
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
          {inquiriesData.length > 0 ? (
            inquiriesData.map((inquiry) => (
              <Tr
                key={`inquiry-${inquiry.inquiryId}`}
                $isCompleted={inquiry.isReplied}
              >
                <Td>
                  <Completed $completed={inquiry.isReplied}>
                    {inquiry.isReplied ? "已回覆" : "尚未回覆"}
                  </Completed>
                </Td>
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
                    {inquiry.suggetsCode}
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
