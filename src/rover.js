const chalk = require('chalk');
const { makeMap, mapSymbolization } = require('./utils/makeMap');

class Rover {
    constructor({ direction, position, goal }){
        this.direction = direction;
        this.position = position;
        this.goal = goal;
        this.travelLog = [{
            x: position.x,
            y: position.y
        }];
        this.cardinalDirections = ['N', 'E', 'S', 'W'];
        this.map = makeMap.call(this);
        this.map.mapSymbolization = mapSymbolization;
    }

    move(orders) {
        const arrayOrders = orders.toLowerCase().split('');
        for(let i = 0; i < arrayOrders.length; i++){
            switch(arrayOrders[i]){
                case 'l':
                    this.turnLeft.call(this);
                    break;
                case 'r':
                    this.turnRight.call(this);
                    break;
                case 'f':
                    this.goForward.call(this);
                    break;
            }
        }
        
        this.checkForSuccess.call(this);
    }

    goForward() {
        const { direction, position } = this;
        switch(direction){
            case 'N':
                if(position.y === 0) return; 
                position.y -= 1;
                break;
            case 'E':
                if(position.x === 9) return;
                position.x += 1; 
                break;
            case 'S':
                if(position.y === 9) return;
                position.y += 1;
                break;
            case 'W':
                if(position.x === 0) return;
                position.x -= 1;
                break;
        }
        this.travelLog.push({
            x: position.x,
            y: position.y
        });
        this.position = position;
    }

    turnLeft() {
        const cardinalPoint = this.cardinalDirections.indexOf(this.direction);
        if(cardinalPoint === 0){
            this.direction = this.cardinalDirections[3]; 
        } else {
            this.direction = this.cardinalDirections[cardinalPoint-1]
        }
    }
    
    turnRight() {
        const cardinalPoint = this.cardinalDirections.indexOf(this.direction);
        if(cardinalPoint === 3){
            this.direction = this.cardinalDirections[0]; 
        } else {
            this.direction = this.cardinalDirections[cardinalPoint+1]
        }
    }

    checkForSuccess() {
        for(let i = 0; i < this.map.hassles.length; i++){
            for(let j = 0; j < this.travelLog.length; j++){
                if(this.map.hassles[i].x === this.travelLog[j].x && this.map.hassles[i].x === this.travelLog[j].x) 
                    return this.result = chalk.red.inverse(' Failure. ')+chalk.red(' Rover crashed with an object. '); 
            }
        }

        if(this.position.x === this.goal.x && this.position.y === this.goal.y){
            this.result = chalk.green.inverse(' Successs! ')+chalk.green(' Rover has reached its goal. ');
        } else {
            this.result = chalk.red.inverse(' Failure. ')+chalk.red(' Rover is now lost in Mars ');
        }

        
    }
}

module.exports = Rover;