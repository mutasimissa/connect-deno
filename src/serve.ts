import { Connect } from "../deps.ts";
import { router } from "./router.ts";
export async function serve() {
  await Connect.Server({
    middlewares: Connect.Mwares.Default(),
    routers: [...Connect.Routers.Default(), Connect.Routers.Rest(router)],
  });
}
