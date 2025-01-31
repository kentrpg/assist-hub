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
import { orderStatuses, shippingValues } from "./data";
import Link from "next/link";
import { ColorsType } from "@/types/uiProps";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { Header } from "@/components/pages/admin/Header";
import { OrderDataType } from "@/types/getAdminOrders";

const shippingStatusColorMapping = (status: string): ColorsType => {
  switch (status) {
    case "待出貨":
    case "待取貨":
      return "accent";
    case "運送中":
      return "secondary";
    case "已抵達":
    case "已取貨":
      return "primary";
    case "已歸還":
    case "已取消":
    default:
      return "textMuted";
  }
};

const orderStatusColorMapping = (
  status: string,
): { color: ColorsType; bgColor: ColorsType } => {
  switch (status) {
    case "未付款":
      return { color: "accent", bgColor: "accentLight" };
    case "已付款":
      return { color: "grey300", bgColor: "secondaryBg" };
    case "已結案":
    default:
      return { color: "textMuted", bgColor: "secondaryBg" };
  }
};

type OrderListProps = {
  data?: OrderDataType[];
};

const OrderList = ({ data: ordersData = [] }: OrderListProps) => {
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
            <Th>品項</Th>
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
              $isCompleted={order.orderStatus === "已結案"}
            >
              <Td>
                <Link href={`/admin/orders/${order.orderId}`}>
                  {order.orderCode}
                </Link>
              </Td>
              <Td>
                {order.memberName}
                <small>{order.orderCode}</small>
              </Td>
              <Td>
                {order.rentDate}
                <small>{order.returnDate}</small>
              </Td>
              <Td>{order.quantity}</Td>
              <Td>{order.finalAmount.toLocaleString()}</Td>
              <Td>
                <StatusButton
                  $color={orderStatusColorMapping(order.orderStatus).color}
                  $bgColor={orderStatusColorMapping(order.orderStatus).bgColor}
                >
                  {
                    orderStatuses.find((s) => s.label === order.orderStatus)
                      ?.label
                  }
                </StatusButton>
              </Td>
              <Td>
                <DropdownContainer ref={dropdownRef}>
                  <DropdownTrigger
                    onClick={() => toggleDropdown(order.orderId.toString())}
                    $color={shippingStatusColorMapping(order.shippingStatus)}
                  >
                    {shippingStatuses[order.orderId] || "選擇狀態"}
                    <MdKeyboardArrowDown size={16} />
                  </DropdownTrigger>
                  <DropdownContent
                    $isOpen={openDropdown === order.orderId.toString()}
                  >
                    {shippingValues.map((status) => (
                      <DropdownItem
                        key={status}
                        $isSelected={shippingStatuses[order.orderId] === status}
                        $color={shippingStatusColorMapping(status)}
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
              <Td>{order.shipping}</Td>
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
