const router = require("express").Router()

//service router
const servicesRouter = require("./service");

router.use("/", servicesRouter);

//party router
const partiesRouter = require("./parties");

router.use("/", partiesRouter);

module.exports = router;