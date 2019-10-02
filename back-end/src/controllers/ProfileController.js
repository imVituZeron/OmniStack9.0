const Spot = require('../models/Spot');

module.exports = {
   //index
   //show
   async show(req, res){
      const { user_id } = req.headers;

      const spots = await Spot.find({ user: user_id });

      return res.json(spots);
   }
   //store
   //update
   //destroy
}