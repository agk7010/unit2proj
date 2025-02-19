
# Unit 2 Project: Musical Math

## Overview
In this project, you will create a web application that performs various musical math conversions. You will define a JavaScript module named `MusicTools.js` containing **methods** for converting
1. MIDI pitch to frequency
2. frequency to MIDI pitch
3. [dBFS to linear amplitude](https://www.youtube.com/watch?v=uabDngtAPd4)
4. linear amplitude to dBFS

Your application will also include a user interface in `index.html` with buttons and input boxes to display the results of these conversions.

## Objectives
- Understand and implement JavaScript modules.
- Practice using mathematical formulas in programming.
- Interact with the HTML DOM to display data dynamically.

## Requirements

### 1. MusicTools.js Module
Create a module `MusicTools.js`. Inside of it create an object called `MusicTools` with the following methods:
- `midiPitchToFrequency(midiPitch)`: Converts MIDI pitch to frequency.
- `frequencyToMidiPitch(frequency)`: Converts frequency to MIDI pitch.
- `dbfsToLinearAmplitude(dbfs)`: Converts dBFS to linear amplitude.
- `linearAmplitudeTodBFS(linear)`: Converts linear amplitude to dBFS.
Make sure to export `MusicTools`


### 1. MIDI Pitch to Frequency Conversion

To convert a MIDI pitch number to its corresponding frequency in hertz, use the formula:

![MIDI Pitch to Frequency Conversion](./img/MIDI2Freq.png)
```js
freq = 440 * Math.pow(2, ((midiPitch - 69) / 12));
```

### 2. Frequency to MIDI Pitch Conversion

To convert a frequency in hertz to the closest MIDI pitch number, use the formula:

![Frequency to MIDI Pitch Conversion](./img/Freq2MIDI.png)
```js
midiPitch =  69 + 12 * Math.log2(frequency / 440);
```
### 3. dBFS to Linear Amplitude Conversion

To convert decibels full scale (dBFS) to linear amplitude, use the formula:
 
![dBFS to Linear Amplitude Conversion](./img/dBFS2LinAmp.png)
```js
linear = Math.pow(10, dbfs / 20);
```

### 4. Linear Amplitude to dBFS Conversion

To convert linear amplitude to decibels full scale (dBFS), use the formula:

![Linear Amplitude to dBFS Conversion](./img/LinAmp2dBFS.png)

```js
dBFS = 20 * Math.log10(linear);
```

### 2. User Interface
Your `index.html` file will contain input boxes for users to enter values and buttons to trigger conversions. The results should be displayed on the page.

### 3. Script.js
Implement event listeners and interaction logic in `script.js`. This script should import functions from `MusicTools.js` and use them to calculate and display the conversion results based on user input.

## Setup
1. Create the `MusicTools.js` module and implement the required methods.
2. Write the `script.js` to handle user interactions and display the results.
3. Test your application thoroughly to ensure accuracy and usability.

## Submission
Push your changes to your repository and submit a URL to your GitHub Repo. Ensure that your final submission includes the `MusicTools.js` and `script.js` files, along with any modifications you've made to `index.html`.

Good luck, and have fun with the project!
