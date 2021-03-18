const express = require('express')
const router = express.Router()

const StuffController = require('../controllers/StuffController')

//show all stuff
router.get('/', StuffController.index);
//create stuff
router.post('/', StuffController.store);
//fine one stuff by stuff_id
router.get('/:stuff_id', StuffController.show);
//update stuff
router.put('/:stuff_id/update', StuffController.update);
//delete stuff
router.delete('/:stuff_id/destroy', StuffController.destroy);

module.exports = router;