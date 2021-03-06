var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	User = require('./user.model'),
	Pad = require('./pad.model');

var PaymentScheme = new Schema({
	//a user's share of the payment
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	ratio: {
		type: Number,
		required: true
	}
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
PaymentScheme.plugin(deepPopulate);

module.exports = mongoose.model('PaymentScheme', PaymentScheme);
