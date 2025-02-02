import { useRef, useState } from "react";

type DropdownState<T> = {
  statuses: { [key: string]: string };
  openDropdown: string | null;
  dropdownRef: React.RefObject<HTMLDivElement>;
  setStatuses: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  toggleDropdown: (id: string) => void;
};

export const useDropdownState = (
  initialData: { [key: string]: any }[],
  statusKey: string,
): DropdownState<typeof initialData> => {
  // 初始化狀態
  const [statuses, setStatuses] = useState<{ [key: string]: string }>(
    initialData.reduce(
      (acc, item) => ({
        ...acc,
        [item.orderId]: item[statusKey] || "",
      }),
      {},
    ),
  );

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 切換下拉選單的函數
  const toggleDropdown = (id: string) => {
    setOpenDropdown((prevDropdown) => {
      return prevDropdown === id ? null : id;
    });
  };

  return {
    statuses,
    openDropdown,
    dropdownRef,
    setStatuses,
    setOpenDropdown,
    toggleDropdown,
  };
};
