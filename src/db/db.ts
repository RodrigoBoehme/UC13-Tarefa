
export type Cat={
    id:number
    nome:string
    tutor:string
    esqueci:boolean
}

export const cats:Cat[]=[]

export const delay=(ms:number)=>new Promise<void>((resolve)=>setTimeout(resolve,ms))