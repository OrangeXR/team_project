const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
//const url = "mongodb+srv://youngWeb:noPassword@cluster1.mgns3ic.mongodb.net/?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

const url = "mongodb+srv://TAMUSAwad:DBpassword1@webapplicationdevelopme.la1fec2.mongodb.net/?retryWrites=true&w=majority";

//mongodb+srv://TAMUSAwad:DBpassword1@webapplicationdevelopme.la1fec2.mongodb.net/?retryWrites=true&w=majority
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "finalProject";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "violation"
         const col = db.collection("violation");

         // Construct a document                                                                                                                                                              
         // let personDocument = {
         //     "name": { "first": "Alan", "last": "Turing" },
         //     "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
         //     "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
         //     "contribs": [ "Turing machine", "Turing test", "Turingery" ],
         //     "views": 1250000
         // }

         let violationDocument = {
            "state": "California",
            "platenumber": "1111111", // May 23, 1912                                                                                                                                 
            "date": new Date(),  // May 7, 1954                                                                                                                                  
            "location": " 111 demo st., San Antonio, TX",
            "violationtype": "parked in handicap space"
        }



         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(violationDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
