import { FaSort } from "react-icons/fa";
import { orderStatuses } from "../OrderList/data";
import {
  CountGroup,
  CountLabel,
  CountSelect,
  SelectArrowIcon,
} from "../OrderList/styled";
import { SearchInput } from "../SideBar/styled";
import { Container, Header, TabList, Tab, Badge, TableToolbar } from "./styled";
import { useState } from "react";

const SuggestList: React.FC = () => {
  const [activeTab, setActiveTab] = useState("全部");

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
        <TableToolbar>
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
        </TableToolbar>
      </Header>
    </Container>
  );
};

export default SuggestList;
