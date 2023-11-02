import { useEffect, useState } from "react";

const useRequest = <T>(request: () => Promise<T>): [boolean, T | undefined] => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(undefined); // clear the data from any previous runs
      const result = await request();
      setData(result.data); // store the new data
      setIsLoading(false); // clear the loading state
    };

    void fetchData();
  });

  return [isLoading, data];
};
