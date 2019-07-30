Feature: Show and Hide an Event Details

Scenario: By default an event element should be collapsed
Given no event element is selected
When the user browses through the event list
Then the event element should be collapsed to show the list of events to the user.

Scenario: A user should be able to expand an event to see its details
Given the event list is open
When the user clicks on the event
Then the user should receive the expanded event details.

Scenario: A user should be able to collapse an event to hide its details
Given an event element is expanded
When the user closes the element
Then the selected event element should collapse to show the user the list of events.