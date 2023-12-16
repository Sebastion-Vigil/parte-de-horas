// need to document how worky
// also research splicity dicity
// https://stackoverflow.com/questions/15361189/how-to-select-all-other-values-in-an-array-except-the-ith-element#15361261
// https://stackoverflow.com/questions/59264119/how-do-i-interpolate-the-value-in-certain-data-point-by-array-of-known-points
// no missing edge cases found yet but keep peepin game yo
function interceptInputEvent(input, newMaxLen) {
    input = input.replace(/\D/g, ""); // gonna have to rework this to allow ":"
    // or think where/how else interpolate when answer ready
    if (Number(input[0]) < 1) input = input.slice(1, input.length);
    if (Number(input[0]) > 1) newMaxLen = 3;
    if (Number(input[1]) > 2 && newMaxLen === 4) newMaxLen = 3;
    if (Number(input[1]) > 5 && (newMaxLen === 3 || newMaxLen === 4)) input = input.slice(0, 1);
    if (Number(input[2]) > 5 && newMaxLen === 4) newMaxLen = 3;
    if (input.length > newMaxLen) input = input.slice(0, newMaxLen);
    if (input.length === 3) {
        // interpolate ":" between index 0 & 1
    } 
    else if (input.length === 4) {
        // interpolate ":" between index 1 & 2
    }
    return [input, newMaxLen];
}

module.exports = { interceptInputEvent };