function generateChord() {
  const chords = ["C", "D", "E", "F", "G", "A", "B"];
  const randomIndex = Math.floor(Math.random() * chords.length);
  
  document.getElementById("chord").textContent = chords[randomIndex];
}
