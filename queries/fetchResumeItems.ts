import { QueryFunctionContext } from '@tanstack/react-query';

const fetchResumeItems = async ({
  queryKey,
}: QueryFunctionContext<[string, string | null | undefined]>) => {
  const id = queryKey[1];

  const apiRes = await fetch('');

  if (!apiRes.ok) {
    throw new Error(`${id} fetch not ok`);
  }
  return apiRes.json();
};
export default fetchResumeItems;
