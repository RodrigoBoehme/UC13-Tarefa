import { Request, Response } from "express";

import { CatServiceAsync } from "../services/cat.service";

export const CatControllerAsync={
    async listar(req:Request,res:Response){
        try {
            const lista=await CatServiceAsync.listar()
            return res.json(lista)
        } catch (error:any) {
            return res.status(500).json({erro:error.message})            
        }
    },
    async buscar(req:Request,res:Response){
        try {
            const id=Number(req.params.id)
            const gato=await CatServiceAsync.buscarPorId(id)
            return res.json(gato)
        } catch (error:any) {
            return res.status(404).json({erro:error.message})
        }
    },
    async criar(req:Request,res:Response){
        try {
            const {nome,tutor}=req.body
            const novo=await CatServiceAsync.criar(nome,tutor)
            return res.status(201).json(novo)
        } catch (error:any) {
            return res.status(400).json({erro:error.message})
        }
    }
}