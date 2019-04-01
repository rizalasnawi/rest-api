const router = require('express').Router();
const UserController = require('../controller/usercontroller');
const {Authentication} = require('../middleware/authentication');
const {Admin, User}  = require('../middleware/authorization');


router.post('/api/signup', UserController.signup);
router.post('/api/signin', UserController.signin);

// router.use('/api/users', Authentication);

router.get('/api/users', Authentication ,  Admin, UserController.findAll);
router.get('/api/users/:id', Authentication, User, Admin, UserController.findOne);
router.post('/api/users', Authentication,  Admin, UserController.createUser);
router.delete('/api/users/:id', Authentication, User, Admin, UserController.deleteUser);
router.put('/api/users/:id', Authentication, User, Admin, UserController.updateUser);



module.exports = router;