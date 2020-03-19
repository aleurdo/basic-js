module.exports = function createDreamTeam(members) {
    let teamName = [];
    if (Array.isArray(members)) {
        members.forEach(el => {
            if (typeof el === "string") {
                teamName.push(el.toUpperCase().split(' ').join('').slice(0, 1))
            }
        });
        return teamName.sort().join('');
    } else {
        return false
    }
};