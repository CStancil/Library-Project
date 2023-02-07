# Library-Project
## A library containing various functions used to get numbers and items from a dataset about Best Selling Video Games
the function *historicalYearlyAverage ()* takes a game title and what year it is as a parameter and returns a number telling you the yearly average since the game's release

@param gameTitle {string} - the desired game title

@param currentYear {number} - the year input used to calculate the average

@return {number} - yearly average of sales

**function historicalYearlyAverage(gametitle, currentYear)**

## -

the function *averagePublisherSales ()* takes a game publisher as a parameter and returns the average total sales of games from that publisher

@param publishers {string} - the desired publisher

@return {number} - average of that publisher's sales

**function averagePublisherSales(publishers)**

## -

the function *averageDevPlatform ()* takes a game developer as an input and returns the most common platform they have in the dataset

@param dev {string} - the desired developer

@return {string} - most common platform from that group of developers

**function averageDevPlatform(dev)**

## -

the function *mostSalesInPlatform ()* takes a game platform as a parameter and returns the game with the highest number of sales

@param platforms {string} - the desired developer

@return {string} - the game that has the most sales

**function mostSalesInPlatform(platforms)**

## -

the function *totalSalesPerPlatform ()* takes a game platform as a parameter and returns the game with the highest number of sales

@param plat {string} - the desired platform

@return {number} - total of that platform's sales

**function totalSalesPerPlatform(plat)**

