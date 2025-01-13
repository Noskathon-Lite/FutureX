const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic : Interesting historical storyalong with AI Image prompt in Realistic format for each sence and give result in JSON format with imagePrompt and Content Text as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"video_script\": [\n    {\n      \"scene_number\": 1,\n      \"imagePrompt\": \"A vibrant, detailed painting of a bustling marketplace in ancient Alexandria, Egypt, circa 300 BC. Vendors are selling papyrus scrolls, spices, and pottery. The architecture is Hellenistic with tall columns and arched doorways. The sky is a clear, bright blue.\",\n      \"contentText\": \"Imagine bustling Alexandria, 300 BC. A marketplace alive with trade, the air thick with the scent of spices and the hum of bartering voices.\"\n    },\n    {\n      \"scene_number\": 2,\n       \"imagePrompt\": \"Close up, realistic rendering of a young woman's face looking intently at a detailed map with ancient writing. The lighting is soft and illuminates the scroll gently. The woman has dark, curly hair pulled back and wears simple linen clothing.\",\n      \"contentText\": \"Here, a young scholar named Hypatia was making her mark. Not just in philosophy, but in math and astronomy. \"\n\n    },\n     {\n      \"scene_number\": 3,\n      \"imagePrompt\":\"A realistic depiction of a crowded lecture hall in ancient Alexandria. Scholars are engaged in intellectual debate, some writing on scrolls, others listening intently. Hypatia is at the center, teaching with authority. The room has large, stone walls and natural light coming from high windows.\",\n      \"contentText\": \"She was a beacon of knowledge, drawing students from across the known world to her lectures.\"\n\n    },\n     {\n       \"scene_number\": 4,\n       \"imagePrompt\": \"A realistic and slightly dramatic portrayal of a mob in ancient Alexandria. There are visible tensions and aggression on their faces. They are carrying crude weapons and torches. The background suggests a chaotic city street at dusk.\",\n        \"contentText\": \"But Alexandria was a city on edge. Political and religious tensions were brewing...\"\n      },\n    {\n      \"scene_number\": 5,\n       \"imagePrompt\": \"A highly realistic, heartbreaking image of Hypatia being attacked by a mob in a dimly lit street. The expressions are filled with rage on one side and shock and fear on the other. This scene is presented in a painterly style, with strong contrasts of light and shadow.\",\n      \"contentText\": \"...and in a shocking tragedy, Hypatia was brutally murdered, her ideas silenced.\"\n    },\n     {\n      \"scene_number\": 6,\n      \"imagePrompt\":\"A realistic, close up shot of a hand gently placing a single papyrus scroll onto a stone table. Sunlight softly illuminates the scene. The scroll is slightly worn, hinting at its age and importance.\",\n      \"contentText\":\"Though her life was cut short, Hypatia's legacy lived on, a testament to the power of knowledge and the fragility of progress. \"\n    },\n    {\n       \"scene_number\": 7,\n       \"imagePrompt\":\"A wide, panoramic, slightly sepia-toned shot of a library with tall bookshelves filled with ancient scrolls. Sunlight streams in from high windows. The atmosphere is calm, peaceful, and filled with a sense of reverence for knowledge.\",\n      \"contentText\":\"Her story reminds us to cherish the pursuit of wisdom and to protect the voices that dare to challenge convention. \"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
