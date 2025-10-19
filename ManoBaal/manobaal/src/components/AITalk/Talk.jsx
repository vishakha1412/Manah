 import React, { useState } from "react";
import { moodPrompts } from "./prompts";
import { GoogleGenAI } from "@google/genai";

export default function Talk() {
  const ai = new GoogleGenAI({ })
  const [mood, setMood] = useState("");
  const [response, setResponse] = useState("");

  const handleMoodSelect = async (selectedMood) => {
    setMood(selectedMood);

try{
       const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}catch(err){
  setResponse("something went wrong")
}
  }
    
    /*try{
    const prompt = moodPrompts[selectedMood];

    const res = await fetch("/api/ai-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    console.log(data);
    setResponse(data.reply);
  }catch(err) {
    console.error("Error",err);
    setResponse("something went wrong")
  }
  } */
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Talk to Manah🤖</h2>
      <div className="flex gap-2 mb-4">
        {Object.keys(moodPrompts).map((m) => (
          <button
            key={m}
            onClick={() => handleMoodSelect(m)}
            className={`px-4 py-2 rounded-full text-white ${
              mood === m ? "bg-purple-600" : "bg-purple-400"
            }`}
          >
            {m}
          </button>
        ))}
        </div>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
}


