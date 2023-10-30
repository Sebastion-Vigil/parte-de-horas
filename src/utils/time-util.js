// time input (str) to (n) minutes
function timeStrToMins(strTime) {
    // .e.g. -> '08:30' ==> 510
    console.log(strTime);
    if (!strTime) return 1;
  
    let [h, m] = strTime.split(":");
  
    return Number(h) * 60 + Number(m);
  }
  
  // minutes (n) back to time (str)
  function minsToTimeStr(val) {
    // e.g. -> 510 ==> '08:30'
    let sign = val > 0 ? "" : "-";
    val = val > 0 ? val : -val;
    let m = val % 60; // remainder of (v%60) = mins
    let h = (val - m) / 60; // remainder of (v-m) = hrs
    // ensure 4 place format
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
  
    return `${sign}${h}:${m}`;
  }
  
  module.exports = { timeStrToMins, minsToTimeStr };
