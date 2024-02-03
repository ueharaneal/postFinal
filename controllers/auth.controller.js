const { authService } = require("../services");
const httpStatus = require("http-status");
const { User } = require("../models/users");


const authController = {
  async register(req, res, next) {
    console.log("got the request ");
    try {
      const { email, password } = req.body;
      console.log("got the req body ");
      const user = await authService.createUser(email, password);
      console.log(user);
      //creating a token
      const token = await authService.genAuthToken(user);
      res.cookie("x-access-token", token).status(httpStatus.CREATED).send({
        user,
        token,
      });
    } catch (error) {
      res.status(httpStatus.BAD_GATEWAY).send(error.message);
    }
  },
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.signInWithEmailAndPassword(email, password);
      //gen token and send response
      const token = await authService.genAuthToken(user);
      res.cookie("x-access-token", token).send({
        user,
        token,
      });
    } catch (error) {
      res.status(httpStatus.BAD_GATEWAY).send(error.message);
    }
  },
};

module.exports = authController;
