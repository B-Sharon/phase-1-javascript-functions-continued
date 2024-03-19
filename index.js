function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun ('go to the beach');

function mondayWork (activity = "go to the office") {
    return`This Monday, I will ${activity}.`;
}
mondayWork ('visit the dentist');

function wrapAdjective (style = "*") {
    return function (adjective = "special"){
        return`You are ${style}${adjective}${style}!`

    }
}