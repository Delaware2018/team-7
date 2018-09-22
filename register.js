var fs = require('fs');
var json2csv = require('json2csv');

//automate this
var fields = ["username","password","married"]
var answers =["catherinelee2","ilikefood","yes"]



var addThis = [
  {
    for(int i = 0; i < fields.length; i++)
    {
      fields[i]:answers[i];
    }
  }
];

var toCSV = {
  data: addThis,
  fields:fields,
  hasCSVColumnTitle: true;
};

fs.stat('file.csv', function (err, stat) {
    if (err == null) {
        console.log('File exists');

        //write the actual data and end with newline
        var csv = json2csv(toCsv) + newLine;

        fs.appendFile('file.csv', csv, function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    }
    else {
        //write the headers and newline
        console.log('New file, just writing headers');
        fields= (fields + newLine);

        fs.writeFile('file.csv', fields, function (err, stat) {
            if (err) throw err;
            console.log('file saved');
        });
    }
});
