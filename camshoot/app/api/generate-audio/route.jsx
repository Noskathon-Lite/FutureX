import textToSpeech from "@google-cloud/text-to-speech";

const client = new textToSpeech.TextToSpeechClient({
    apiKey:process.env.GOOGLE_API_KEY
});
export async function POST(req) {
    const {text,id}=await req.json();
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
      };
      const [response] = await client.synthesizeSpeech(request);
      // Write the binary audio content to a local file
      const writeFile = util.promisify(fs.writeFile);
      await writeFile('output.mp3', response.audioContent, 'binary');
      console.log('Audio content written to file: output.mp3');
      return NextResponse.json({Result: 'Success'});

}