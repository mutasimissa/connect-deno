import { Connect } from "../deps.ts";
import { hello } from "./Controllers/mod.ts";
const router = new Connect.Routers.Router();

router.get("/hello", hello);

export { router };
