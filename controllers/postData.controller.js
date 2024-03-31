const {postDataService} = require("../services");
const httpStatus = require("http-status");

const postDataController = {
  async selectPost(req, res, next) {
    //retrieve all post names in array
    try {
      const allPost= await postDataService.retrievePostNames();
      res.status(httpStatus.OK).send(allPost);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
  },

  async getAccessCodes(req,res,next){
    try{
      const accessCodes = postDataService.generateAccessCodes(req.body)
      return accessCodes
    }catch(error){
      res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
  }
};

module.exports = postDataController;
