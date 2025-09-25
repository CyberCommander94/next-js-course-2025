export interface IResponse<Entity> {
  isError: boolean;
  data?: Entity;
};
