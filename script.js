const majorKeys = { //major keys object(key-value pairs). each major key is an array of chords within that major key
  "C Major": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"], // c major is the key and the value is an array of chords.
  "G Major": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
  "D Major": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
  "A Major": ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
  "E Major": ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
  "B Major": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
  "F# Major": ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"],
  "Db Major": ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
  "Ab Major": ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"],
  "Eb Major": ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"],
  "Bb Major": ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
  "F Major": ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"]
};

const minorKeys = { //minor keys object. each minor key is an array of chords within that minor key.
  "A Minor": ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
  "E Minor": ["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
  "B Minor": ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"],
  "F# Minor": ["F#m", "G#dim", "A", "Bm", "C#m", "D", "E"],
  "C# Minor": ["C#m", "D#dim", "E", "F#m", "G#m", "A", "B"],
  "G# Minor": ["G#m", "A#dim", "B", "C#m", "D#m", "E", "F#"],
  "D# Minor": ["D#m", "E#dim", "F#", "G#m", "A#m", "B", "C#"],
  "Bb Minor": ["Bbm", "Cdim", "Db", "Ebm", "Fm", "Gb", "Ab"],
  "F Minor": ["Fm", "Gdim", "Ab", "Bbm", "Cm", "Db", "Eb"],
  "C Minor": ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"],
  "G Minor": ["Gm", "Adim", "Bb", "Cm", "Dm", "Eb", "F"],
  "D Minor": ["Dm", "Edim", "F", "Gm", "Am", "Bb", "C"]
};

const majorPatterns = [ //an array of arrays.
  [0, 4, 5, 3], // I - V - vi - IV , these numbers are indexes, NOT chords.
  [0, 3, 4, 0], // I - IV - V - I
  [5, 3, 0, 4], // vi - IV - I - V
  [0, 5, 1, 4]  // I - vi - ii - V
];

const minorPatterns = [
  [0, 5, 2, 6], // i - VI - III - VII
  [0, 3, 6, 2], // i - iv - VII - III
  [0, 6, 5, 6], // i - VII - VI - VII
  [0, 3, 5, 6]  // i - iv - VI - VII
];

function generateProgression() { //this is what runs when the button is clicked. 
  const useMajor = Math.random() < 0.5; //Math.random function number between 0 and 1. the 0.5 means 50% chance. true-> major false-> minor

  let chosenKey; //these store selected key 
  let chordsInKey; //its chords 
  let chosenPattern; //selected pattern

  if (useMajor) { //checks if we should use major keys
    const majorKeyNames = Object.keys(majorKeys); //gets all keys from object and turns them into array.
    const randomKeyIndex = Math.floor(Math.random() * majorKeyNames.length); //picks a random index
    chosenKey = majorKeyNames[randomKeyIndex]; //selects one key
    chordsInKey = majorKeys[chosenKey]; //looks up chords for that key

    const randomPatternIndex = Math.floor(Math.random() * majorPatterns.length); //picks random progression pattern
    chosenPattern = majorPatterns[randomPatternIndex]; //selects pattern
  } else { //runs if NOT major
    const minorKeyNames = Object.keys(minorKeys); 
    const randomKeyIndex = Math.floor(Math.random() * minorKeyNames.length);
    chosenKey = minorKeyNames[randomKeyIndex];
    chordsInKey = minorKeys[chosenKey];

    const randomPatternIndex = Math.floor(Math.random() * minorPatterns.length);
    chosenPattern = minorPatterns[randomPatternIndex];
  }

  const progression = chosenPattern.map(index => chordsInKey[index]); //.map() loops through each number in pattern. each number = index. chordsInKey gets actual chord.

  document.getElementById("key").textContent = `Key: ${chosenKey}`; //finds HTML element with id "key" and updates text
  document.getElementById("chord").textContent = progression.join(" - "); //join("-") turns array into string.
}