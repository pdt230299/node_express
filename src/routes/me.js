const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
// thằng trên sẽ phục vụ yêu cầu cho thằng ở bên dưới
router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);


module.exports = router;