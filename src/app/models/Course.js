const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');// tạo slug
mongoose.plugin(slug);

const Course = new Schema({
  name: { type:String,required: true },
  description: { type:String,  },
  image: { type:String,  },
  videoId: { type:String,required: true  },
  level: { type:String,  },
  slug: { type: String, slug: 'name',unique: true }
},{ 
  timestamps:true,
});

module.exports = mongoose.model('courses',Course);