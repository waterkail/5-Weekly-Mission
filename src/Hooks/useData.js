import { useState } from 'react';

export function useData(asyncFunction, value = '') {
  const [Data, setData] = useState(null);

  async function getData() {
    const result = await asyncFunction(value);
    setData(result);
  }

  return [Data, getData];
}
