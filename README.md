#  Work Day Scheduler

## Purpose

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code as per Business Requirements stated below. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. It uses the [Moment.js](https://momentjs.com/) library to work with date and time. 

## How to use

Once the HTML page loads the user can enter or change time entry values and save the entries locally once the pencil button next to the time block is clicked so that all entries persist within the browser.

The time blocks are color coded so that time blocks which have already passed are filled GRAY, the current hour block is filled RED and future time blocks are filled GREEN.

## Business Requirements

### User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### Mock up

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./assets/05-third-party-apis-homework-demo.gif)


## Deployment

### Github

https://github.com/pav1593/work-day-scheduler

### URL

https://pav1593.github.io/work-day-scheduler/
