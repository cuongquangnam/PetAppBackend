
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var vendorLocation = new Schema(
  {
    name:String,
    type:String,
    address:String,
    postal_code: Number,
    tel_office_1:Number,
    tel_office_2:Object,
    fax_office: String,
    vendorId: String,
    },{
  collection: 'vendorLocation'
});

module.exports = mongoose.model('vendorLocation', vendorLocation);
