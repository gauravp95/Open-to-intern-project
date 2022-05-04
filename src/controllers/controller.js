// const jwt = require("jsonwebtoken");
const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");

const mongoose = require('mongoose')

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value != "string" || value.trim().length == 0) return false
    return true
} 

const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0
}
const isValidObjectId = function(objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}


// Create a college document api handler
const createCollege = async function (req, res) {
    try {
        let requestBody = req.body;
        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({status: false , msg: 'Please provide details of the college'}) 
        }

        const {name, fullName, logoLink} = requestBody;
        
        if (!isValid(name)) {
            res.status(400).send({status: false , msg : 'name sholuld be valid name' })
        }

        if (!isValid(fullName)) {
            res.status(400).send({status: false , msg : 'fullName should be valid fullname' })
        }

        if (!isValid(logoLink)) {
            res.status(400).send({status: false , msg : 'logolink should be valid url' })
        }
        const collegeData = {name, fullName,logoLink}
        const newCollege = await collegeModel.create(collegeData)
        res.status(201).send({ status: true, data: newCollege })
    } catch (error) {
        return res.status(500).send({ status: false,msg: error.msg});
    }
};

// Create a intern document api handler

const createIntern = async function (req, res) {
    try {
      let requestBody = req.body;
      const {name, email, mobile, collegeId} = requestBody
      if (!isValidRequestBody(requestBody)) {
        res.status(400).send({status: false , msg: 'Please provide details of the intern'}) 
      }
      if (!isValidObjectId(collegeId)) {
        return res.status(400).send({ status: false, msg: "Invalid Object-Id" });
      }
      if (!isValid(name)) {
        res.status(400).send({status: false , msg : 'Enter appropriate name' })
      }
      if (!isValid(mobile)) {
        res.status(400).send({status: false , msg : 'Enter appropriate mobile number  ' })
      }
      if (!isValid(email)) {
        res.status(400).send({status: false , msg : 'Enter appropriate email Id' })
      } 

      const internData = {name, email, mobile, collegeId}
      const newIntern = await internModel.create(internData);
      return res.status(201).send({ status: true, data: newIntern });
    } catch (error) {
      return res.status(500).send({ status: false, msg: error.message });
    }
  };


module.exports.createCollege = createCollege;
module.exports.createIntern = createIntern;



