const { ObjectId } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;

let dbName = "myGame";
let connectionString = "mongodb://localhost:27017";
const getDb = async () => {
 let connection = await MongoClient.connect(connectionString);
 let db = connection.db(dbName);
 return db;
};

const getCollection = async (name) => {
    let db = await getDb();
    let collection = db.collection(name);
    return collection;
   };

   const createDocument = async () => {
       let collection = await getCollection('people')
       let result = await collection.insertOne({ name: 'Luke', age: 33})
       console.log(result)
   }
const createPerson = async () => {
    let peopleCollection = await getCollection("people");
    let result = await peopleCollection.insertOne({ name: 'Luke', age: 89})
    console.log(result)
}
   const findPersonByName = async (name) => {
       let peopleCollection = await getCollection("people");
       let person = await peopleCollection.findOne({ name: name});
       console.log("person iss", person)
   }

   const findPersonByID  = async (id) => {
    let peopleCollection = await getCollection("people");
    let person = await peopleCollection.findOne({ _id: ObjectId(id)});
    console.log("person iss person by id", person)
}

const updatePersonByID = async (id, newPersonData) => {
    let peopleCollection = await getCollection("people");
    let updated = await peopleCollection.updateOne({ _id: ObjectId(id)}, {$set: newPersonData});
    console.log("updated", updated)

const deletePersonById = async (id) => {
    let peopleCollection = await getCollection("people");
    let deletedPerson = await peopleCollection.deleteOne({ _id: ObjectId(id)});
    console.log("person iss deleted", person)
}

 //  const getCollection 

  // findPersonByID("622fa8fa290b18555694124a")
//findPersonByName(Luke)
  // createDocument()

   }
  // updatePersonByID("622fa8fa290b18555694124a", {name: "Bob"})
  // createPerson("luke", 33)
  // deletePersonById(622fa8fa290b18555694124a)