## Events Timeline
Welcome!

First of all I would like to thank you for this awesome test assessment. 
I love front-end development and do it as a test is even more interesting.

### About
The main objective was really just develope a component for visualizing all the events from ``timelineItems.js`` on a timeline.
a panel containing a calendar-like display was created, divided by days, as the instructions stated that hours, minutes, and seconds could be ignored. 
Inside the panel, the calendar was populated with all events. 
Below is a screenshot of the screen:

<p align="center">
  <img src="src/assets/images/timeline.png">
</p>

Features of this project:
- Show the Event's name completely on mouse hover;
- Expand or Shrink the events through the Zoom in/Zoom out button
- Edit the Event's name
- A tooltip that shows the Event's details on mouse hover 

### Run
For install and run this project, run the commands:

```
npm intall
```
and then

```
npm run
```
The project will be shown at the http://localhost:3000 on the browser.

You may notice that the ``run`` command on ``package.json`` was changed.
Since this version of React is old, was necessary to change it on my machine. 
If it is necessary, please change it back to:
```
"start": "react-scripts start"
```

### Developments Details

* Instead of starting the project from scratch, I opted to work on the existing project and follow its established structure. Adaptability is crucial, as starting a legacy project from scratch isn't always feasible. Therefore, to save time and demonstrate adaptability, I utilized the existing structure.

* I really found the instruction "Avoid using libraries that solve too much of the problem" very interesting! I do believe that resorting to libraries before trying to solve problems ourselves may not always be the best approach. So for this project, I didn't install any external libraries. While it's often convenient for developers to rely on libraries, particularly for small projects like this one, it wasn't necessary.

* It took me approximately 30-45 minutes to familiarize myself with the project, plan my approach—including design choices (looking at google images and Pinterest), colors, project structure and make development decisions. Although the recruiter stipulated 2 hours for develop this project, I honestly didn't restrict myself to this timeframe. After two hours of coding, the project was functional, with panels and events correctly placed. But the design was rough and unpolished, and the code wasn't clean due to testing, variable creation, and typical development mess that normally happen in the process. To enhance its visual appeal and ensure clean code, I dedicated an additional 1 hour and approximately 20-30 minutes to refinement.

### Improvements

What would I do if I had more time?

- I said about libraries but I would've installed some of them, for example:
* ``styled-components`` or similar library, to make the styling more dynamic (using variables and conditional style easily), organized and with the possibility to apply global styles that would result in a clever way to implement a switch for dark/light theme, for example.
* `` eslint `` would be useful. Particularly I use eslint in all my projects, it helps us to keep the code clean and avoiding errors.
* ``jest`` or ``cypress``. Actually the first thing i would do if i had more time is including some unit tests to check if everything was correctly rendered and placed well.
- I also would have included a ``Dockerfile`` in case the recruiter does not have a Node.js environment on their computer.
- Implement the drag an drop functionality, as the instructions suggested.
- Would make it responsible / mobile-friendly as well. 
- Would add some animations.