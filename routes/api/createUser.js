const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../../schema/user.js');

//config .env
require('dotenv').config();
mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
	if(err) return console.error(err);
	console.log('connected to DB');
});

router.post('/', (req, res) => {
	res.send('api/user');
});

router.post('/register', async (req, res) => {
	const user = new User({
		name: req.body.name,
		password: req.body.password,
		email: req.body.email
	});
	try{
		const savedUser = await user.save();
		res.sned(savedUser);
	}catch(e){
		res.status(400).send(e);
	}
});

module.exports = router;
