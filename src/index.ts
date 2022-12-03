import express from 'express';
import { UserController } from './controllers/user-controller';

const app = express();
const port = config.port;

const userController = new UserController();

app.get("/", userController.execute.bind(userController));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
