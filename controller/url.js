import shortid from "shortid";
import { Url } from "../models/Url.js"

export const shorturl =async(req,res)=>{
    const longurl = req.body.longurl;
    const shortCode = shortid.generate();
    const shorturl = `http://localhost:4444/${shortCode}`
    
    const newurl = new Url({
        shortCode,longurl
    })
    await newurl.save();
   // console.log("short saved" , newurl)
    res.render("index.ejs" ,{shorturl})
    

}

export const getoriginalurl= async(req,res)=>{
    const shortCode =req.params.shortCode;

    const originallink = await Url.findOne({shortCode});
    if(originallink){
        res.redirect(originallink.longurl)
    }
    else{
        res.json({
            message: "error"
        })
    }




}