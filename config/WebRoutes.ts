import { startupRoutes, userRoutes } from "@/config/NavRoutes";

type DynamicRoute = (id: string) => string;

export interface IRoute {
  create: string;
  edit: DynamicRoute;
  delete: DynamicRoute;
}

export interface IUserRoutes {
  profile: DynamicRoute;
}

export interface IRoutes {
  startup: IRoute;
  user: IUserRoutes;
}

const WebRoutes: IRoutes = {
  startup: startupRoutes,
  user: userRoutes,
};

export default WebRoutes;
