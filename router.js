/**
 * Created by apple on 7/29/16.
 */
module.exports = function(app){
    app.get('/',function(req,res,next){
        res.send(['waterbottle','phone','paper'])
    })


}