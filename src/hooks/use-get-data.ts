import { useLazyQuery, useQuery, DocumentNode } from '@apollo/client';

export const useGetData = (QUERY: DocumentNode) => {
  const { data, loading, error } = useQuery(QUERY);

  return [data, loading, error] as const;
};

export const useGetDataParameter = (QUERY: DocumentNode) => {
  const [getData, result] = useLazyQuery(QUERY);

  return [getData, result] as const;
};
