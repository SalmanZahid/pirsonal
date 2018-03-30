var router = require('express').Router(),
    compositionController = require('../controller/composition.controller');

router.route('/')
        .post(compositionController.process);

module.exports = router;