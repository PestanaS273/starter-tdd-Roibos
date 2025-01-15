Feature: Moving forwardScenario: 

Moving forward when facing North

Given A rover with position (x=0, y=0) facing North

When rover goes forward

Then The Rover position is (x=0, y=1) facing North


Moving forwardScenario:

Given a rover with position (x=0, y=0) facing South

When rover goes forward

Then the Rover position is (x=0, y=-1)


Moving forwardScenario:

Given a rover with position (x=0, y=0) facing West

When rover goes forward

Then the Rover position is (x=-1, y=0)


Moving forwardScenario:

Given a rover with position (x=0, y=0) facing East

When rover goes forward

Then the Rover position is (x=1, y=0)



