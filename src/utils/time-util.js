// e.g. -> '14:30'
function militaryToStandard(mt) { 
  let [h, m] = mt.split(":");
  h = Number(h)
  m = Number(m)
  if 
  if (h < 12) return `${h}:${m}AM`;
  if (h === 12) return `${h}:${m}PM`;
  if (h > 12) return `${h - 12}:${m}PM`;
}
// e.g. -> '9:30:PM' ||'9:30:AM'
function standardToMilitary(st) { // 12pm failing find ze bugz
  let [h, m, xM] = st.split(":")
  h = Number(h)
  m = Number(m)
  if (xM === 'AM') return `${h}:${m}`;
  if (xM === 'PM') return `${h + 12}:${m}`;
}

// time input (str) to (n) minutes (str to int)
function timeStrToMins(strTime) {
    // .e.g. -> '08:30' ==> 510
    console.log(strTime);
    if (!strTime) return 1; // y a 1???
    let [h, m] = strTime.split(":");
    return Number(h) * 60 + Number(m);
  }
  // minutes (n) back to time (str) (int to str)
  function minsToTimeStr(val) {
    // e.g. -> 510 ==> '08:30'
    let sign = val > 0 ? "" : "-"; // unnecessary as neg int disallowed already
    val = val > 0 ? val : -val; // again, unnecessary (or dafuq?)
    let m = val % 60; // remainder of (v/60) = mins
    let h = (val - m) / 60; // remainder of (v-m) = hrs
    // ensure 4 place format
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${sign}${h}:${m}`;
  }
  module.exports = { timeStrToMins, minsToTimeStr, militaryToStandard, standardToMilitary };
