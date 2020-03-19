module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return Array.isArray(arr) ? arr.reduce((acc, el) => Math.max(this.calculateDepth(el), acc), 0) + 1 : 0

    };

}