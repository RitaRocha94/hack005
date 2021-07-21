const { MongoClient, ObjectId } = require("mongodb")
const URI = "mongodb://localhost:27017"
const DB_NAME = "Hack05"
let client;

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

async function insertDonation(values){

let alimentos = getDonationsObject(values.alimentos)
const donation = {
    alimentos: alimentos,
    freguesias: values.freguesias,
    rua: values.rua
}
 const collection  = await getCollection(DB_NAME, "Donations")
 const result = await collection.insertOne(donation)
 console.log(result.insertedId)

 return result
}

function getDonationsObject(alimentos){
    let array = []
    for(let i = 0; i < alimentos.length; i++){
        let object = {
            name: alimentos[i].name,
            number: alimentos[i].number
        }
        array.push(object)
    }
    return array
}

async function deleteDonation(id){
    const collection = await getCollection(DB_NAME, "Donations")
    const result = collection.deleteOne({_id: ObjectId(id) })
    console.log('A apagar a doação....')
    return res.result.ok === 1;
}

async function findDonation(location){
   const collection = await getCollection(DB_NAME, "Donations")
   const result = collection.find({location: location.freguesias}).toArray()
   console.log(result)
   return result 
}

module.exports={
    insertDonation,
    deleteDonation,
    findDonation
}
