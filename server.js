var express = require('express');
var WPAPI = require('wpapi');

var app = express();
var apiRouter = express.Router();


var wp = new WPAPI({
    endpoint: 'http://jondi.fr/wp-json'
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//Join two collection
apiRouter.get('/join', function (req, res) {
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection('customers').aggregate([
          { $lookup:
             {
               from: "test",
               localField: "featured_media",
               foreignField: "idmedia",
               as: "details"
             }
           }
          ]).toArray(function(err, res) {
          if (err) throw err;
          console.log(JSON.stringify(res));

          /*dbo.collection("new").insertMany(res, function (err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            //res.json(res);
          });*/

          db.close();
        });
      });
});



//etc
apiRouter.get('/image', function (req, res) {
	MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").find({}, {projection: { _id: 0, featured_media: 1 } }).toArray(function(err, result) {
          if (err) throw err;
          //console.log(result);
          res.json(result); 
          
          for (var i in result){

            Object.keys(result[i]).forEach(function(key){
                var Idimage = JSON.stringify(result[i][key]);
                wp.media().id(Idimage).get(function( err, data ) {
                    if ( err ) {
                        console.log('err');
                    }
                    var tmp = "featured_media:" + Idimage + ", imagelien:\"" + data.guid.rendered + "\"";
                    var string = "{" + tmp + "}";
                    //var str = JSON.stringify(string);
                    //var obj = JSON.parse(str);
                    //var o = [obj];
                    //console.log(Idimage);
                    //console.log(data.guid.rendered);
                    console.log(string);
                });
            });
          }
        db.close();
        });

    });

});


 // Insert data
apiRouter.get('/add/:id', function (req, res) {
	 MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        
    	if (err) throw err;
        	var dbo = db.db("mydb");
        	dbo.createCollection("customers", function (err, res) {
            	if (err) throw err;
            	console.log("Collection created!");
    	});


    	wp.posts().page(req.params.id).get(function( err, data ) {
        	if ( err ) {
            	console.log('err');
        	}
            // do something with the returned posts
            console.log(typeof data);
        	dbo.collection("customers").insertMany(data, function (err, res) {
            	if (err) throw err;
            	console.log("Number of documents inserted: " + res.insertedCount);
            	db.close();
        	});
    	});
 	});

});


//Find Mongo image
apiRouter.get('/getimage', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("test").find({} ).toArray(function(err, result) {
          if (err) throw err;
          //console.log(result);
          res.json(result);
          db.close();
        });
      });
});



//Find Mongo categories 28
apiRouter.get('/gallery/c28', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { categories: 28 };
            dbo.collection("customers").find(query).toArray(function(err, result) {
            if (err) throw err;
                //console.log(result);
                res.json(result);
                db.close();
            });
    });
});


//Find Mongo categories 75
apiRouter.get('/gallery/c75', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { categories: 75 };
            dbo.collection("customers").find(query).toArray(function(err, result) {
            if (err) throw err;
                //console.log(result);
                res.json(result);
                db.close();
            });
    });
});


//Find Mongo categories 74
apiRouter.get('/gallery/c74', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { categories: 74 };
            dbo.collection("customers").find(query).toArray(function(err, result) {
            if (err) throw err;
                //console.log(result);
                res.json(result);
                db.close();
            });
    });
});


//Find Mongo
apiRouter.get('/gallery', function (req, res) {

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").find({}).toArray(function(err, result) {
          if (err) throw err;
          //console.log(result);
          res.json(result);
          db.close();
        });
      });
});


//Delete Mongo
apiRouter.delete('/gallery/:recordID', function (req, res) {

    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").drop(function (err, delOK) {
            if (err) throw err;
            if (delOK) console.log("Collection deleted");
            db.close();
        });
    });
});


apiRouter.get('/', function (req, res) {
    res.send('Welcome to Peng server API!!!!');
});

app.use('/api', apiRouter);

app.get('/', function (req, res) {
    res.send('Welcome to Peng server!!!!');
});

app.listen(3000);
console.log('listening to port 3000');
