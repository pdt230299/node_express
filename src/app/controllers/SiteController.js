class SiteController{
    //[GET] /news 
    index(req,res){
        res.render('home');
    }
    search(req,res){
        res.render('search');
    }
    show(req,res){
        res.send('detail');
    }

}

module.exports = new SiteController;