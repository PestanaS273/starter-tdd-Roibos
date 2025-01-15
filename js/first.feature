Feature: Moving forwardScenario: 

Moving forward when facing North

Given A rover with position (x=0, y=0, N) facing North

When rover goes forward

Then The Rover position is (x=0, y=1, N) facing N


Moving forwardScenario:

Given a rover with position (x=0, y=0, S) facing South

When rover goes forward

Then the Rover position is (x=0, y=-1, S) facing South


Moving forwardScenario:

Given a rover with position (x=0, y=0, W) facing West

When rover goes forward

Then the Rover position is (x=-1, y=0, W) facing West


Moving forwardScenario:

Given a rover with position (x=0, y=0, E) facing East

When rover goes forward

Then the Rover position is (x=1, y=0, E) facing East



