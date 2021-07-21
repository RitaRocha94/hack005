const { ObjectId } = require("mongodb")

const URI = "mongodb://localhost:27017"
const DB_NAME = "Hack05"

async function connect(uri){
    try{
        if(client) return client
        client = new MongoClient(uri,{
            useUnifiedTopology: true
        })
        await client.connect()
        return client
    } catch (err){
        console.log('[ERRO: ' + err)
    }
}

async function getCollection(dbName, collectionName){
    const client = await connect(URI)
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    return collection;
}

async function insertDonation(food, location, route){
 const collection  = await getCollection(DB_NAME, "Donations")
 const result = collection.insertOne(food, location, route)
 console.log(result.insertedId)

 return result
}

async function deleteDonation(id){
    const collection = await getCollection(DB_NAME, "Donations")
    const result = collection.deleteOne({_id: ObjectId(id) })
    console.log('A apagar a doação....')
    return res.result.ok === 1;
}

async function findDonation(location){
   const collection = await getCollection(DB_NAME, "Donations")
   const result = collection.find({location: location}).toArray()
   console.log(result)
   return result 
}

module.exports={
    insertDonation,
    deleteDonation,
    findDonation
}
