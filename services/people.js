import { getPeople } from "../utils/api.js";
import { findBy } from "../utils/dataProcess.js";
import { readFrom } from "../utils/readWriteJson.js";


export function SearchByName(name){
   readFrom("../data/PEOPLE.json", (err,people) => {
    if (err) {
        console.log(err);
        return;
    }
    const listPeople = findBy(people, {name}, true)
    if (listPeople.length > 0) {
        console.log(listPeople)
    } else {
        console.log("No person with this name was found.")
    }
    });

}

// SearchByName("nir")


export function SearchByAge(age){
   readFrom("../data/PEOPLE.json", (err, people) => {
    if (err) {
        console.log(err);
        return;
    }
    const listPeople = findBy(people, {age: Number(age)})
    if (listPeople.length > 0) {
        console.log(listPeople)
    } else {
        console.log("No one of that age was found.")
    }
    })
    
    

}

// SearchByAge("400")




