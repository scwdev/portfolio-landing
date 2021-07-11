# portfolio-landing

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete

## Project Description
I have two main concepts that I'd like to integrate, though I'm concerned #2 may be too big of a bite at this time in my studies:
	1) I would like my portfolio landing page to be a a dynamic onesheet, using links, transitions, and maybe an <iframe> or two in place of scrolling
	~~2) I want to try to implement non-rectangular or even trapezoidal design using some combination of transform:skew/rotate and clip-path. Doing this in conjunction with reactive design as well as grid and flexbox will be... a challange.~~
	2b) After a lot of concept research time, we're gonna stick with a (probably) parallelogram design. Short term goal: 'randomly' destributed tiles on a grid. Long term: actually randomise the tile positions with each reaload. Checkerboard kinda idea.


## Portfolio I want to Emulate

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [https://www.marcomarino.design/project.html](https://www.marcomarino.design/project.html) | onesheet without scrolling. minimalist |
|[https://designthat.works/project/hykoo](https://designthat.works/project/hykoo) | landing page with lots of negative space |
| [https://codepen.io/hexagoncircle/pen/yOwvQV](https://codepen.io/hexagoncircle/pen/yOwvQV) |  `skewed` flexbox with hover effects |


---

## Wireframes

#### Gotta make them darn wireframes.

## Time/Priority Matrix 
List of features:
* a) Checkerboard grid (mobile first)
  - b) Reactive: Phone size 3x6 squares. Larger viewports = more squares.
* c) Hamburger for mobile, which will populate navbar to grid squares.
* d) functional nav links
  - about me, contact form, linkedin, resume
* e) "nav" for larger format will be links dispersed on the checkerboard
* f) project placeholders/previews (snapshots first)
  - g) long term <iframe> based tiles that transition to fill the screen.
* h) Generate API (placeholder first... need projects!)
* i) Initial logo ('blankSpace')
  - j) display on white sheet then transition effect to checkerboard
* k) hover effects over each tile.
* l) Transition effects for clicking tiles.
* m) Loooow priority - randomly assigned tile positions.
* noteverngonnarankit) Dream big feature (like really big): gamify the checkerboard somehow (like a 'chessmode' switch).

![Image of time/priority matrix](./img/time_priority_matrix.png)


### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  


#### MVP (examples)
- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase


#### PostMVP 
- Anything else that is not MVP


## Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.


#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | hr |
| Project Previews | H | 3hr | hr |
| Regular Nav | H | 1hr | hr |  
| Adding Form | H | 1.5hr|  hr | 
| Other sections and flex| M | 3hr | hr|
| Working with API | H | 3hrs|  hr | 
| Responsive | H | 3hr | hr | hr |
| Social Media Icons | L | 1hr |  hr |
| Total | H | 15.5hrs| hrs |


#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover | L | 3hr | -hr | hr |
| Banner letters wiggle | L | 1hr | hr |
| Interactive Banner | M | 4hr | hr |
| Materialize | H | 4hr | -hr | hr |
| Bootstrap | H | 4hr | hr |
| Make own icon | L | 4hr | hr |
| Total | H | 20hrs| hrs |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 


## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description  
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```


## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object