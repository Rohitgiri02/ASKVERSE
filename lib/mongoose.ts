import mongoose from "mongoose";
let isconnected:boolean = false;
export const connectdatabase = async () =>{
    mongoose.set("strictQuery",true);
    if(!process.env.MONGODB_URL) return console.log("no mongodb url");
    if(isconnected){
        return console.log("mongodb is connected")
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL,{dbName:'askverse'})
        isconnected = true;
        console.log("database connected")
    }
    catch(error){
        console.log(error)
    };
    
}