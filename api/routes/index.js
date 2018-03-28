var router = require('express').Router(),
    compositionController = require('../controller/composition.controller');

router.route('/process')
        .post(compositionController.process);

module.exports = router;
