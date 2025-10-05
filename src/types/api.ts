export interface IResponse<Entity> {
  isError: boolean;
  data?: Entity;
};

export type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};
