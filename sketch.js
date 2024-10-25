function setup() {
  createCanvas(400, 400);
  background(255);
  let rows = 15;  // Numero di righe
  let cols = 4;   // Numero di colonne
  let rectWidth = 60;
  let rectHeight = 15;
  let paddingX = 20;
  let paddingY = 20;
  
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      // Piccola variazione nella posizione e nell'altezza
      let xOffset = random(-2, 2);
      let yOffset = random(-3, 3);
      let hOffset = random(-2, 2);
      
      let x = paddingX + j * (rectWidth + 20) + xOffset;
      let y = paddingY + i * (rectHeight + 10) + yOffset;
      
      fill(255, 0, 0);
      noStroke();
      rect(x, y, rectWidth, rectHeight + hOffset);
    }
  }
}
