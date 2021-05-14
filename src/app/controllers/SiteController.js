const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController{
    //[GET] /news 
    index(req,res,next){
        Course.find({})
        .then(courses=>{
            res.render('home',{
                courses: multipleMongooseToObject(courses)
            });//cùng nghĩa {courses:courses} 
        })
        .catch(next);
        
    }
    search(req,res){
        res.render('search');
    }
    show(req,res){
        res.send('detail');
    }

}

module.exports = new SiteController;