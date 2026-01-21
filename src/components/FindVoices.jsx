import "./FindVoices.css";
import { useEffect } from "react";

function FindVoices({ voices, setVoices, selectedVoice, onVoiceChange }) {
  useEffect(() => {
    const handleVoices = () => {
      const loadedVoices = window.speechSynthesis.getVoices();
      setVoices(loadedVoices);
    };

    window.speechSynthesis.addEventListener("voiceschanged", handleVoices);
    handleVoices();

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoices);
    };
  }, []);

  return (
    <>
      <div className="voices-list">
        <label className="voices-label">Select a Voice</label>
        <select
          className="voices"
          value={selectedVoice}
          onChange={(e) => onVoiceChange(e.target.value)}
        >
          {voices
            .filter((v) => v.lang === "en-US" || v.lang === "en-GB")
            .map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}({voice.lang})
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

export default FindVoices;
