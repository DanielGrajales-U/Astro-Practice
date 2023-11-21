import { type CharactersType } from "../types/api"
const getCharacaters = async () => {
    try{
        const res = await fetch('https://rickandmortyapi.com/api/character/?page=1')
        const data = await res.json()
        
        return data.results
    }catch(err){
        console.log(err)
    }

}

export default getCharacaters