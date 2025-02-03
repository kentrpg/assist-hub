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
  Sort,
  SortIcon,
  Thead,
  Tbody,
  TdCompleted,
  SelectArrowIcon,
  SelectGroup,
  Select,
} from "./styled";
import {
  filterOrderMapping,
  OrderListProps,
  OrderStatusType,
  orderStatusValues,
  shippingStatusMapping,
  ShippingStatusType,
  shippingValues,
} from "./data";
import { OrderDataType } from "@/types/getAdminOrders";
import Link from "next/link";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { Header } from "@/components/pages/admin/Header";
import { formatCurrency } from "@/helpers/format/currency";
import { useFilteredData } from "@/hooks/useFilteredData";
import { hasError } from "@/helpers/api/status";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import Toast from "@/components/ui/Toast";
import { ToastState } from "@/components/ui/Toast/data";

const countSelects = [10, 20, 30, 50];

const OrderList = ({ data: ordersData }: OrderListProps) => {
  console.log(ordersData);
  const [activeTab, setActiveTab] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const [toast, setToast] = useState<ToastState>(null);
  const [itemsPerPage, setItemsPerPage] = useState(countSelects[0]);
  const [totalPages, setTotalPages] = useState(1);
  const [paginatedData, setPaginatedData] = useState<OrderDataType[]>([]);

  const [orderStatuses, setOrderStatuses] = useState<
    Record<string | number, string>
  >({});
  const [shippingStatuses, setShippingStatuses] = useState<
    Record<string | number, string>
  >({});
  const [isOrderStatusLoading, setIsOrderStatusLoading] = useState<
    Record<string | number, boolean>
  >({});
  const [isShippingStatusLoading, setIsShippingStatusLoading] = useState<
    Record<string | number, boolean>
  >({});
  // const filteredOrders = useFilteredData(ordersData, activeTab);

  const getIsCompleted = (orderStatus: string | null | undefined) => {
    return !orderStatus || orderStatus === "已結案" || orderStatus === "已取消";
  };

  const toastControls = {
    toast: {
      isVisible: toast !== null,
      content: toast && {
        type: toast.type,
        message: toast.message,
        onClose: () => setToast(null),
      },
    },
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
    if (oldStatus === newStatus) return;

    if (ordersData[oldStatus]) {
      ordersData[oldStatus].data = ordersData[oldStatus].data.filter(
        (order) => order.orderId.toString() !== orderId,
      );
    }

    if (ordersData[newStatus]) {
      ordersData[newStatus].data = [
        ...ordersData[newStatus].data,
        updatedOrder,
      ];
    }

    if (ordersData["全部"]) {
      ordersData["全部"].data = ordersData["全部"].data.map((order) =>
        order.orderId.toString() === orderId ? updatedOrder : order,
      );
    }

    ordersData[activeTab].data = ordersData[activeTab].data.map((order) =>
      order.orderId.toString() === orderId ? updatedOrder : order,
    );
  };

  const handleOrderStatusChange = async (
    orderId: string,
    newStatus: string,
  ) => {
    setIsOrderStatusLoading((prev) => ({
      ...prev,
      [orderId]: true,
    }));

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

    if (hasError(json)) {
      setToast({
        type: "error",
        message: "系統錯誤，請稍後再試",
      });
      console.log("error", json.error);
      setIsOrderStatusLoading((prev) => ({
        ...prev,
        [orderId]: false,
      }));
      return;
    }

    setOrderStatuses((prev: Record<string | number, string>) => ({
      ...prev,
      [orderId]: newStatus,
    }));

    const updatedOrder = {
      ...ordersData[activeTab].data.find(
        (order) => order.orderId.toString() === orderId,
      ),
      orderStatus: newStatus,
      shippingStatus: shippingStatuses[orderId],
    };

    updateStatusData(orderId, oldStatus, newStatus, updatedOrder);
    updateStatusCount(oldStatus, newStatus);

    setToast({
      type: "success",
      message: "成功更新訂單狀態",
    });

    setIsOrderStatusLoading((prev) => ({
      ...prev,
      [orderId]: false,
    }));
  };

  const handleShippingStatusChange = async (
    orderId: string,
    newStatus: string,
  ) => {
    setIsShippingStatusLoading((prev) => ({
      ...prev,
      [orderId]: true,
    }));

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

    if (hasError(json)) {
      setToast({
        type: "error",
        message: "系統錯誤，請稍後再試",
      });
      console.log("error", json.error);
      setIsOrderStatusLoading((prev) => ({
        ...prev,
        [orderId]: false,
      }));
      return;
    }

    setShippingStatuses((prev: Record<string | number, string>) => ({
      ...prev,
      [orderId]: newStatus,
    }));

    const updatedOrder = {
      ...ordersData[activeTab].data.find(
        (order) => order.orderId.toString() === orderId,
      ),
      orderStatus: orderStatuses[orderId],
      shippingStatus: newStatus,
    };

    updateStatusData(orderId, oldStatus, newStatus, updatedOrder);
    updateStatusCount(oldStatus, newStatus);

    setToast({
      type: "success",
      message: "成功更新物流狀態",
    });

    setIsShippingStatusLoading((prev) => ({
      ...prev,
      [orderId]: false,
    }));
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
    setCurrentPage(1);
    setActiveTab(tab);
  };

  const calculatePaginatedData = (
    data: OrderDataType[],
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
      ordersData[activeTab].data,
      currentPage,
      value,
    );

    console.log(newPaginatedData);

    setItemsPerPage(value);
    setTotalPages(countPage);
    setCurrentPage(currentPage);
    setPaginatedData(newPaginatedData);
  };

  const handleCountSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    const totalItems = ordersData[activeTab].count;

    const quotient = Math.floor(totalItems / value);
    const remainder = totalItems % value;
    const countPage = remainder > 0 ? quotient + 1 : quotient;

    handlePagination(value, countPage, 1);
  };

  const handlePageChange = (page: number) => {
    console.log("Selected page:", page);

    handlePagination(itemsPerPage, totalPages, page);
  };

  useEffect(() => {
    const totalItems = ordersData[activeTab].count;
    const quotient = Math.floor(totalItems / itemsPerPage);
    const remainder = totalItems % itemsPerPage;
    const countPage = remainder > 0 ? quotient + 1 : quotient;

    handlePagination(itemsPerPage, countPage, currentPage);
  }, [activeTab, ordersData]);

  return (
    <Container>
      <Header
        tabs={ordersData}
        activeTab={activeTab}
        onTabChange={handleDataFilter}
        iconMapping={filterOrderMapping}
        onChangeSelect={handleCountSelect}
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
          {paginatedData.length > 0 ? (
            paginatedData.map((order) => {
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
                          disabled={isOrderStatusLoading[order.orderId]}
                        >
                          {orderStatusValues.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </Select>
                        <SelectArrowIcon>
                          {isOrderStatusLoading[order.orderId] ? (
                            <LoaderSpinner $color="grey100" />
                          ) : (
                            <MdKeyboardArrowDown size={20} />
                          )}
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
                          disabled={isShippingStatusLoading[order.orderId]}
                        >
                          {shippingValues.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </Select>
                        <SelectArrowIcon>
                          {isShippingStatusLoading[order.orderId] ? (
                            <LoaderSpinner $color="grey300" />
                          ) : (
                            <MdKeyboardArrowDown size={20} />
                          )}
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
      {toastControls.toast.isVisible && (
        <Toast {...toastControls.toast.content!} />
      )}
    </Container>
  );
};

export default OrderList;
