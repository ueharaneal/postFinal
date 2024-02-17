const {userServices}  = require('../services/user.service')
const httpStatus = require('http-status')

const userController = {
    async getUsersNames(req,res,next){
        try{
            const userNames = await userServices.getUsersNames();
            res.status(httpStatus.OK).send(userNames)
        }catch(error){
            res.status(httpStatus.BAD_REQUEST).send(error.message)
        }
    }
}

module.exports = userController