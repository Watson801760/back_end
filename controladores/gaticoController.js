import { request, response } from "express";
import mongoose  from "mongoose";
import GaticoSchema from "../modelos/gaticoModel.js";

const Gatico = mongoose.model('Gatico',GaticoSchema)

export const addGatico = function(request, response){
    console.log("request:"+request.content)
    let p =  new Gatico(request.body)
    console.log("body"+p)
    p.save((error, p)=>{
        if(error){
            response.send(error)
        }else{
            response.json(p)
        }
    })
}

export const getGaticos = (request, response)  =>{
    Gatico.find({},(error, gaticos)=>{
            if(error){
                 response.send(error)
            }else{
                response.json(gaticos)
            }
    }) 
}

export const getGaticoById = (request, response) =>{
    Gatico.findById(request.params.gaticoid , (error, gatico)=>{
    if(error){
        response.send(error)
   }else{
       response.json(gatico)
   }
})
}

export const updateGatico = (request, response) =>{
    Gatico.findOneAndUpdate(
    {_id : request.params.gaticoid},
    request.body,
    {
    new:true
    },
    (error , gatico) =>{
        if(error){
            response.send(error)
       }else{
           response.json(gatico)
       }
    })
}

export const deleteGatico  = (request, response) =>{
    Gatico.remove({_id : request.params.gaticoid },
    (error, gatico)=>{
        if(error){
            response.send(error)
       }else{
           response.json({mensaje : "borrado exitoso"})
       }
    }  
    )
}