exports.editPdf = function (requestjson) {
    var child = require('child_process').spawn(
        'java', ['-jar', 'lib/pdfedit.jar', [requestjson.pdfLocation,requestjson.imageLocation,requestjson.X,requestjson.Y,requestjson.scale]]
    );
    child.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    child.stderr.on("data", function (data) {
        console.log(data.toString());
    });
}