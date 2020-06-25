## Requirement Recap 

The app is based on the idea of a work contract negotiation: Employer and employee enter
salary values and the app tells if the expectations meet.

1. The interface of the app consists of two tabs: one for the employee and one for the
employer. Each tab contains an input box which only accepts numbers, and a “Submit”
button. 
1. Once a value has been entered and submitted, the input field of the tab disappears.

1. The employer enters how much she is willing to pay maximally. The employee enters how
much he expects to be paid minimally. As soon as both inputs have been submitted, a modal
window pops up and shows either “Success!” or “Failure!”, as well as the entered values.

1. “Success” is only if the employee’s **minimum pay is equal to or below the employer’s
maximum pay**. Otherwise the input is considered a “Failure”.

1. The modal window should also show the current temperature in London, using data from the
the https://openweathermap.org/current API. (Because why not.)
The wireframes below are for illustration of the idea and not intended to be an exact
template.

### Implementation Notes
 We do not evaluate on UI design. You do not have to apply styling beyond making
things recognizable. If your app looks different than in our wireframes, that’s okay.
  1. The app should be built as a Single Page Application in vue.js.
  1. You are free to use a framework such as bootstrap, but you are not required.
  1. It is enough to target the newest version of chrome.
  1. The code should be completely refactored.
  1. Please add tests to your code.
  1. Please include notes how your code and the tests should be run.
Have Fun!

## So Testing feedback 

 - user could enter negative values 
 - 1000 000 & 1000 000 give a failure result why ?
 - 1.2 and 1.3 give a sucess result . why ?
 - max offer 23 . expectations 20 . we get failure . why ? 
 - application is goin to unrecoverable state . how user could repeat operation 
 - form disapire in a moment of submit
