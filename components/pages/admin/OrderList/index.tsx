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
  TdCompleted,
} from "./styled";
import {
  OrderListProps,
  orderStatusColorMapping,
  OrderStatusType,
  shippingStatusColorMapping,
  shippingStatusMapping,
  ShippingStatusType,
  shippingValues,
  TabType,
} from "./data";
import Link from "next/link";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { Header } from "@/components/pages/admin/Header";
import { formatCurrency } from "@/helpers/format/currency";

const OrderList = ({ data: ordersData }: OrderListProps) => {
  console.log("ordersData", ordersData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredOrders, setFilteredOrders] = useState(ordersData["全部"].data);
  const [shippingStatuses, setShippingStatuses] = useState<{
    [key: string]: string;
  }>(
    ordersData["全部"].data.reduce(
      (acc, order) => ({
        ...acc,
        [order.orderId]: order.shippingStatus || "",
      }),
      {},
    ),
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (orderId: string) => {
    setOpenDropdown(openDropdown === orderId ? null : orderId);
  };

  const handleDataFilter = (tab: ShippingStatusType | OrderStatusType) => {
    setActiveTab(tab);
    setFilteredOrders(ordersData[tab].data);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("[data-dropdown-item]")) {
        const orderId = target
          .closest("[data-dropdown-item]")
          ?.getAttribute("data-order-id");
        const status = target
          .closest("[data-dropdown-item]")
          ?.getAttribute("data-status");

        console.log("orderId", orderId);
        console.log("status", status);

        // TBD: 需要多一隻 API 來取得訂單資料
        const bodyData = {
          shippingStatus: status,
        };

        if (orderId && status) {
          setShippingStatuses((prev) => ({
            ...prev,
            [orderId]: status,
          }));
        }
        setOpenDropdown(null);
        return;
      }

      // 點擊其他區域時關閉下拉選單
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
        tabs={ordersData}
        activeTab={activeTab}
        onTabChange={handleDataFilter}
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
          {filteredOrders.map((order) => {
            const isCompleted =
              !order.orderStatus ||
              order.orderStatus === "已結案" ||
              order.orderStatus === "已取消";
            return (
              <Tr key={order.orderId} $isCompleted={isCompleted}>
                <Td>
                  <TdCompleted $completed={isCompleted}>
                    <Link
                      href={`/admin/order/${order.orderId}`}
                      target="_blank"
                    >
                      {order.orderCode}
                    </Link>
                  </TdCompleted>
                </Td>
                <Td>
                  <TdCompleted $completed={isCompleted}>
                    {order.memberName}
                  </TdCompleted>
                </Td>
                <Td>
                  <TdCompleted $completed={isCompleted}>
                    {order.rentStamp}
                    <small>{order.returnStamp}</small>
                  </TdCompleted>
                </Td>
                <Td>
                  <TdCompleted $completed={isCompleted}>
                    {order.quantity}
                  </TdCompleted>
                </Td>
                <Td>
                  <TdCompleted $completed={isCompleted}>
                    {formatCurrency(order.finalAmount)}
                  </TdCompleted>
                </Td>
                <Td>
                  <TdCompleted $completed={isCompleted}>
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
                      {order.orderStatus || "已結案"}
                    </StatusButton>
                  </TdCompleted>
                </Td>
                <Td>
                  <DropdownContainer ref={dropdownRef}>
                    <TdCompleted $completed={isCompleted}>
                      <DropdownTrigger
                        onClick={() => toggleDropdown(order.orderId.toString())}
                        $color={
                          shippingStatusColorMapping[order.shippingStatus]
                        }
                      >
                        {shippingStatuses[order.orderId] || "已取消"}
                        <MdKeyboardArrowDown size={16} />
                      </DropdownTrigger>
                    </TdCompleted>
                    <DropdownContent
                      $isOpen={openDropdown === order.orderId.toString()}
                    >
                      {shippingValues.map((status) => (
                        <DropdownItem
                          key={status}
                          data-dropdown-item
                          data-order-id={order.orderId.toString()}
                          data-status={status}
                          $isSelected={
                            shippingStatuses[order.orderId] === status ||
                            (!shippingStatuses[order.orderId] &&
                              status === "已取消")
                          }
                          $color={
                            shippingStatusColorMapping[status] || "textMuted"
                          }
                        >
                          {status}
                          <DropdownCircle />
                        </DropdownItem>
                      ))}
                    </DropdownContent>
                  </DropdownContainer>
                </Td>
                <Td>
                  <TdCompleted $completed={isCompleted}>
                    {shippingStatusMapping[order.shipping] || "未選擇"}
                  </TdCompleted>
                </Td>
              </Tr>
            );
          })}
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
