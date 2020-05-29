const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  slug: {
    type: "String"
   
  },
  ios: {
    primary: {
      type: "String",
      required: true
    },
    fallback: {
      type: "String",
      required: true
    },
    required: true
  },
  android: {
    primary: {
      type: "String",
      required: true
    },
    fallback: {
      type: "String",
      required: true
    },
    required: true
  },

  web: {
    type: "String",
    required: true
  }
});

module.exports = Link = mongoose.model("links",linkSchema)
