// MusicTools.js

const MusicTools = {
  midiPitchToFrequency(midiPitch) {
    return 440 * Math.pow(2, (midiPitch - 69) / 12);
  },

  frequencyToMidiPitch(frequency) {
    return Math.round(69 + 12 * Math.log2(frequency / 440));
  },

  dbfsToLinearAmplitude(dbfs) {
    return Math.pow(10, dbfs / 20);
  },

  linearAmplitudeTodBFS(linear) {
    return 20 * Math.log10(linear);
  },
};

export default MusicTools;
