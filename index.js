const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    let firstTwo = drivers.slice(0,2)
    return firstTwo
}

function returnLastTwoDrivers() {
    let lastTwo = drivers.slice(2,4)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(rate) {
    return function() {
        return (rate*5)    
    }
}

const fareDoubler = fare => fare*2

const fareTripler = fare => fare*3

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}