module.exports = function reverse (n) {
    n = String(n);
    if(n.indexOf('-')) {
        return n.split('').reverse().join('');
    } else {
        return n.substring(1).split('').reverse().join('');
    };
};
