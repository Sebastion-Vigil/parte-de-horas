# React Timesheet App
 - DO NOT PUSH TO GITHUB 'TILL NEW YEAR'S DAY, YA HEARD?
 - DO NOT EVEN COMMIT LOCALLY YO!
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
 - Calculate hrs worked in DaySum
   * _should perform calculation automatically as fields are filled in?_
   * need f() that uses vals arr
     - likely best put in useEffect
       * console.log in useEffect correctly displays most recent state
     - 0 = dayStart
     - 1 = lunchStart
     - 2 = lunchEnd
     - 3 = dayEnd
     - need a day total var in DaySum
 - Make button that calcs & displays biweekly total when clicked
   * Not certain but likely to go in Timesheet
   * 2nd guessing this; perhaps go w/auto display all the way
 - Sanitize input 
   * ~~Make a single f() that handles all possible edge cases~~
   * _keep peepin' game for ze bugz yo_
 - Splice & dice 2 make h/m vars & interpolate ":" between
   * _gonna skip 4 now & move on to calculating hrs worked in DaySum_
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
  - https://stackoverflow.com/questions/33383840/is-there-a-javascript-equivalent-of-the-python-pass-statement-that-does-nothing#33383865
  - https://overreacted.io/a-complete-guide-to-useeffect/
  - https://dirask.com/posts/React-editable-table-cell-after-mouse-click-DWeBEj
  - https://dirask.com/posts/React-change-state-from-props-functional-component-prKRbj
  - https://dirask.com/posts/React-create-dynamic-editable-table-DNKArp
  - https://stackoverflow.com/questions/26518629/dynamically-rendering-a-react-component
  - https://stackoverflow.com/questions/42083181/is-it-possible-to-return-empty-in-react-render-function
  - https://bobbyhadz.com/blog/react-enter-key-submit-form
  - https://react.dev/reference/react-dom/components/input