const express = require("express")
const  Controller = require("../controller/empController")
const bodyParser = require("body-parser")




var router = express()

router.use(bodyParser.json())

router.post('/create',Controller.create)
router.get('/users',Controller.read)
router.put('/update/:id',Controller.update)
router.delete('/delete/:id',Controller.deleteEmp)


module.exports = router