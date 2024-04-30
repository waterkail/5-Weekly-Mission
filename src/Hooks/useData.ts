import { useCallback, useState } from "react";

export function useData(
  asyncFunction: (pram?: string) => Promise<any>,
  value?: string
) {
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    try {
      const result = await asyncFunction(value);
      setData(result);
    } catch (err) {
      console.log(err);
      setData(null);
    }
  }, [asyncFunction, value]);

  return [data, getData];
}
