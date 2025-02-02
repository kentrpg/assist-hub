import { useEffect, useState } from "react";
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
  SelectGroup,
  Select,
  SelectArrowIcon,
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

const OrderList = ({ data: ordersData }: OrderListProps) => {
  console.log(ordersData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const [orderStatuses, setOrderStatuses] = useState<
    Record<string | number, string>
  >({});
  const [shippingStatuses, setShippingStatuses] = useState<
    Record<string | number, string>
  >({});
  const filteredOrders = useFilteredData(ordersData, activeTab);

  const getIsCompleted = (orderStatus: string | null | undefined) => {
    return !orderStatus || orderStatus === "已結案" || orderStatus === "已取消";
  };

  const updateStatusCount = (oldStatus: string, newStatus: string) => {
    if (oldStatus !== newStatus) {
      if (ordersData[oldStatus]) {
        ordersData[oldStatus].count = Math.max(
          0,
          ordersData[oldStatus].count - 1,
        );
      }
      if (ordersData[newStatus]) {
        ordersData[newStatus].count = (ordersData[newStatus].count || 0) + 1;
      }
    }
  };

  const updateStatusData = (
    orderId: string,
    oldStatus: string,
    newStatus: string,
    updatedOrder: any,
  ) => {
    // 只有在狀態確實改變時才更新
    if (oldStatus === newStatus) return;

    // 從舊狀態移除訂單
    if (ordersData[oldStatus]) {
      ordersData[oldStatus].data = ordersData[oldStatus].data.filter(
        (order) => order.orderId.toString() !== orderId,
      );
    }

    // 添加到新狀態
    if (ordersData[newStatus]) {
      ordersData[newStatus].data = [
        ...ordersData[newStatus].data,
        updatedOrder,
      ];
    }

    // 更新全部訂單列表
    if (ordersData["全部"]) {
      ordersData["全部"].data = ordersData["全部"].data.map((order) =>
        order.orderId.toString() === orderId ? updatedOrder : order,
      );
    }

    // 更新當前頁面顯示的資料
    ordersData[activeTab].data = ordersData[activeTab].data.map((order) =>
      order.orderId.toString() === orderId ? updatedOrder : order,
    );
  };

  const handleOrderStatusChange = async (
    orderId: string,
    newStatus: string,
  ) => {
    // 取得舊狀態
    const oldStatus = orderStatuses[orderId] || "已結案";

    const bodyData = {
      orderId: Number(orderId),
      orderStatus: newStatus,
      shippingStatus: shippingStatuses[orderId],
    };

    console.log(oldStatus, orderId, newStatus, shippingStatuses[orderId]);

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
      // 更新狀態
      setOrderStatuses((prev: Record<string | number, string>) => ({
        ...prev,
        [orderId]: newStatus,
      }));

      // 建立更新後的訂單資料
      const updatedOrder = {
        ...ordersData[activeTab].data.find(
          (order) => order.orderId.toString() === orderId,
        ),
        orderStatus: newStatus,
        shippingStatus: shippingStatuses[orderId],
      };

      updateStatusData(orderId, oldStatus, newStatus, updatedOrder);
      updateStatusCount(oldStatus, newStatus);
    }
  };

  const handleShippingStatusChange = async (
    orderId: string,
    newStatus: string,
  ) => {
    const oldStatus = shippingStatuses[orderId] || "已取消";

    const bodyData = {
      orderId: Number(orderId),
      orderStatus: orderStatuses[orderId],
      shippingStatus: newStatus,
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
      // 更新狀態
      setShippingStatuses((prev: Record<string | number, string>) => ({
        ...prev,
        [orderId]: newStatus,
      }));

      // 建立更新後的訂單資料
      const updatedOrder = {
        ...ordersData[activeTab].data.find(
          (order) => order.orderId.toString() === orderId,
        ),
        orderStatus: orderStatuses[orderId],
        shippingStatus: newStatus,
      };

      updateStatusData(orderId, oldStatus, newStatus, updatedOrder);
      updateStatusCount(oldStatus, newStatus);
    }
  };

  useEffect(() => {
    const initialOrderStatuses: Record<string | number, string> = {};
    const initialShippingStatuses: Record<string | number, string> = {};

    ordersData["全部"].data.forEach((order) => {
      initialOrderStatuses[order.orderId] = order.orderStatus || "已結案";
      initialShippingStatuses[order.orderId] = order.shippingStatus || "已取消";
    });

    setOrderStatuses(initialOrderStatuses);
    setShippingStatuses(initialShippingStatuses);
  }, [ordersData]);

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
              const isCompleted = getIsCompleted(orderStatuses[order.orderId]);
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
                      <SelectGroup>
                        <Select
                          value={orderStatuses[order.orderId] || "已結案"}
                          onChange={(e) =>
                            handleOrderStatusChange(
                              order.orderId.toString(),
                              e.target.value,
                            )
                          }
                        >
                          {orderStatusValues.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </Select>
                        <SelectArrowIcon>
                          <MdKeyboardArrowDown size={20} />
                        </SelectArrowIcon>
                      </SelectGroup>
                    </TdCompleted>
                  </Td>
                  <Td>
                    <TdCompleted $completed={isCompleted}>
                      <SelectGroup>
                        <Select
                          value={shippingStatuses[order.orderId] || "已取消"}
                          onChange={(e) =>
                            handleShippingStatusChange(
                              order.orderId.toString(),
                              e.target.value,
                            )
                          }
                        >
                          {shippingValues.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </Select>
                        <SelectArrowIcon>
                          <MdKeyboardArrowDown size={20} />
                        </SelectArrowIcon>
                      </SelectGroup>
                    </TdCompleted>
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
