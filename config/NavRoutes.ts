import { IRoute, IUserRoutes } from "@/config/WebRoutes";

const BASE_STARTUP = '/startup';
const BASE_USER = '/user';

export const startupRoutes: IRoute = {
  create: `${ BASE_STARTUP }/create`,
  edit: (id: string) => `${ BASE_STARTUP }/${ id }/edit`,
  delete: (id: string) => `${ BASE_STARTUP }/${ id }/delete`,
};

export const userRoutes: IUserRoutes = {
  profile: (id: string) => `${ BASE_USER }/${ id }`,
};