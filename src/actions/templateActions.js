
//this is an aciton creator and it return an obj{}
export const increment = (data) => {
    

    return {
        type: "INCREMENET",
        data: data
    }
}

//this is not a name export. When we import out componentn we have to import {increment} from '/.path'