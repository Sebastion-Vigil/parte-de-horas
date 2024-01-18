# React Timesheet App
## MVP
 - To be a complete MERN app when finished
 - User will be able to register & create account
 - User will be able to save timesheet as downloadable PDF
 - Each user can only see own content
 - Single supervisor account available in addition to multiple user accounts
   * _will have access to timesheets for all users_
   * _will also have own timesheet space like normal user_
 - Standard time (AM/PM) input/output
   * _converts to military time behind scenes for easier calculation_
   * _outputs standard time back to user_

## TODO
 - ~~Splice & dice 2 interpolate ":" between~~
   * will keep peepin game, but no bugz found as of yet
   * _necessary before DaySum calc to avoid having to restructure f()s in time-util_
   * now time 2 import conversion f()s & calculate yo!
 - Calculate hrs worked in DaySum
   * _should perform calculation automatically as fields are filled in?_
   * need f() that uses vals arr
     - likely best put in useEffect
       * console.log in useEffect correctly displays most recent state
     - 0 = dayStart
     - 1 = lunchStart
     - 2 = lunchEnd
     - 3 = dayEnd
       * dayTotal = dayEnd - dayStart - (lunchEnd - lunchStart)

     - need a day total var in DaySum
 - Make button that calcs & displays biweekly total when clicked
   * Not certain but likely to go in Timesheet
   * 2nd guessing this; perhaps go w/auto display all the way
 - Sanitize input 
   * ~~Make a single f() that handles all possible edge cases~~
   * _keep peepin' game for ze bugz yo_
 - In DaySum.js, make date and total Cells their own module and import
   * _3 separate cell-type components ok @ 1st_
   * _refactor to single adjustable cell component in future, if possible_
 - Start tinkering/pseudocoding/planning backend (MongoDB)

### Component Heirarchy
  - --0 Timesheet
  - ----1 Week
  - ------2 DaySum
  - --------3 Cell

### Brainstorm
  - Now have regex pattern that allows chars "0-9" and ":"
    * wonky as all Sam Hill; need 2 refine
    * _currently using JS regex method .replace()_
    * _explore & experiment w/other JS regex methods_
  - Check which of AM/PM user selected?
    * _need for converting to military time_
  - New State/Vars needed in DaySum.js
    * vals arr, i.e., ['', '', '', ''], is what we working with
      - need 2 console.log() & tinker
      - if undefined, assign 0 to tmp var
    * ~~DayStart~~
    * ~~DayEnd~~
    * ~~LunchStart~~
    * ~~LunchEnd~~
    * ~~DayTotal~~
  - Other Edge Cases
    * Day/Lunch start time must be earlier than respective end time
    * Ensure congruency of AM/PM selection
      - e.g., DayStart = 8:00AM then
        * next Cell auto-change to PM if >= 12:00 (e.g., LunchStart)
        * DayEnd should be PM only if LunchStart/End already PM
    * Disallow user input for DayEnd Cell if LunchEnd blank
      - LunchEnd will count as DayEnd by default
      - Alert/inform user forgetting to clock back in from lunch

### Helpful links
### f you want to convert standard time to military time, add 1200 to any time from 1:00pm to 11:00pm.
  - https://stackoverflow.com/questions/5570820/regex-allow-digits-and-a-single-dot
  - https://regexr.com/
  - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
  - https://stackoverflow.com/questions/33383840/is-there-a-javascript-equivalent-of-the-python-pass-statement-that-does-nothing#33383865
  - https://overreacted.io/a-complete-guide-to-useeffect/
  - https://dirask.com/posts/React-editable-table-cell-after-mouse-click-DWeBEj
  - https://dirask.com/posts/React-change-state-from-props-functional-component-prKRbj
  - https://dirask.com/posts/React-create-dynamic-editable-table-DNKArp
  - https://stackoverflow.com/questions/26518629/dynamically-rendering-a-react-component
  - https://stackoverflow.com/questions/42083181/is-it-possible-to-return-empty-in-react-render-function
  - https://bobbyhadz.com/blog/react-enter-key-submit-form
  - https://react.dev/reference/react-dom/components/input


### Conversion Pseudocode
Problem Statement:

Given a time in the 12-hour AM/PM format (hh:mm:ssAM or hh:mm:ssPM), we need to convert it to the military (24-hour) time format.
Algorithmic Approach:

To solve the “Time Conversion” problem, we can follow the following algorithmic approach:

    Parse the input time string to extract the hours, minutes, seconds, and the AM/PM indicator.
    If the time is in the AM period and the hours are 12, set the hours to 0 to represent midnight.
    If the time is in the PM period and the hours are not 12, add 12 to the hours to convert it to the 24-hour format.
    Convert the hours, minutes, and seconds to strings and pad them with leading zeros if necessary.
    Concatenate the converted hours, minutes, and seconds, separated by colons, to form the military time string.