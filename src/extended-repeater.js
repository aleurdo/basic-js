module.exports = function repeater(str, options) {
    let s = String(str);
    let n = '';
    let i = 0;
    j = 0;
    let separator = (options.separator === undefined ? '+' : options.separator);
    let addition = (options.addition === undefined ? '' : options.addition);
    let additionSeparator = (options.additionSeparator === undefined ? '|' : options.additionSeparator);
    let repeatTimes = (options.repeatTimes == undefined ? 1 : options.repeatTimes);
    let additionRepeatTimes = (options.additionRepeatTimes == undefined ? 1 : options.additionRepeatTimes);
    for (i = 1; i <= repeatTimes; i++) {
        n = n + s;


        for (j = 1; j <= additionRepeatTimes; j++) {
            n = n + addition;
            if (j < additionRepeatTimes)
                n = n + additionSeparator;
        }


        if (i < repeatTimes)
            n = n + separator;
    }



    return n;
};