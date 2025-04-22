// script.js
import MusicTools from "./MusicTools.js";

document.addEventListener("DOMContentLoaded", () => {
  // MIDI Pitch to Frequency
  document.getElementById("midiToFreq").addEventListener("click", () => {
    const midiInput = parseFloat(document.getElementById("midiInput").value);
    if (!isNaN(midiInput)) {
      const frequency = MusicTools.midiPitchToFrequency(midiInput).toFixed(2);
      document.getElementById("freqResult").textContent = frequency;
    }
  });

  // Frequency to MIDI Pitch
  document.getElementById("freqToMidi").addEventListener("click", () => {
    const freqInput = parseFloat(document.getElementById("freqInput").value);
    if (!isNaN(freqInput)) {
      const midi = MusicTools.frequencyToMidiPitch(freqInput);
      document.getElementById("midiResult").textContent = midi;
    }
  });

  // dBFS to Linear Amplitude
  document.getElementById("dbfsToLinear").addEventListener("click", () => {
    const dbfsInput = parseFloat(document.getElementById("dbfsInput").value);
    if (!isNaN(dbfsInput)) {
      const linear = MusicTools.dbfsToLinearAmplitude(dbfsInput).toFixed(5);
      document.getElementById("linearResult").textContent = linear;
    }
  });

  // Linear Amplitude to dBFS
  document.getElementById("linearToDbfs").addEventListener("click", () => {
    const linearInput = parseFloat(
      document.getElementById("linearInput").value
    );
    if (!isNaN(linearInput) && linearInput > 0) {
      const dbfs = MusicTools.linearAmplitudeTodBFS(linearInput).toFixed(2);
      document.getElementById("dbfsResult").textContent = dbfs;
    } else {
      document.getElementById("dbfsResult").textContent = "Invalid input";
    }
  });
});
