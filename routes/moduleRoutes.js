const express = require('express')
const router = express.Router()
const { getModules, setModule, updateModule, deleteModule } = require('../controllers/moduleController')

router.route('/').get(getModules).post(setModule)
router.route('/:id').put(updateModule).delete(deleteModule)

module.exports = router;