module.exports = {
    multipleMongooseToObject: function(mongooseArray){
        return mongooseArray = mongooseArray.map(ele => ele.toObject());
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    } 
}