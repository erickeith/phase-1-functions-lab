// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(x - 42);
}

function distanceFromHqInFeet(x) {
    return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(start, stop) {
    return Math.abs(stop - start) * 264
}

function calculatesFarePrice(start, stop) {
    let price = distanceTravelledInFeet(start, stop);
    
    if (price > 2500) {
        return "cannot travel that far";
    } else if (price < 401) {
        return 0;
    } else if (price > 400 && price < 2001) {
        return (price - 400) * .02;
    } else if (price > 2000 && price < 2501) {
        return 25;
    }

}