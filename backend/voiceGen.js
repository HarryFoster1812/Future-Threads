// provided title, description

// what format / easiest to play

const fs = require('fs');
const { createClient, toWav } = require('@neuphonic/neuphonic-js');
const dotenv = require('dotenv');
const path = require("path");

const choiceData = require("../public/timeline_data/choices.json")

dotenv.config();

const client = createClient({ apiKey: process.env.NEUPHONICS_API}); 

const outputDir = 'voiceFiles'


function descriptionFromTitle(title) {
	/* const testDescriptions = {meow: "Cats!!!!", beep: "BEEEEEEEEEEEEEEES!", ship: "beep beep the ship cargo space? car no go space, car go road"}
	return testDescriptions[title] */
	console.log(choiceData.filter((val) => {return val.title === title})[0]["description"])
	return choiceData.filter((val) => {return val.title === title})[0]["description"]
}

async function generateText(description) {
	const sse = await client.tts.sse({
		speed: 1.15,
		lang_code: 'en'
	  });
	  
	  const res = await sse.send(description);
	  
	  // returning as a wav
	  return toWav(res.audio);
}

async function getAudioPath(title) {
	if (fs.existsSync(outputDir + `/${title}.wav`)) { // exists already
		console.log("title exists already for voice")
	} else {
		// generate file and save it for future use
		console.log("title doesnt exist for voice")
		const wav = await generateText(descriptionFromTitle(title))
		console.log("content is generated");
		
		fs.writeFileSync(outputDir + `/${title}.wav`, wav);
	}
	return path.join(__dirname, outputDir + `/${title}.wav`)
}

module.exports = getAudioPath
