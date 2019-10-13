## Multi-step form

### Requirements

Q2.
Create a multi-step form that satisfies the following requirements.
-> An initial page with 2 options that accepts the user if he/she wants to signup with email or phone number
On submit of this page, it should transition to the multi-step form with the following fields
-> Step 1: will have name, email and password if user selected signup by email. Else it should have name, phone number and password.
Step 1 should have a next button that goes to step 2
-> Step 2: will have date of birth, street address and best time to contact (this should use the timepicker).
Step 2 should have a back button that goes back to step 1 and a submit button that goes to step 3
-> Step 3: a page that displays everything the user provided in steps 1 and 2.

Additional requirements:
Ensure each step is valid before proceeding to the next (all fields are required).
Step 2 should have submit button

#### Available Scripts

In the project directory, you can run:

##### yarn start

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### yarn test

Launches the test runner in the interactive watch mode.<br />
