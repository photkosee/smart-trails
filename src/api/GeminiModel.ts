import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_AI_API
  ? import.meta.env.VITE_GOOGLE_AI_API
  : "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate a list of hiking trails for Location: Sydney NSW, with the difficulty of Easy, with extra information: none, for solo. Give me TrailName, TrailAddress, Trail image url, geo coordinates, rating, descriptions, and suggest nearby itinerary with placeName, placeDetails, plaec image url, geo coordinates in JSON format"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "{\"trails\": [{\"TrailName\": \"Federation Cliff Walk\", \"TrailAddress\": \"Federation Cliff Walk, Sydney NSW 2000\", \"Trail image url\": \"https://www.sydney.com/images/uploads/images/places/federation-cliff-walk-sydney-harbour-bridge.jpg\", \"geo coordinates\": \"-33.8541, 151.2096\", \"rating\": 4.5, \"descriptions\": \"A scenic coastal walk offering stunning views of Sydney Harbour, the Harbour Bridge, and the Opera House.\", \"suggest nearby itinerary\": [{\"placeName\": \"Sydney Opera House\", \"placeDetails\": \"World-famous performing arts center with iconic architecture.\", \"place image url\": \"https://www.sydneyoperahouse.com/content/dam/sydneyoperahouse/images/hero-images/hero-image-opera-house-exterior-day-sydney-harbour.jpg\", \"geo coordinates\": \"-33.8568, 151.2151\"}, {\"placeName\": \"Royal Botanic Garden\", \"placeDetails\": \"A beautiful garden with diverse plant species and stunning harbour views.\", \"place image url\": \"https://www.rbgsyd.nsw.gov.au/content/rbgsyd/en/about-us/our-gardens/royal-botanic-garden-sydney/images/royal-botanic-garden-sydney-hero-image.jpg\", \"geo coordinates\": \"-33.8651, 151.2099\"}]}, {\"TrailName\": \"Coogee to Bondi Coastal Walk\", \"TrailAddress\": \"Coogee Beach, Sydney NSW 2034\", \"Trail image url\": \"https://www.sydney.com/images/uploads/images/places/coogee-to-bondi-coastal-walk.jpg\", \"geo coordinates\": \"-33.9209, 151.2593\", \"rating\": 4.8, \"descriptions\": \"A world-renowned coastal walk connecting Coogee Beach to Bondi Beach, offering stunning ocean views.\", \"suggest nearby itinerary\": [{\"placeName\": \"Bondi Beach\", \"placeDetails\": \"Iconic Australian beach known for its surfing and vibrant atmosphere.\", \"place image url\": \"https://www.sydney.com/images/uploads/images/places/bondi-beach.jpg\", \"geo coordinates\": \"-33.8905, 151.2778\"}, {\"placeName\": \"Icebergs\", \"placeDetails\": \"Famous ocean pool with stunning views and a popular cafe.\", \"place image url\": \"https://www.icebergs.com.au/images/header.jpg\", \"geo coordinates\": \"-33.8937, 151.2752\"}]}, {\"TrailName\": \"Lane Cove National Park - The Fig Tree Walk\", \"TrailAddress\": \"Lane Cove National Park, Sydney NSW 2066\", \"Trail image url\": \"https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/lane-cove-national-park/fig-tree-walk\", \"geo coordinates\": \"-33.8222, 151.1505\", \"rating\": 4.3, \"descriptions\": \"A short and easy walk through lush rainforest with a large fig tree as its highlight.\", \"suggest nearby itinerary\": [{\"placeName\": \"Lane Cove River\", \"placeDetails\": \"A picturesque river offering opportunities for kayaking, canoeing, and picnicking.\", \"place image url\": \"https://www.sydney.com/images/uploads/images/places/lane-cove-river.jpg\", \"geo coordinates\": \"-33.8175, 151.1453\"}, {\"placeName\": \"Lane Cove National Park\", \"placeDetails\": \"A large park with diverse landscapes, including rainforest, woodland, and riverbanks.\", \"place image url\": \"https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/lane-cove-national-park/fig-tree-walk\", \"geo coordinates\": \"-33.8222, 151.1505\"}]}]}\n"},
      ],
    },
  ],
});
