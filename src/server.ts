import app from "./app";
import {env} from "./env";

const server = app.listen(env.PORT, () => {
  console.log(`This is running on port ${env.PORT}`);
});

export default server;
