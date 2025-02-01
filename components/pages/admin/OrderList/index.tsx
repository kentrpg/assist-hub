import { useEffect, useRef, useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import {
  Container,
  Table,
  Th,
  Tr,
  Td,
  StatusButton,
  Pagination,
  PageButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownCircle,
  Sort,
  SortIcon,
  Thead,
  Tbody,
} from "./styled";
import {
  orderStatusColorMapping,
  orderStatuses,
  shippingStatusColorMapping,
  shippingValues,
} from "./data";
import Link from "next/link";
import { ColorsType } from "@/types/uiProps";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { Header } from "@/components/pages/admin/Header";
import { OrderDataType } from "@/types/getAdminOrders";
import { formatCurrency } from "@/helpers/format/currency";

// const orderStatusColorMapping = (
//   status: string,
// ): { color: ColorsType; bgColor: ColorsType } => {
//   switch (status) {
//     case "未付款":
//       return { color: "accent", bgColor: "accentLight" };
//     case "已付款":
//       return { color: "grey300", bgColor: "secondaryBg" };
//     case "已結案":
//     default:
//       return { color: "textMuted", bgColor: "secondaryBg" };
//   }
// };

const shippingStatusMapping: { [key: string]: string } = {
  delivery: "宅配",
  store: "店取",
};

type OrderListProps = {
  data?: OrderDataType[];
};

const OrderList = ({ data: ordersData = [] }: OrderListProps) => {
  console.log("ordersData", ordersData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const [shippingStatuses, setShippingStatuses] = useState<{
    [key: string]: string;
  }>(
    ordersData.reduce(
      (acc, order) => ({
        ...acc,
        [order.orderId]: order.shippingStatus || "",
      }),
      {},
    ),
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleShippingStatusChange = (orderId: string, value: string) => {
    setShippingStatuses((prev) => ({
      ...prev,
      [orderId]: value,
    }));
    setOpenDropdown(null);
  };

  const toggleDropdown = (orderId: string) => {
    setOpenDropdown(openDropdown === orderId ? null : orderId);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Header
        tabs={orderStatuses}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Sort>
                訂單編號
                <SortIcon>
                  <CgArrowLongDown size={14} />
                  <CgArrowLongUp size={14} />
                </SortIcon>
              </Sort>
            </Th>
            <Th>名稱</Th>
            <Th>
              <Sort>
                租借期間
                <SortIcon>
                  <CgArrowLongDown size={14} />
                  <CgArrowLongUp size={14} />
                </SortIcon>
              </Sort>
            </Th>
            <Th>數量</Th>
            <Th>總額</Th>
            <Th>訂單狀態</Th>
            <Th>物流狀態</Th>
            <Th>取貨方式</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ordersData.map((order) => (
            <Tr
              key={order.orderId}
              $isCompleted={
                !order.orderStatus ||
                order.orderStatus === "已結案" ||
                order.orderStatus === "已取消"
              }
            >
              <Td>
                <Link href={`/admin/order/${order.orderId}`} target="_blank">
                  {order.orderCode}
                </Link>
              </Td>
              <Td>{order.memberName}</Td>
              <Td>
                {order.rentStamp}
                <small>{order.returnStamp}</small>
              </Td>
              <Td>{order.quantity}</Td>
              <Td>{formatCurrency(order.finalAmount)}</Td>
              <Td>
                <StatusButton
                  $color={
                    orderStatusColorMapping[order.orderStatus]?.color ||
                    "textMuted"
                  }
                  $bgColor={
                    orderStatusColorMapping[order.orderStatus]?.bgColor ||
                    "secondaryBg"
                  }
                >
                  {orderStatuses.find((s) => s.label === order.orderStatus)
                    ?.label || "已結案"}
                </StatusButton>
              </Td>
              <Td>
                <DropdownContainer ref={dropdownRef}>
                  <DropdownTrigger
                    onClick={() => toggleDropdown(order.orderId.toString())}
                    $color={shippingStatusColorMapping[order.shippingStatus]}
                  >
                    {shippingStatuses[order.orderId] || "已取消"}
                    <MdKeyboardArrowDown size={16} />
                  </DropdownTrigger>
                  <DropdownContent
                    $isOpen={openDropdown === order.orderId.toString()}
                  >
                    {shippingValues.map((status) => (
                      <DropdownItem
                        key={status}
                        $isSelected={shippingStatuses[order.orderId] === status}
                        $color={shippingStatusColorMapping[status] || "textMuted"}
                        onClick={() =>
                          handleShippingStatusChange(
                            order.orderId.toString(),
                            status,
                          )
                        }
                      >
                        {status}
                        <DropdownCircle />
                      </DropdownItem>
                    ))}
                  </DropdownContent>
                </DropdownContainer>
              </Td>
              <Td>{shippingStatusMapping[order.shipping] || "未選擇"}</Td>
            </Tr>
          ))}
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

export default OrderList;
