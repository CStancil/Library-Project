function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Culture%20%26%20Entertainment/Best%20Selling%20Video%20Games.csv";

var gameName = getColumn(url,1);
var sales = getColumn(url, 2);
var platform = getColumn(url, 3);
var releaseDate = getColumn(url, 4);
var developer = getColumn(url, 5);
var publisher = getColumn(url, 6);

/* 
getColumn() and getCol() functions by Blaire McAvoy. Raw Data source: https://en.wikipedia.org/wiki/List_of_best-selling_video_games and sources within

*/

/*takes a game title and what year it is as a parameter and returns a number telling you the yearly average since the game's release
gameTitle {string} - the desired game
currentYear {number} - the year it is
return {number} - yearly average of sales
*/

for (var i = 0; i< gameName.length; i++) {
  gameName[i] = gameName[i].toLowerCase();
  publisher[i] = publisher[i].toLowerCase();
  developer[i] = developer[i].toLowerCase();
  platform[i] = platform[i].toLowerCase();
}

function historicalYearlyAverage(gameTitle, currentYear) {
  if (gameTitle==null || currentYear==null) {
    return "Incorrect amount of inputs.";
  }
  else if (typeof gameTitle != "string" || typeof currentYear != "number") {
    return "Invalid input type.";
  }
  else if (gameName.includes(gameTitle.toLowerCase())) {
    gameTitle = gameTitle.toLowerCase();
    var index = gameName.indexOf(gameTitle);
    var releaseYear = parseInt(releaseDate[index].substr(releaseDate[index].length-5,4));
    if (currentYear < releaseYear) {
      return "Input year is before game release date.";
    }
    var timeSince = currentYear-releaseYear;
    var copiesSold = sales[index];
    var yearlyAverage = Math.floor(copiesSold/timeSince);
    return yearlyAverage;
  }
  else if (!gameName.includes(gameTitle)) {
    document.getElementById("weF***edUp").hidden = false;
    return "Game name not in list.";
  }
}


/*takes a game publisher as a parameter and returns the average total sales of games from that publisher
publishers {string} - the desired publisher
return {number} - average of that publisher's sales
*/
function averagePublisherSales(publishers){

if (typeof publishers != "string") {
    return ("Not a string");
  }
  publishers = publishers.toLowerCase();
  var total = 0;
  var gamesFromPublisherCount = 0;
  if (!publisher.includes(publishers)) {
    document.getElementById("weF***edUp").hidden = false;
    return "Publisher name not in list.";
  }
  for(var i = 0; i < sales.length; i++){
    if (publisher[i].includes(publishers)){
      total = total + parseInt(sales[i]);
      gamesFromPublisherCount++
    }
    
  }

  total = total / gamesFromPublisherCount;
  
  return total;
}

/*takes a game developer as an input and returns the most common platform they have in the dataset
dev {string} - the name of the developer team
*/
function averageDevPlatform(dev) {
  if (typeof dev != "string") {
    return "Not a string";
  }
  dev = dev.toLowerCase();
  if (!developer.includes(dev)) {
    return "Developer name not in list";
  }
  var platformList = [];
  var platformCounter = [0,0,0,0,0,0,0,0,0,0];
  var developerGames = [];
  for (var i = 0; i<developer.length; i++) {
    if (developer[i] == dev) {
      developerGames.push(gameName[i]);
      if (!platformList.includes(platform[i])) {
        platformList.push(platform[i]);
        var platformIndex = platformList.indexOf(platform[i])
        platformCounter[platformIndex]++
      }
      else if (platformList.includes(platform[i])) {
        var platformIndex = platformList.indexOf(platform[i]);
        platformCounter[platformIndex]++
      }
    }
  }
  var max = Math.max.apply(null, platformCounter);
  var index = platformCounter.indexOf(max);
  var average = platformList[index];
  return average;
}

/*takes a game platform as a parameter and returns the game with the highest number of sales
platforms {string} - the desired platform group
return {string} - the game that has the most sales
*/
function mostSalesInPlatform(platforms) {

var platformList = [];
var salesList = [];
var largest = 0;
var mostSalesGame = "";
  
  if (typeof platforms != "string") {
    return "Not a string";
  }
  platforms = platforms.toLowerCase();
  if (!platform.includes(platforms)) {
    return "Game platform not in list"
  }
  for(var i = 0; i < platform.length; i++){
    if(platform[i].includes(platforms)){
      platformList.push(gameName[i]);
      salesList.push (parseInt(sales[i]));
    }
  }

  for(var i = 0; i < platformList.length; i++){
    if(salesList[i] > largest){
      largest = salesList[i];
      mostSalesGame = platformList[i];
    }
  }
  return mostSalesGame;
}

/*takes a platform as a parameter and returns the total sales of games from that platform
plat {string} - the desired platform
return {number} - total of that platform's sales
*/
function totalSalesPerPlatform(plat) {
  if (typeof plat != "string") {
    return "Not a string";
  }
  plat = plat.toLowerCase();
  if (!platform.includes(plat)) {
    return "Game platform not in list";
  }
  var salesPerPlatform = 0;
  for (var i = 0; i<platform.length; i++) {
    if (platform[i] == plat) {
      salesPerPlatform+=parseInt(sales[i])
    }
  }
  return salesPerPlatform;
}
/*console.log(totalSalesPerPlatform(` 
According to all known laws of aviation,

  
there is no way a bee
should be able to fly.

  
Its wings are too small to get
its fat little body off the ground.

  
The bee, of course, flies anyway

  
because bees don't care
what humans think is impossible.
`))*/


