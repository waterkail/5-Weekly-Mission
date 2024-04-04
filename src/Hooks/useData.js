import { useState } from 'react';

export function useData(asyncFunction) {
  const [Data, setData] = useState(null);

  async function getData(value = null) {
    const result = await asyncFunction(value);
    setData(result);
  }

  return [Data, getData];
}
