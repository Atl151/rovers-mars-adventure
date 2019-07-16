const getRandomCoordinates = (origin) => {
    let coordinates = {};
    if(!origin){
        coordinates.x = Math.floor(Math.random() * 10);
        coordinates.y = Math.floor(Math.random() * 10);
    } else {
        do{
            coordinates.x = Math.floor(Math.random() * 10);
            coordinates.y = Math.floor(Math.random() * 10);
        } while (origin.x == coordinates.x || origin.y == coordinates.y );
    }

    return coordinates;
}

module.exports = getRandomCoordinates;