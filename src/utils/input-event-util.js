// live user input event handler
function interceptInputEvent(input) {
    let maxLen = 4; // 
    input = input.replace(/\D/g, ""); // remove all non number chars 
    // prvnt 0 as 1st dgt
    if (Number(input[0]) < 1) input = input.slice(1, input.length);
    // 1st num cn't B > 1 !(23:44) in 4-digit-frmt; maxLen must B 3
    if (Number(input[0]) > 1) maxLen = 3;
    // 2nd num cn't B > 2 !(13:45) in 4-digit-frmt; maxLen must B 3
    if (Number(input[1]) > 2 && maxLen === 4) maxLen = 3;
    // 2nd num cn't B > 5 !(16:45, 2:65) in either digit-frmt
    if (Number(input[1]) > 5 && (maxLen === 3 || maxLen === 4)) input = input.slice(0, 1); 
    // 3rd num cn't B > 5 !(12:73) in 4-digit-frmt; maxLen must B 3
    if (Number(input[2]) > 5 && maxLen === 4) maxLen = 3;
    // disallow input 2 B > maxLen
    if (input.length > maxLen) input = input.slice(0, maxLen);
    // insert a ":" 
    if (input.length >= 2 && !input.includes(':')) {
      input = input.split('');
      input.splice(-2, 0, ':')
      input = input.join('')        
    }    
    return input;
}
module.exports = { interceptInputEvent };
// https://stackoverflow.com/questions/15361189/how-to-select-all-other-values-in-an-array-except-the-ith-element#15361261
// https://stackoverflow.com/questions/59264119/how-do-i-interpolate-the-value-in-certain-data-point-by-array-of-known-points
// function foo() vs const foo = () => differences/pros/cons 4 each???