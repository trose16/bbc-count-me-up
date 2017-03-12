As producers of a popular BBC talent show, so that we may avoid a 2017 Oscar Best Picture "moment" we wish to have our presenter accurately announce a winner. We need Count Me Up to receive, validate, distribute, calculate, update and clearly report the votes cast for our candidates.

## Technologies and Setup

Get node.js
> Backend model layer/business logic

>$ node -v

> if node: command not found

> $ brew install node

Set up server to view project on localhost
>$ cd root/of/your-project/

> $ node node_modules/http-server/bin/http-server

>clear data/cache regularly when mystery problems occur or use private browsing

TDD unit testing
>jasmine javascript testing framework

>  run SpecRunner.html in browser of choice to see tests

Manual feature testing (jQuery UI/console)
>For this basic MVP I use index.js to instantiate model objects and set the variables pre-loaded in index.html for UI manual testing of jQuery.  Add/update candidates, change users, and test calculations of votes prepopulated in browser by updating this file.




## My Process
*Before writing a line of code I imagined the project being used in a real scenario (the Oscar thing seemed to be a fun coincidence). Followed up by developing more user stories based on the brief given and diagrammed a bit on paper. The bolded text indicates where I derived my objects and messages*

Additional user stores
> As a viewer of a BBC popular live talent show...
So that the candidate of my choice has a chance of winning,
**I would like to *cast my vote* for a candidate**

> • As a candidate of a BBC popular live talent show...
So that I may win the contest,
**I would like to *receive user votes.***

> • As a BBC television presenter of a popular live talent show...
So that I may accurately report the number of votes cast by our audience,
**I would like to see the *total votes* cast for all candidates by users of Count Me Up.**

> • As a BBC television presenter of a popular live talent show...
So that I may accurately report each candidates score,
**I would like Count Me Up to display *vote percentage* per candidate.**

> • As a BBC television presenter of a popular live talent show...
So that I may accurately report each candidates score,
**I would like to see the *vote numbers* per candidate.**

> • As a BBC television presenter
So that I may accurately report the leading candidate on live TV,
**I would like to each candidate *score update* at (or close to) real time**
