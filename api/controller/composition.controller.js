var extractor = require('../../lib/tools');
var defaultComposition = require('../../constants').defaultComposition;

module.exports.process = (req, res) => {
    var content = req.body.content;
    var result = extractor.extractMedia(content || defaultComposition);
    return res.status(200).json(result);
};