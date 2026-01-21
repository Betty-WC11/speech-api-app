import "./PhraseButton.css";

function PhraseButton({ label, phrase, voices, selectedVoice }) {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;

    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="buttons">
        <button onClick={() => speak(phrase)}>{label}</button>
      </div>
    </>
  );
}

export default PhraseButton;
