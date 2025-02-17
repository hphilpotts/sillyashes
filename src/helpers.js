exports.getAvatarName = (name) => {
    const arr = name.split(' ')
    return `${arr[0][0]}${arr[1][0]}`
}


exports.getBGColor = (name, players) => {
    const team = players.filter(pl => pl.name === name)[0].team
    if (team === 'England') return '#15295e'
    if (team === 'Australia') return '#00843D'
}


exports.questionAnswered = (question, guesses) => {
    if (question.name === 'bigHitters' || question.name === 'fullStraight') {
        const answers = Object.values(guesses[question.name])
        return answers.length === 2 ? true : false
    } else {
        return guesses[question.name].length ? true : false
    }
}