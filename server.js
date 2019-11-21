var http = require('http');
var url = require('url');
var fs = require('fs');

// Creating a new server
var svr = http.createServer( function (request, response) {
var path = url.parse(request.url).pathname; //Parse the url
var directory = "C:\Users\evan_\github\F28WP-Coursework"; // Directory path
var mimetype = "text/plain"; //Default MIME type, is changed using switch case
var i = path.lastIndexOf(".");
if ( i != -1 )
switch ( path.substring(i) ) { //Switch MIME type based on file extension
case ".css": mimetype = "text/css"; break;
case ".html": mimetype = "text/html"; break;
case ".jpg": mimetype = "image/jpg"; break;
case ".js": mimetype = "text/javascript"; break;
case ".png": mimetype = "image/png"; break;
case ".xhtml": mimetype = "application/xhtml+xml"; break;
case ".xml": mimetype = "text/xml"; break;
default: i = -1; //Exit case and if statement if it is an unknown file type
}

fs.readFile(directory + path, function (err, data) { //Create path my adding directory and path name
var code = 404; //Default code, changed if file is found
if ( err ) { //If the file is not found
mimetype = "text/plain";
data = "file not found";
} else if ( i == -1 ) { //If it is of an unknown type
data = "invalid path";
} else code = 200;
response.writeHead( code, {'Content-Type': mimetype} );
response.write( data ); //Otherwise write the data
response.end();
});
});
svr.on('error', function(err) {console.log('Server: ' + err);});
svr.listen(8080, function() {console.log('Listening on port 8080');});