import { Cat,cats,delay } from "../db/db";

export const CatServiceAsync={
    async listar():Promise<Cat[]>{
        await delay(400)
        return cats
    },
    async buscarPorId(id:number):Promise<Cat>{
        await delay(400)

        const gato=cats.find((u)=>u.id===id)
        if(!gato)throw new Error("Gato não encontrado")
        return gato
    },
    async criar(nome:string,tutor:string):Promise<Cat>{
        await delay(400)
        if(!nome||nome.trim().length<3)throw new Error("O nome é invalido")
        if(!tutor||tutor.trim().length<3)throw new Error("O Tutor é invalido")
        
        const novoId=cats.length?cats[cats.length-1].id+1:1;

        const novo:Cat={id:novoId,nome,tutor,esqueci:true}
        cats.push(novo)
        return novo
    }
}