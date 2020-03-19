const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(string) {
    if (string == undefined || typeof string != "string")
        return false;
    let per = parseFloat(string);
    if (Number.isNaN(per) || per > 15 || per <= 0)
        return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / per) / (0.693 / HALF_LIFE_PERIOD));
};