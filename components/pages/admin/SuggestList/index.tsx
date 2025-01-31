import {
  Container,
  DropdownCircle,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Sort,
  SortIcon,
  StatusButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styled";
import { useState } from "react";
import { inquiryStatuses } from "./data";
import { Header } from "../Header";
import Link from "next/link";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { mockOrders, orderStatuses, shippingValues } from "../OrderList/data";
import { ColorsType } from "@/types/uiProps";

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

const SuggestList: React.FC = () => {
  const [activeTab, setActiveTab] = useState("全部");

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
            <Th>詢問單</Th>
            <Th>建議單</Th>
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
          {mockOrders.map((order) => (
            <Tr key={order.id} $isCompleted={order.orderStatus === "已結案"}>
              <Td>
                <Link href={`/admin/orders/${order.id}`}>{order.id}</Link>
              </Td>
              <Td>
                {order.productName}
                <small>{order.productCode}</small>
              </Td>
              <Td>{order.quantity}</Td>
              <Td>{order.deliveryMethod}</Td>
              <Td>
                {order.rentalStart}
                <small>尚未回覆</small>
                {/* <small>{order.rentalEnd || "尚未回覆"}</small> */}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default SuggestList;
