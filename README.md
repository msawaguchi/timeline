## Events Timeline
Welcome!

### About
The main objective of this project is develop a component for visualizing all the events from ``timelineItems.js`` on a timeline.
A panel containing a calendar-like display was created divided by days. 
Inside the panel, the calendar was populated with all events. 
Below is a screenshot of the screen:

<p align="center">
  <img src="https://github.com/msawaguchi/timeline/blob/main/src/assets/timeline.png">
</p>

Features of this project:
- Show the Event's name completely on mouse hover;
- Expand or Shrink the events through the Zoom in/Zoom out button
- Edit the Event's name
- A tooltip that shows the Event's details on mouse hover 

### Run
For install and run this project, run the commands:

```
npm isntall
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

* Instead of starting the project from scratch, I opted to work on the existing project and follow its established structure. Adaptability is crucial, as starting a legacy project from scratch isn't always feasible.

* I do believe that resorting to libraries before trying to solve problems ourselves may not always be the best approach. So for this project, I didn't install any external libraries. While it's often convenient for developers to rely on libraries, particularly for small projects like this one, it wasn't necessary.


### Future Improvements

- I said about libraries but I would've installed some of them, for example:
* ``styled-components`` or similar library, to make the styling more dynamic (using variables and conditional style easily), organized and with the possibility to apply global styles that would result in a clever way to implement a switch for dark/light theme, for example.
* `` eslint `` would be useful. Particularly I use eslint in all my projects, it helps us to keep the code clean and avoiding errors.
* ``jest`` or ``cypress``. Actually the first thing i would do if i had more time is including some unit tests to check if everything was correctly rendered and placed well.
- I also would have included a ``Dockerfile`` in case the recruiter does not have a Node.js environment on their computer.
- Implement the drag an drop functionality.
- Would make it mobile-friendly as well. 
- Would add some animations.
