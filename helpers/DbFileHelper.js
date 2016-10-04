var mongoose = require('mongoose');

var fs = require('fs');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;

var DbFileHelper = {};

DbFileHelper.saveFile = function (dbDetails, localfile, conn) {
    console.log('open');
    var gfs = Grid(conn.db);

    // streaming to gridfs
    //filename to store in mongodb
    var writestream = gfs.createWriteStream({
        _id: dbDetails.id,
        filename: localfile.filename,
        mode: 'w',
        content_type: localfile.mimetype,
        root: dbDetails.bucket
    });
    fs.createReadStream(localfile.path).pipe(writestream);

    writestream.on('close', function (file) {
        // do something with `file`
        console.log(file.filename + 'Written To DB');
        fs.unlinkSync(localfile.path);
    });
}

module.exports = DbFileHelper;