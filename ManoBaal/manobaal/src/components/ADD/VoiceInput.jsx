export default function VoiceInput({ onText }) {
  const handleVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onText(transcript);
    };
    recognition.start();
  };

  return (
    <button onClick={handleVoice} className="bg-teal-600 text-white px-4 py-2 rounded">
      🎙️ Speak Mood
    </button>
  );
}

