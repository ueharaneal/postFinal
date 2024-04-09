const { authService, emailService } = require("../services/index");
const httpStatus = require("http-status");

const authController = {
  async register(req, res, next) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await authService.createUser(firstName, lastName, email, password);
      const token = authService.genAuthToken(user);

      //Send Verification Email
      await emailService.registerEmail(email, user);
      res
        .status(httpStatus.OK)
        .cookie("x-access-token", token)
        .send({ user, token });
    } catch (error) {
      next(error);
    }
  },
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.signInWithEmailAndPassword(
        email,
        password
      );
      const token = await authService.genAuthToken(user);

      res.cookie("x-access-token", token).send({ user, token });
    } catch (error) {
      //res.status(httpStatus.BAD_REQUEST).send(error.message);
      next(error);
    }
  },
  async isauth(req, res, next) {
    res.json(req.user);
  },

  //   async testrole(req, res, next) {
  //     res.json(req.user);
  //   },
};

//controller that calls service.
module.exports = authController;
