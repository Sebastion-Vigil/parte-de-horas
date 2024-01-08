// comments w/ " :-) -> " are for Testing & Experimenting, 4 bugs & changes, if needed

// live user input event handler
function interceptInputEvent(input, newMaxLen) {

    // remove all non number chars
    input = input.replace(/\D/g, ""); 
    
    // prvnt 0 as 1st dgt
    if (Number(input[0]) < 1) input = input.slice(1, input.length); // :-) ->  remove "1" frm "10:00" & C ? happns

    // 1st num cn't B > 1 !(23:44) in 4-digit-frmt; newMaxLen must B 3
    if (Number(input[0]) > 1) newMaxLen = 3;

    // 2nd num cn't B > 2 !(13:45) in 4-digit-frmt; newMaxLen must B 3
    if (Number(input[1]) > 2 && newMaxLen === 4) newMaxLen = 3;

    // 2nd num cn't B > 5 !(16:45, 2:65) in either digit-frmt
    if (Number(input[1]) > 5 && (newMaxLen === 3 || newMaxLen === 4)) input = input.slice(0, 1); // :-) -> look 4 edge cases

    // 3rd num cn't B > 5 !(12:73) in 4-digit-frmt; newMaxLen must B 3
    if (Number(input[2]) > 5 && newMaxLen === 4) newMaxLen = 3;
    
    // disallow input 2 B > newMaxLen
    if (input.length > newMaxLen) input = input.slice(0, newMaxLen);

    // tentatively testing interpolation of ":", i.e., `${h}:${m}`
    if (input.length >= 2 && !input.includes(':')) {
      input = input.split('');
      input.splice(-2, 0, ':')
      input = input.join('')        
    }
    
    
    return [input, newMaxLen];
}

module.exports = { interceptInputEvent };

// https://stackoverflow.com/questions/15361189/how-to-select-all-other-values-in-an-array-except-the-ith-element#15361261
// https://stackoverflow.com/questions/59264119/how-do-i-interpolate-the-value-in-certain-data-point-by-array-of-known-points