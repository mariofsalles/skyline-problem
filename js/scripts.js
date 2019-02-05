// input:
var building = [
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8]
];
// output: 
// [[2,10],[3,15],[5,12],[12,0],[15,10],[20,8],[24,0]]

var skyLine = []
var x1 = building[0][0];
var h1 = building[0][2];
var x2 = building[0][1];
var ho = 0;
skyLine.push([ x1, h1 ], [ x2, ho ]);

function byAscend(a, b) { return a[0] - b[0]; }
building.sort(byAscend);

for (var i=0; i < building.length - 1; i++){
  
  var l = building[i+1][0];
  var r = building[i+1][1];
  var h = building[i+1][2];
    
  if (i <= 2){
    var j = i;
  } else {
    j = Math.max(i, (skyLine.length - 2));
  }
  
  var xi = skyLine[j][0];
  var hi = skyLine[j][1];
  var xj = skyLine[j+1][0];
  var hj = skyLine[j+1][1];

  if ((xj <= l) || (xi >= r)) {
    skyLine.push([l, h],[r,ho]);
    skyLine.sort(byAscend)
  } 
  else if (xi <= l <= xj <= r) {
    skyLine.pop();
    if (hi >= h) {
      skyLine.push([xj,h],[r,ho]);
    } else if (hi <= h){
      skyLine.push([l, h],[r,ho]);
    }
    skyLine.sort(byAscend)
  }
  else if ((l <= xi <= xj <= r) || (xi <= l <= r <= xj)){
    skyLine.pop();
    if (hi >= h) {
      skyLine.push([l, h],[xj, h],[r,ho]);
    } else if (hi <= h) {
      skyLine.push([l, h], [r, hi], [xj,ho]);
    }
    skyLine.sort(byAscend)
  }

}
console.log(skyLine);