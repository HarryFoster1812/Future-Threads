// provided title, description

// what format / easiest to play

const fs = require('fs');
const { createClient, toWav } = require('@neuphonic/neuphonic-js');
const dotenv = require('dotenv');
const { readFile } = require('node:fs/promises');

dotenv.config();

const client = createClient({ apiKey: process.env.NEUPHONICS_API}); 

const outputDir = 'voiceFiles'


function descriptionFromTitle(title) {
	const testDescriptions = {meow: "Cats!!!!", beep: "BEEEEEEEEEEEEEEES!", ship: "beep beep the ship cargo space? car no go space, car go road"}
	return testDescriptions[title]
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

async function getAudio(title) {
	if (fs.existsSync(outputDir + `/${title}.wav`)) { // exists already
		console.log("title exists already for voice")
		const wav = await readFile(outputDir + `/${title}.wav`)
		return new Uint8Array(wav);
	} else {
		// generate file and save it for future use
		console.log("title doesnt exist for voice")
		const wav = await generateText(descriptionFromTitle(title))
		console.log("content is generated");
		
		fs.writeFileSync(outputDir + `/${title}.wav`, wav);
		return wav
	}
}

(async () => {
    await getAudio("meow")
	await new Promise(r => setTimeout(r, 10000)); // wait for time 
})().catch(e => {
    // Deal with the fact the chain failed
});
