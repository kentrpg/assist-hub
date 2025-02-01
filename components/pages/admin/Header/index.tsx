import { FaSort } from "react-icons/fa";
import {
  HeaderStyled,
  TabList,
  Tab,
  Badge,
  TableToolbar,
  CountGroup,
  CountLabel,
  CountSelect,
  SearchInput,
  SelectArrowIcon,
} from "./styled";
import { HeaderProps, countSelects } from "./data";

export const Header = ({ tabs, activeTab, onTabChange }: HeaderProps) => {
  return (
    <HeaderStyled>
      <TabList>
        {tabs.map((status) => (
          <Tab
            key={status.label}
            $active={activeTab === status.label}
            onClick={() => onTabChange(status.label, status.type)}
          >
            <status.icon size={16} />
            {status.label}
            {status.count && <Badge>{status.count}</Badge>}
          </Tab>
        ))}
      </TabList>
      <TableToolbar>
        <CountGroup>
          <CountLabel htmlFor="count">顯示筆數</CountLabel>
          <CountSelect id="count">
            {countSelects.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </CountSelect>
          <SelectArrowIcon>
            <FaSort size={16} />
          </SelectArrowIcon>
        </CountGroup>
        <SearchInput placeholder="搜尋..." />
      </TableToolbar>
    </HeaderStyled>
  );
};
