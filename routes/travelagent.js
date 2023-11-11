const exprees = require('express');
const router = exprees.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});  






module.exports = router;