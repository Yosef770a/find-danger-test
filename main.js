import { getPeople, getTranscriptions } from "./utils/api.js";
import { writeTo } from "./utils/readWriteJson.js";
import { ask } from "./utils/prompt.js";


function showMenu() {
  console.log(`
1. Get People List
2. Get Call Records/Transcriptions
3. Search People by Name
4. Search People by Age
5. Find Dangerous People
0. Exit
`);
}


function main() {
  while (true) {
     showMenu();
    const choice =  ask('Choose an option: ');

    try {
      switch (choice) {
        case '1':
          getPeople().then(people => writeTo("./data/PEOPLE.json", people));
          console.log("The json file has been updated from the server under the data folder.")
          break;

        case '2': {
          getTranscriptions().then(transcriptions => writeTo("./TRANSCRIPTIONS.json", transcriptions));
          console.log("The json file has been updated from the server under the data folder.")
          break;
        }

        case '0':
          process.exit(0);

        default:
          console.log('Invalid option');
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}

main();


// getPeople().then(people => writeTo("./PEOPLE.json", people));
// getTranscriptions().then(transcriptions => writeTo("./TRANSCRIPTIONS.json", transcriptions));


