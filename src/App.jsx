import PhraseButton from "./components/PhraseButton";
import FindVoices from "./components/FindVoices";
import "./App.css";
import { useState } from "react";

function App() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");

  const phrases = [
    { label: "You're Pure Sunshine", phrase: "You're pure sunshine" },
    { label: "Look How Far You've Come!", phrase: "Look How Far You've Come!" },
    {
      label: "Everyday is a Special Occasion",
      phrase: "Everyday is a Special Occasion",
    },
    {
      label: "Be Scared and Do It Anyway",
      phrase: "Be Scared and Do It Anyway",
    },
    {
      label: "Be Yourself, There's No One Better!",
      phrase: "Be Yourself, There's No One Better!",
    },
    { label: "We Rise by Lifting Others", phrase: "We Rise by Lifting Others" },
  ];

  return (
    <>
      <h1>Motivation Booster!</h1>
      <h2>Communication Aid</h2>
      <div className="voice-dropdown">
        <FindVoices
          voices={voices}
          setVoices={setVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={setSelectedVoice}
        />
      </div>
      <div className="phraseButtons">
        {phrases.map((item) => (
          <PhraseButton
            key={item.label}
            label={item.label}
            phrase={item.phrase}
            voices={voices}
            selectedVoice={selectedVoice}
          />
        ))}
      </div>
    </>
  );
}

export default App;
