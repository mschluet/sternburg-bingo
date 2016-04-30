var fields = [[[85, 61, 19, 27, 78],
               [52, 90, 45, 3, 39],
               [54, 88, 89, 76, 21],
               [69, 15, 94, 22, 10],
               [24, 18, 62, 79, 53]],
              [[80, 32, 18, 17, 98],
               [28, 42, 59, 52, 81],
               [22, 9, 11, 70, 63],
               [43, 78, 86, 24, 91],
               [8, 37, 75, 58, 89]],
              [[92, 31, 29, 52, 44],
               [82, 73, 65, 36, 18],
               [9, 20, 22, 41, 55],
               [72, 89, 14, 60, 38],
               [78, 56, 43, 4, 97]],
              [[50, 89, 84, 26, 11],
               [34, 95, 48, 63, 78],
               [7, 99, 18, 30, 23],
               [22, 5, 46, 74, 51],
               [67, 70, 12, 52, 83]],
              [[22, 71, 93, 16, 64],
               [33, 6, 57, 18, 49],
               [87, 52, 40, 2, 77],
               [25, 96, 78, 13, 68],
               [47, 35, 1, 66, 89]]]

function allBingos() {
  var winnerCombinations = [];
  for (var i = 0; i<5; i++) {
    var columns = [[],[],[],[],[]];
    var vertical = [[], []]
    for (var row=0; row<5; row++) {
      // all horizontal bingos
      winnerCombinations.push(fields[i][row]);
      // all vertical bingos
      for (var col=0; col<5; col++) {
        columns[col].push(fields[i][row][col]);
      }
      // don't forget the vertical ones
      vertical[0].push(fields[i][row][row]);
      vertical[1].push(fields[i][row][4-row]);
    }
    for (var j=0; j<5; j++) {
      winnerCombinations.push(columns[j])
    }
    for (var k=0; k<2; k++) {
      winnerCombinations.push(vertical[k]);
    }
  }
  return winnerCombinations;
}

function winningFields() {
  var winningFields = {};
  for (var f=0; f<5; f++) {
    for (var r=0; r<5; r++) {
      for (var c=0; c<5; c++) {
        if (!winningFields.hasOwnProperty(fields[f][c][r])) {
          winningFields[fields[f][c][r]] = 1;
        } else {
          winningFields[fields[f][c][r]]++;
        }
      }
    }
  }
  return winningFields;
}


function starCoordinates(radius, anchor) {
  // This function calculates the perfect svg five-point star using a rotational matrice
  var angle = [0, 4/5*Math.PI, 8/5*Math.PI, 2/5*Math.PI, 6/5*Math.PI];
  var coordinates = [];

  for (var i in angle) {
    var x = Math.cos(angle[i])*0 - Math.sin(angle[i])*radius;
    var y = Math.sin(angle[i])*0 + Math.cos(angle[i])*radius;
    // y coordinates of anchor are downwards
    coordinates.push("" + (anchor[0]+x) + ", " + (anchor[1]-y));
  }
  return coordinates;
}