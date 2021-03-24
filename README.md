# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Bennie**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/conscious-nine-rhinoceros

## Required Functionality

The following **required** functionality is complete:

* [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Y] Game buttons each light up and play a sound when clicked. 
* [Y] Computer plays back sequence of clues including sound and visual cue for each button
* [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Y] User wins the game after guessing a complete pattern
* [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Y] More than 4 functional game buttons
* [Y] Playback speeds up on each turn
* [Y] Computer picks a different pattern each time the game is played
* [Y] Player only loses after 3 mistakes (instead of on the first mistake)
* [Y] Game button appearance change goes beyond color (e.g. add an image)
* [N] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Y] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [Y] Being able to select a difficulty level which change the amount of blocks present and the turns

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Easy Implementation (demo version)
![Easy Implementation (demo)](https://cdn.glitch.com/0784fea6-6d08-44c6-aea7-e5c53d486836%2Fmemgame.gif?v=1616621503359)
Different Modes
![Different Modes](https://cdn.glitch.com/0784fea6-6d08-44c6-aea7-e5c53d486836%2Fdiff_levels.gif?v=1616621623633)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://htmlcolorcodes.com/color-picker/
https://www.w3schools.com/js/js_loop_for.asp
https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
https://stackoverflow.com/questions/13358887/should-i-use-hasclass-before-addclass
https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
My old Node.js project

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One of the problems was getting the images to work with the program since using a relative path to the folder did not seem to work. Instead of using the relative path, I had to use
a link that was provided with the image in the assets folder inside. This solution works but it makes the code very long and takes up a lot of space and makes it hard to read. When 
try to make each button attached to a class (easy, median, hard) and trying to change the hidden class for each, the class was not detected. I had to manually change the hidden class 
in each buttons. I made a method that took in the number of buttons to change and a flag, which was used to determine if the hidden field is being removed or added. One of the hardest
things to implement and display was the timer. I was unable to start the timer after the delay and when the timer was counting down, it stopped at 2 instead of 0. Instead of checking
when second == 0 I changed that to second == -2 to account for this change so it is aligned with the timer. Another problem I had was trying to give the user enough time for all 3 levels
since the timer started before all the clues were played out. I increase the time allowed to account for the time it might take for the clue to play, and since the time left is longer
for higher levels, the difficulty is increased.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I want to learn how to effectively debug since using console.log was not really effective and some of the bugs pointed out were vague. In addition, I am interest if it is possible
to put python or java implementations into websites. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would spend the time trying to refactor a lot of the code. I want to make the code more modular instead of having a function for each difficulty level. I had some modularity
in the code but I think it can better. In addition, I want to have the difficulty levels be different, in terms of the time allowed. I also want to change more elements of the 
website such as having a background and centering everything. One of the problems I found was the user can also guess moves while the playClueSequence() was still running and 
one change would be making it disabled during the duration.



## License

    Copyright Bennie Chen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.