const chalk = require('chalk');
const getRandomCoordinates = require('./getRandomCoordinates');

const makeMap = function() {
    let graph = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    let hassles = [];

    for(let i = 0; i < 5; i++){
        hassles.push(getRandomCoordinates());
        graph[hassles[i].y][hassles[i].x] = 'H';
        graph[this.position.y][this.position.x] = 'R';
        graph[this.goal.y][this.goal.x] = 'G';
    }

    return {
        graph, 
        hassles
    };
}

const mapSymbolization = `${chalk.yellow.inverse(' 0 ')} Free space \n${chalk.green.inverse(' R ')} Rover\n${chalk.red.inverse(' H ')} Hassle \n${chalk.magenta.inverse(' G ')} Goal`;

module.exports = {makeMap, mapSymbolization}