const express = require('express')
const teacherModel = require('../../Models/teacherModel')
const { sendResponse } = require('../../helper/helper')


const teacher = express.Router();

teacher.get('/', async (req, res) => {
    try {
        const result = await teacherModel.find();

        if (!result) {
            res.send(sendResponse(false, null, "No Data Found")).status(404)

        } else {
            res.send(sendResponse(true, result)).status(200)

        }
    } catch (error) {
        console.log(error);
        res.send(sendResponse(false, null, "Internal Server Error")).status(400);
    }

})
teacher.get('/:id', (req, res) => {
    console.log("Get Individual Teacher Data ");
})


teacher.post('/', async (req, res) => {
    let { name, course, contact } = req.body
    try {
        let errArr = [];
        if (!name) {
            errArr.push("Required : name ")
        }
        if (!course) {
            errArr.push("Required : course ")
        }
        if (!contact) {
            errArr.push("Required : contact ")
        }
        if (errArr.length > 0) {
            res.send(sendResponse(false, errArr, null, "Required All Fields")).status(400);
            return

        }
        else {
            let obj = { name, course, contact }
            let teacher = new teacherModel(obj)
            await teacher.save();
            if (!teacher) {
                res.send(sendResponse(false, null, "Internal Server Error")).status(400);
            } else {
                res.send(sendResponse(true, course, "Saved Successfully")).status(200);
            }
        }
    }
    catch (error) {
        console.log(error);
        res.send(sendResponse(false, null, "Internal Server Error"));
    }

})
teacher.put('/:id', async (req, res) => {
    try {
        let id = req.params.id
        let result = await teacherModel.findById(id);
        if (!result) {
            res.send(sendResponse(false, null, "No Data Found")).status(400)
        } else {
            let updateResult = await teacherModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updateResult) {
                res.send(sendResponse(false, null, "Error")).status(400)

            } else {
                res.send(sendResponse(true, updateResult, "Updated Successfully")).status(200)

            }

        }
    } catch (error) {
        res.send(sendResponse(false, null, "Error")).status(400)
    }
})
teacher.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id
        let result = await teacherModel.findById(id)
        if (!result) {
            res.send(sendResponse(false, null, "No Data On this Id ")).status(404)

        } else {
            let delResult = await teacherModel.findByIdAndDelete(id)
            if (!delResult) {
                res.send(sendResponse(true, null, "Error ")).status(404)

            }
            else {
                res.send(sendResponse(true, null, "Deleted Successfully ")).status(200)

            }
        }
    } catch (error) {
        res.send(sendResponse(false, null, "Error")).status(400)

    }
})

teacher.get('/search', async (req, res) => {
    try {
        let { firstName } = req.body
        if (firstName) {
            let result = await teacherModel.find({ firstName: firstName })
            if (!result) {
                res.send(sendResponse(false, null, "No Data Found")).status(404)
            }
            else {
                res.send(sendResponse(true, result)).status(200)
            }
        }
    } catch (error) {
        res.send(sendResponse(false, null, "Error")).status(400)

    }
})

module.exports = teacher
