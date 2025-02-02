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
  filterOrderMapping,
  OrderListProps,
  orderStatusColorMapping,
  OrderStatusType,
  orderStatusValues,
  shippingStatusColorMapping,
  shippingStatusMapping,
  ShippingStatusType,
  shippingValues,
} from "./data";
import Link from "next/link";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { Header } from "@/components/pages/admin/Header";
import { formatCurrency } from "@/helpers/format/currency";
import { useFilteredData } from "@/hooks/useFilteredData";
import { isValid } from "@/helpers/api/status";
import { useDropdownState } from "./hooks/useDropdownState";

const OrderList = ({ data: ordersData }: OrderListProps) => {
  console.log("ordersData", ordersData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredOrders = useFilteredData(ordersData, activeTab);

  const shippingDropdownStatus = useDropdownState(
    ordersData["全部"].data,
    "shippingStatus",
  );

  const orderDropdownStatus = useDropdownState(
    ordersData["全部"].data,
    "orderStatus",
  );

  const getIsCompleted = (orderStatus: string | null | undefined) => {
    return !orderStatus || orderStatus === "已結案" || orderStatus === "已取消";
  };

  const orderControls = {
    dropdown: {
      isDropdownItem: (target: HTMLElement) =>
        target.closest("[data-dropdown-item]"),
      getDropdownData: (target: HTMLElement) => {
        const item = target.closest("[data-dropdown-item]");
        if (!item) return null;

        return {
          orderId: item.getAttribute("data-order-id"),
          orderStatus: item.getAttribute("data-order-status"),
          orderData: {
            orderCode: item.getAttribute("data-order-code"),
            memberName: item.getAttribute("data-member-name"),
            rentStamp: item.getAttribute("data-rent-stamp"),
            returnStamp: item.getAttribute("data-return-stamp"),
            quantity: Number(item.getAttribute("data-quantity")),
            finalAmount: Number(item.getAttribute("data-final-amount")),
            shipping: item.getAttribute("data-shipping"),
          },
        };
      },
      handleDropdownItemClick: async (data: {
        orderId: string | null;
        orderStatus: string | null;
        orderData: any;
      }) => {
        const { orderId, orderStatus, orderData } = data;

        if (!orderId || !orderStatus) return;

        const bodyData = {
          orderId: Number(orderId),
          orderStatus,
          shippingStatus: shippingDropdownStatus.statuses[orderId],
        };

        const result = await fetch("/api/admin/putOrderStatus", {
          method: "PUT",
          body: JSON.stringify(bodyData),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const json = await result.json();

        if (isValid(json)) {
          // 更新 orderDropdownStatus
          orderDropdownStatus.setStatuses((prev) => ({
            ...prev,
            [orderId]: orderStatus,
          }));

          // 更新 filteredOrders
          const updatedOrder = {
            ...orderData,
            orderId: Number(orderId),
            orderStatus,
            shippingStatus: shippingDropdownStatus.statuses[orderId],
          };

          // 更新 ordersData
          ordersData["全部"].data = ordersData["全部"].data.map((order) =>
            order.orderId === updatedOrder.orderId ? updatedOrder : order,
          );
        }

        orderDropdownStatus.setOpenDropdown(null);
      },
    },
  };

  const shippingControls = {
    dropdown: {
      isDropdownItem: (target: HTMLElement) =>
        target.closest("[data-dropdown-item]"),
      getDropdownData: (target: HTMLElement) => {
        const item = target.closest("[data-dropdown-item]");
        if (!item) return null;

        return {
          orderId: item.getAttribute("data-order-id"),
          orderStatus: item.getAttribute("data-order-status"),
          shippingStatus: item.getAttribute("data-shipping-status"),
          orderData: {
            orderCode: item.getAttribute("data-order-code"),
            memberName: item.getAttribute("data-member-name"),
            rentStamp: item.getAttribute("data-rent-stamp"),
            returnStamp: item.getAttribute("data-return-stamp"),
            quantity: Number(item.getAttribute("data-quantity")),
            finalAmount: Number(item.getAttribute("data-final-amount")),
            shipping: item.getAttribute("data-shipping"),
          },
        };
      },
      handleDropdownItemClick: async (data: {
        orderId: string | null;
        orderStatus: string | null;
        shippingStatus: string | null;
        orderData: any;
      }) => {
        const { orderId, orderStatus, shippingStatus, orderData } = data;

        if (!orderId || !orderStatus || !shippingStatus) return;

        const bodyData = {
          orderId: Number(orderId),
          orderStatus,
          shippingStatus,
        };

        const result = await fetch("/api/admin/putOrderStatus", {
          method: "PUT",
          body: JSON.stringify(bodyData),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const json = await result.json();

        if (isValid(json)) {
          // 更新 shippingDropdownStatus
          shippingDropdownStatus.setStatuses((prev) => ({
            ...prev,
            [orderId]: shippingStatus,
          }));

          // 更新 filteredOrders
          const updatedOrder = {
            ...orderData,
            orderId: Number(orderId),
            orderStatus,
            shippingStatus,
          };

          // 更新 ordersData
          ordersData["全部"].data = ordersData["全部"].data.map((order) =>
            order.orderId === updatedOrder.orderId ? updatedOrder : order,
          );
        }

        shippingDropdownStatus.setOpenDropdown(null);
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = async (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // 處理訂單狀態下拉選單的點擊
      if (orderControls.dropdown.isDropdownItem(target)) {
        const dropdownData = orderControls.dropdown.getDropdownData(target);
        if (dropdownData) {
          await orderControls.dropdown.handleDropdownItemClick(dropdownData);
        }
        return;
      }

      // 處理物流狀態下拉選單的點擊
      if (shippingControls.dropdown.isDropdownItem(target)) {
        const dropdownData = shippingControls.dropdown.getDropdownData(target);
        if (dropdownData) {
          await shippingControls.dropdown.handleDropdownItemClick(dropdownData);
        }
        return;
      }

      // 點擊其他區域時關閉所有下拉選單
      if (
        shippingDropdownStatus.dropdownRef.current &&
        !shippingDropdownStatus.dropdownRef.current.contains(target as Node)
      ) {
        shippingDropdownStatus.setOpenDropdown(null);
      }

      if (
        orderDropdownStatus.dropdownRef.current &&
        !orderDropdownStatus.dropdownRef.current.contains(target as Node)
      ) {
        orderDropdownStatus.setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDataFilter = (tab: ShippingStatusType | OrderStatusType) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Header
        tabs={ordersData}
        activeTab={activeTab}
        onTabChange={handleDataFilter}
        iconMapping={filterOrderMapping}
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
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => {
              const isCompleted = getIsCompleted(
                orderDropdownStatus.statuses[order.orderId],
              );
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
                    <DropdownContainer ref={orderDropdownStatus.dropdownRef}>
                      <TdCompleted $completed={isCompleted}>
                        <DropdownTrigger
                          onClick={() =>
                            orderDropdownStatus.toggleDropdown(
                              order.orderId.toString(),
                            )
                          }
                          $color={
                            orderStatusColorMapping[
                              orderDropdownStatus.statuses[order.orderId]
                            ]?.color || "textMuted"
                          }
                        >
                          {orderDropdownStatus.statuses[order.orderId] ||
                            "已結案"}
                          <MdKeyboardArrowDown size={16} />
                        </DropdownTrigger>
                      </TdCompleted>
                      <DropdownContent
                        $isOpen={
                          orderDropdownStatus.openDropdown ===
                          order.orderId.toString()
                        }
                      >
                        {orderStatusValues.map((status) => (
                          <DropdownItem
                            key={status}
                            data-dropdown-item
                            data-order-id={order.orderId.toString()}
                            data-order-status={status}
                            data-order-code={order.orderCode}
                            data-member-name={order.memberName}
                            data-rent-stamp={order.rentStamp}
                            data-return-stamp={order.returnStamp}
                            data-quantity={order.quantity}
                            data-final-amount={order.finalAmount}
                            data-shipping={order.shipping}
                            $isSelected={
                              orderDropdownStatus.statuses[order.orderId] ===
                                status ||
                              (!orderDropdownStatus.statuses[order.orderId] &&
                                status === "已結案")
                            }
                            $color={
                              orderStatusColorMapping[status]?.color ||
                              "textMuted"
                            }
                          >
                            {status}
                          </DropdownItem>
                        ))}
                      </DropdownContent>
                    </DropdownContainer>
                  </Td>
                  <Td>
                    <DropdownContainer ref={shippingDropdownStatus.dropdownRef}>
                      <TdCompleted $completed={isCompleted}>
                        <DropdownTrigger
                          onClick={() =>
                            shippingDropdownStatus.toggleDropdown(
                              order.orderId.toString(),
                            )
                          }
                          $color={
                            shippingStatusColorMapping[
                              shippingDropdownStatus.statuses[order.orderId]
                            ]
                          }
                        >
                          {shippingDropdownStatus.statuses[order.orderId] ||
                            "已取消"}
                          <MdKeyboardArrowDown size={16} />
                        </DropdownTrigger>
                      </TdCompleted>
                      <DropdownContent
                        $isOpen={
                          shippingDropdownStatus.openDropdown ===
                          order.orderId.toString()
                        }
                      >
                        {shippingValues.map((status) => (
                          <DropdownItem
                            key={status}
                            data-dropdown-item
                            data-order-id={order.orderId.toString()}
                            data-order-status={order.orderStatus}
                            data-shipping-status={status}
                            data-order-code={order.orderCode}
                            data-member-name={order.memberName}
                            data-rent-stamp={order.rentStamp}
                            data-return-stamp={order.returnStamp}
                            data-quantity={order.quantity}
                            data-final-amount={order.finalAmount}
                            data-shipping={order.shipping}
                            $isSelected={
                              shippingDropdownStatus.statuses[order.orderId] ===
                                status ||
                              (!shippingDropdownStatus.statuses[
                                order.orderId
                              ] &&
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
            })
          ) : (
            <Tr>
              <Td colSpan={8}>No data</Td>
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
      {/* 請在這邊添加 Toast 元件 */}
    </Container>
  );
};

export default OrderList;
