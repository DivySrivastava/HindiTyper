var express = require("express");
var router = express.Router();

router.post('/save',(req, res, next) => {
	console.log(req.body);
	
	// Do something with the results.
})

module.exports = router;