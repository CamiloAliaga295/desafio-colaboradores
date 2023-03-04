export const getId = ()=>{

    const random = Math.random().toString(33).substr(6)
    const fecha = Date.now().toString(33)
    return fecha+random

}