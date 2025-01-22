import { useEffect, useRef, useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import {
  Container,
  Header,
  SearchContainer,
  TabList,
  Tab,
  Badge,
  Table,
  Th,
  Tr,
  Td,
  SearchInput,
  StatusButton,
  Pagination,
  PageButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownCircle,
  CountSelect,
  CountGroup,
  SelectArrowIcon,
  CountLabel,
  Sort,
  SortIcon,
} from "./styled";
import { orderStatuses, mockOrders, shippingValues } from "./data";
import Link from "next/link";
import { ColorsType } from "@/types/uiProps";
import { FaSort } from "react-icons/fa";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";

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
  status: string
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

const OrderList = () => {
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const [shippingStatuses, setShippingStatuses] = useState<{
    [key: string]: string;
  }>(
    mockOrders.reduce(
      (acc, order) => ({
        ...acc,
        [order.id]: order.shippingStatus || "",
      }),
      {}
    )
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
      <Header>
        <TabList>
          {orderStatuses.map((status) => (
            <Tab
              key={status.label}
              $active={activeTab === status.label}
              onClick={() => setActiveTab(status.label)}
            >
              <status.icon size={16} />
              {status.label}
              {status.count && <Badge>{status.count}</Badge>}
            </Tab>
          ))}
        </TabList>
        <SearchContainer>
          <CountGroup>
            <CountLabel>顯示筆數</CountLabel>
            <CountSelect>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </CountSelect>
            <SelectArrowIcon>
              <FaSort size={16} />
            </SelectArrowIcon>
          </CountGroup>
          <SearchInput placeholder="搜尋..." />
        </SearchContainer>
      </Header>

      <Table>
        <thead>
          <tr>
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
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order) => (
            <Tr key={order.id} $isCompleted={order.orderStatus === "已結案"}>
              <Td>
                <Link href={`/admin/orders/${order.id}`}>{order.id}</Link>
              </Td>
              <Td>
                {order.productName}
                <small>{order.productCode}</small>
              </Td>
              <Td>
                {order.rentalStart}
                <small>{order.rentalEnd}</small>
              </Td>
              <Td>{order.quantity}</Td>
              <Td>{order.total.toLocaleString()}</Td>
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
                    onClick={() => toggleDropdown(order.id)}
                    $color={shippingStatusColorMapping(order.shippingStatus)}
                  >
                    {shippingStatuses[order.id] || "選擇狀態"}
                    <MdKeyboardArrowDown size={16} />
                  </DropdownTrigger>
                  <DropdownContent $isOpen={openDropdown === order.id}>
                    {shippingValues.map((status) => (
                      <DropdownItem
                        key={status}
                        $isSelected={shippingStatuses[order.id] === status}
                        $color={shippingStatusColorMapping(status)}
                        onClick={() =>
                          handleShippingStatusChange(order.id, status)
                        }
                      >
                        {status}
                        <DropdownCircle />
                      </DropdownItem>
                    ))}
                  </DropdownContent>
                </DropdownContainer>
              </Td>
              <Td>{order.deliveryMethod}</Td>
            </Tr>
          ))}
        </tbody>
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
