const { userService } = require("../services");
const httpStatus = require("http-status");

const userController = {
  async getUsersNames(req, res, next) {
    try {
      const userNames = await userService.getUsersNames();
      console.log("getUsersName got called");
      res.status(httpStatus.OK).send(userNames);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
  },
};

module.exports = userController;
