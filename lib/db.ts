export const config = {
   runtime: 'nodejs',
 };
 
import mongoose from 'mongoose'

const connectDB = async () =>{

 try {

   
    await mongoose.connect(process.env.MONGO_URI!)
    
    console.log(`successfully connected to mongoDb `)

 }catch(error:any){

    console.error(`Error:${error.message}`)
    process.exit(1)
 }

}

 



export default connectDB;