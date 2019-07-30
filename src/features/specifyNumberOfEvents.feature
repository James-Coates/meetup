Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user has not specified a number of events
When the user browses through the event list
Then 32 events should be shown to the user.

Scenario: User can change the number of events they want to see
Given the events list is open
When the user selects the number of events
Then the selected number of events should be shown to the user.