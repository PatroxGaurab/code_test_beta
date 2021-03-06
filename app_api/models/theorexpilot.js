var mongoose = require( 'mongoose' );

var theorexpilotSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  organizationAddress: {
    type: String,
    required: true
  },
  organizationPostalCode: {
    type: String,
    required: true
  },
  organizationCity: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  leadership: {
    type: String,
    required: true
  },
  joiningReason: {
    type: String,
    required: true
  },
  links: {
    type: String,
    required: true
  },
});


mongoose.model('TheorexPilot', theorexpilotSchema);
