# React Timesheet App

## Basic MVP Outline
 - So I've been building a timesheet...
 - To be a complete MERN app when finished
 - User will be able to register & create account
 - User will be able to save timesheet as downloadable PDF
 - Each user can only see own content
 - Single supervisor account available in addition to multiple user accounts
   * _Supervisor account will have access to timesheets for all users_
   * _Supervisor account will also have own timesheet space like normal user_
 - Standard time (AM/PM) input
   * _converts to military time behind scenes for easier calculation_
   * _converts back to standard time (AM/PM) for user_


## Current Progress:
 - ~~Make f() that converts military time to standard time & vice versa~~
   * ~~This way can present standard time to user...~~
   * ~~...& calculate w/military time (easier) behind the scenes~~
 - ~~Send Cell data ^ 2 DaySum~~
 - ~~try 2 remove bttn in Cell & + type='submit' c if worky~~
   * ~~no worky~~
 - ~~Allow user to select AM/PM~~
 - ~~Lift am/pm state & functionality up from Cell to parent DaySum~~
 - ~~Sanitize input~~
   * totally gots more 2 do here
 - Splice & dice 2 make h/m vars & interpolate ":" between
   * Extrapolate from link above & integrate into Cell.js
 - Make regex pattern 2 clean input
   * Allow only "0-9" & ":" in input 
     - Getting closer:
     - https://stackoverflow.com/questions/21374605/javascript-to-allow-only-numbers-comma-dot-backspace
 - Insert a ":" between hrs/mins
 - In DaySum.js, make date and total Cells their own module and import


## Other Helpful Info

### Brainstorm
  - Input str length min 3 max 4
  - Perhaps move logic check up to DaySum.js?
    * Check for input len < 3 in place
      - refactor alert msg?
    * Check for input len > 4 in place
    * How 2 handle invalid input, e.g., 1300, 3300, 2400?
      - if input str len 4:
        - 1st char can only be 0-1
        - 2nd char only be 0-2
  - Check which of AM/PM user selected?
  - Need to tinker w/default Cell vals
    * Make italic?
    * Prevent default vals from being calculatable
      - (they should only serve as properly formatted examples)
  - New State/Vars needed in DaySum.js:
    * DayStart
    * DayEnd
    * LunchStart
    * LunchEnd
    * LunchEnd
    * DayTotal
  - Other Edge Cases:
    * Day/Lunch start time must be earlier than respective end time
    * Ensure congruency of AM/PM selection
      - e.g., DayStart = 8:00AM then:
        * next Cell auto-change to PM if >= 12:00 (e.g., LunchStart)
        * DayEnd should be PM only if LunchStart/End already PM
    * Disallow user input for DayEnd Cell if LunchEnd blank
      - LunchEnd will count as DayEnd by default
      - Alert/inform user forgetting to clock back in from lunch


### Component Heirarchy
  - --0 Timesheet
  - ----1 Week
  - ------2 DaySum
  - --------3 Cell

### Helpful links
  - https://dirask.com/posts/React-editable-table-cell-after-mouse-click-DWeBEj
  - https://dirask.com/posts/React-change-state-from-props-functional-component-prKRbj
  - https://dirask.com/posts/React-create-dynamic-editable-table-DNKArp
  - https://stackoverflow.com/questions/26518629/dynamically-rendering-a-react-component
  - https://stackoverflow.com/questions/42083181/is-it-possible-to-return-empty-in-react-render-function
  - https://bobbyhadz.com/blog/react-enter-key-submit-form
  - https://react.dev/reference/react-dom/components/input
