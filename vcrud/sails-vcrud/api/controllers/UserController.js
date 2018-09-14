/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  async create(req,res){
    try{
      let user = await User.create(req.body.user);
      return res.ok({user});
    } catch(error){
      return res.badRequest(error);
    }
  },
  async find(req, res) {
    try{
      let user = await User.find();
      return res.ok({user});
    }catch(error){
      return res.badRequest(error);
    }
  },
  async findOne(req, res) {
    try {
      let user = await User.find(req.params.id);
      return res.ok({
        user
      });
    } catch (error) {
      return res.badRequest(error);
    }
  }

};

