import { writeFile, readFile } from "fs";


export function writeTo(path, data){
    writeFile(path, JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        }
    });
}


export function readFrom(path, callback) {
    readFile(path, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, JSON.parse(data));
    });
}



// writeTo("./iugiugf.json", "gufufu")
