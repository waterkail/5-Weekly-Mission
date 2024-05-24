import { useCallback, useState } from "react";

type Pram = (number | string | undefined)[];

export function useData(asyncFunction: (...pram: Pram) => Promise<any>) {
  const [data, setData] = useState<any>(null);

  const getData = useCallback(
    async (...value: Pram) => {
      try {
        const result = await asyncFunction(...value);
        setData(result);
      } catch (err) {
        setData(null);
      }
    },
    [asyncFunction]
  );

  const returnArray: [any, (...value: Pram) => Promise<void>] = [data, getData];

  return returnArray;
}
