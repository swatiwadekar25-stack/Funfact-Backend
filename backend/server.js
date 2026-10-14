import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config()
// app.use(cors())
const app=express()
app.use(express.json())
app.use(express.static("../frontend"))
const ai =new GoogleGenAI({
    apiKey:process.env.API
})

app.get("/fun-fact",async(req,res)=>{
    try{
        const response =await ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents:"Give me short, intresting and suprising fun fact.Return only the fact"
        })
        const fact =response.text
        res.json({
            fact:fact
        })
    }
    catch(error){
        console.log(error)
         
        res.status(500).json({
            error:"something went wrong"
        })
    }
});
app.listen(5000,()=>{
    console.log("serever running on port 5000")
})
