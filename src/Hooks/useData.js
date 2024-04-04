import { useState } from 'react';

export function useData(asyncFunction) {
  const [Data, setData] = useState(null);

  async function getData(value = null) {
    try {
      const result = await asyncFunction(value);
      setData(result);
    } catch (err) {
      console.log(err);
      setData(null);
    }
  }

  return [Data, getData];
}
