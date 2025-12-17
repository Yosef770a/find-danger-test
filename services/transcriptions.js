import { readFrom } from "../utils/readWriteJson.js";


function CalculatDangerLevel() {
    readFrom("../data/TRANSCRIPTIONS.json", (err, transcriptions) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(transcriptions)
        const dangerousWords = ['death', 'knife', 'bomb', 'attack'];
        const riskByAges = {}
        transcriptions.forEach(transcription => {
            transcription.content = transcription.content.toLowerCase();
            const contentArr = transcription.content.split(' ')
            let transcriptionScore = 0
            contentArr.map(word  => {
                word = word.replace(/[^a-zA-Z]/g, '');
                if (dangerousWords.includes(word)) {
                    // console.log(word)
                    transcriptionScore += 1;
                }
            })
            if (transcriptionScore) {
                riskByAges[transcription.age] = riskByAges[transcription.age] || [];
                riskByAges[transcription.age].push(transcriptionScore);
            }
       
        });
        console.log(riskByAges)
    })
}

CalculatDangerLevel()








console.log(calculateAverage(nums))

