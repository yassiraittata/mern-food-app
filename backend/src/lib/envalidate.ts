import dotenv from "dotenv";
import { cleanEnv, port, str } from "envalid";
dotenv.config();

const env = cleanEnv(process.env, {
  PORT: port(),
  MONGO_URI: str(),
  JWT_SECRET: str(),
});

export default env;
