const { Router} = require('express');
const { showWorks, createWorks, updateWorks, deleteWorks, getWorksById } = require('../controllers/work.controllers');
const router = Router();



router.get('/', showWorks);
router.get('/:id', getWorksById);
router.post('/new', createWorks);
router.put('/:id', updateWorks);
router.delete('/:id', deleteWorks);


module.exports = router;