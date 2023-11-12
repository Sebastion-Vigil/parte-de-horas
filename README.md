# parte-de-horas
  - https://dirask.com/posts/React-editable-table-cell-after-mouse-click-DWeBEj
  - https://dirask.com/posts/React-change-state-from-props-functional-component-prKRbj
  - https://dirask.com/posts/React-create-dynamic-editable-table-DNKArp
  - https://stackoverflow.com/questions/26518629/dynamically-rendering-a-react-component
  - https://stackoverflow.com/questions/42083181/is-it-possible-to-return-empty-in-react-render-function
  - https://bobbyhadz.com/blog/react-enter-key-submit-form
  - https://react.dev/reference/react-dom/components/input

## Component Heirarchy:
--0 Timesheet
----1 Week
------2 DaySum
--------3 Cell

### Nxt:
 - ~~Make f() that converts military time to standard time & vice versa~~
   * ~~This way can present standard time to user...~~
   * ~~...& calculate w/military time (easier) behind the scenes~~
 - ~~Send Cell data ^ 2 DaySum~~
 - ~~try 2 remove bttn in Cell & + type='submit' c if worky~~
 - ~~Allow user to select AM/PM~~
 - ~~Lift am/pm state & functionality up from Cell to parent DaySum~~
 - Intercept input
 - Make regex pattern 2 clean input 
   * (Only Ns allowed)
 - Insert a ":" between hrs/mins