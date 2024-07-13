// Speed Detector
function checkSpeed (speed) {
    const speedLimit = 70; 
    const kmPerDemeritPoint = 5; 
    if (speed < speedLimit) {
        return 'Ok'; 
    } else { const demeritPoints = Math.floor ((speed -speedLimit)/kmPerDemeritPoint); 
      if (demeritPoints > 12) {
      return 'Licence suspended'; 
    } else {
        return `Points: ${demeritPoints}`;
        }
}
}
