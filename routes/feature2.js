var express = require('express');
var router = express.Router();
var multer = require('multer');
var Feature2 = require('../helpers/feature2Model');
var DbFileHelper = require('../helpers/DbFileHelper');

/* GET users listing. */
router.post('/', multer({ dest: './uploads/' }).single('upload_file'), function (req, res, next) {
    if (req.body.textdata && req.file) {
        var newFeature = new Feature2({ text: req.body.textdata });
        newFeature.save(function (err, feature) {
            if (err) console.error(err);
            var dbDetails = {
                id: feature.id,
                bucket: 'feature2bucket'
            };
            DbFileHelper.saveFile(dbDetails, req.file, req.db);
        });
        res.send('Your data has been saved');
    } else {
        res.send('Please input both form elements.');
    }
});

module.exports = router;