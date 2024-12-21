import './style.css'
import { Client, Databases } from 'appwrite'

const client = new Client()

const DATABASE_ID = '6766f909001a3e3c4615'
const COLLECTION_ID_TASKS = '6766f928002b3e63eaae'

client
    //.setEndpoint('http://cloud.appwrite.io/v1'); // Your API Endpoint
    .setProject('6766e04d000527af0cf9')

const db = new Databases(client);

async function getTasks(){
  const response = await db.listDocuments(
    DATABASE_ID, 
    COLLECTION_ID_TASKS 
    )
  console.log(response)
}

getTasks()
