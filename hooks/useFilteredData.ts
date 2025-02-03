import { useMemo } from "react";

type DataRecord<T> = {
  data: T[];
  count: number;
};

export const useFilteredData = <T>(
  data: Record<string, DataRecord<T>>,
  activeTab: string,
) => {
  return useMemo(() => {
    return data[activeTab]?.data || [];
  }, [data, activeTab]);
};
