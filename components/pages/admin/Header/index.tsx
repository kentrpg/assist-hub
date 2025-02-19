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

export const Header = ({ tabs, activeTab, onTabChange, iconMapping, onChangeSelect }: HeaderProps) => {
  return (
    <HeaderStyled>
      <TabList>
        {Object.keys(tabs).map((status) => {
          const Icon = iconMapping[status];
          return (
            <Tab
              key={status}
              $active={activeTab === status}
              onClick={() => onTabChange(status)}
            >
              {Icon && <Icon size={16} />}
              {status}
              {tabs[status].count && <Badge>{tabs[status].count}</Badge>}
            </Tab>
          );
        })}
      </TabList>
      <TableToolbar>
        <CountGroup>
          <CountLabel htmlFor="count">顯示筆數</CountLabel>
          <CountSelect id="count" onChange={onChangeSelect}>
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
