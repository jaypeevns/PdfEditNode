// this is how we will require our module
var pdfedit = require('./pdfedit');
var jsonl={
            "pdfLocation": "DNV GL Certificate.pdf",
            "imageLocation": "QRCode.png",
            "X": "58",
            "Y": "70",
            "scale":"0.18"
            }
pdfedit.editPdf(jsonl);

