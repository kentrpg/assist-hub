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
import { useState, useEffect } from "react";
import { filterSuggestMapping, SuggestListProps } from "./data";
import { Header } from "../Header";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useFilteredData } from "@/hooks/useFilteredData";
import { InquiriesDataType } from "@/types/getAdminInquiries";
import { countSelects } from "../Header/data";

const SuggestList = ({ data: inquiriesData }: SuggestListProps) => {
  console.log("data", inquiriesData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(countSelects[0]);
  const [totalPages, setTotalPages] = useState(1);
  const [paginatedData, setPaginatedData] = useState<InquiriesDataType[]>([]);

  const calculatePaginatedData = (
    data: InquiriesDataType[],
    page: number,
    pageSize: number,
  ) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  const handlePagination = (
    value: number,
    countPage: number,
    currentPage: number,
  ) => {
    const newPaginatedData = calculatePaginatedData(
      inquiriesData[activeTab].data,
      currentPage,
      value,
    );

    setItemsPerPage(value);
    setTotalPages(countPage);
    setCurrentPage(currentPage);
    setPaginatedData(newPaginatedData);
  };

  const handleCountSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    const totalItems = inquiriesData[activeTab].count;

    const quotient = Math.floor(totalItems / value);
    const remainder = totalItems % value;
    const countPage = remainder > 0 ? quotient + 1 : quotient;

    handlePagination(value, countPage, 1);
  };

  const handlePageChange = (page: number) => {
    handlePagination(itemsPerPage, totalPages, page);
  };

  const handleDataFilter = (tab: string) => {
    setCurrentPage(1);
    setActiveTab(tab);
  };

  useEffect(() => {
    const totalItems = inquiriesData[activeTab].count;
    const quotient = Math.floor(totalItems / itemsPerPage);
    const remainder = totalItems % itemsPerPage;
    const countPage = remainder > 0 ? quotient + 1 : quotient;

    handlePagination(itemsPerPage, countPage, currentPage);
  }, [activeTab, inquiriesData]);

  return (
    <Container>
      <Header
        tabs={inquiriesData}
        activeTab={activeTab}
        onTabChange={handleDataFilter}
        iconMapping={filterSuggestMapping}
        onChangeSelect={handleCountSelect}
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
            <Th>名稱</Th>
            <Th>信箱</Th>
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
          {paginatedData.length > 0 ? (
            paginatedData.map((inquiry) => (
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
                        ? `/suggest/${inquiry.suggestCode}`
                        : `/admin/suggest?inquiryId=${inquiry.inquiryId}`
                    }
                    target="_blank"
                  >
                    <Completed $completed={inquiry.isReplied}>
                      {inquiry.isReplied ? inquiry.suggestCode : "前往回覆"}
                    </Completed>
                  </Link>
                </Td>
                <Td>{inquiry.member.memberName}</Td>
                <Td>{inquiry.member.email}</Td>
                <Td>{inquiry.createdStamp}</Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={6}>No data</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      <Pagination>
        <PageButton
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <MdChevronLeft size={18} />
        </PageButton>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PageButton
              key={page}
              $active={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PageButton>
          ),
        )}
        <PageButton
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
        >
          <MdChevronRight size={18} />
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default SuggestList;
