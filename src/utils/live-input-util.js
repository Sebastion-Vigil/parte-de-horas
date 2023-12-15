function interceptLiveInput(input, newMaxLen) {
    if (Number(input[0]) < 1) input = input.slice(0, 0);
    if (Number(input[0]) > 1) newMaxLen = 3;
    if (Number(input[1]) > 2 && newMaxLen === 4) newMaxLen = 3;
    if (Number(input[1]) > 5 && (newMaxLen === 3 || newMaxLen === 4)) input = input.slice(0, 1);
    if (Number(input[2]) > 5 && newMaxLen === 4) newMaxLen = 3;
    if (input.length > newMaxLen) input = input.slice(0, newMaxLen);
}

module.exports = { interceptLiveInput };