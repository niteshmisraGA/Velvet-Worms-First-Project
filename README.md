# Project Overview
## Project Name
"Ask The Universe"

## Project Description

In this project I will create a site that will 'answer' a question with either a 'Yes' or 'No' accompanied with an embedded GIF.  A user's will be confirmed as a question by checking for the presence of a '?'. User input will be confirmed as a question before the answer is given to the page.

## API and Data Sample

I will be using the "YesOrNo" API: http://yesno.wtf/api/

Sample JSON: 
    
    "answer": "yes",
    "forced": false,
    "image": "https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"
}


## Wireframes

Mobile:
![VelvetWormsProj1 - Phone](https://user-images.githubusercontent.com/92720179/140709396-6795d6f5-dda4-40b4-9c03-4caf8e06cb54.png)


Desktop:
![VelvetWormsProj1 - Window](https://user-images.githubusercontent.com/92720179/140709630-399c6696-43cf-403d-8e8e-52abe5f65921.png)


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Get data from external API
- Take in user input and do a conditional check
- Render data on page if user input meets a condition

#### PostMVP  

- Add second API to expand GIF choices
- Use local storage to save user favorites
- Implement AI complex enough to answer questions more complex than a yes or no.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov. 6-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov. 8| Project Approval | Complete
|JNov. 8| Core Application Structure (HTML, CSS, etc.) | Complete
|Nov. 9| Pseudocode / actual code | Complete
|Nov. 10| Initial Clickable Model  | Complete
|Nov. 11| MVP | Complete
|Nov. 12| Presentations | Incomplete

## Priority Matrix

-Complete HTML skeleton

-Build primary function of site in JS: question input and API return

-Secondary Function: If user input isn't a question display an error gif and message.  Store previous question locally.

-Heavy CSS design: Stylize site logo, site text.

![Priority Matrix Template](https://user-images.githubusercontent.com/92720179/140712354-c13bee0d-bb2e-49b5-bb04-8a97fea1a2e1.jpg)


## Timeframes
 


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 4hrs| 4hrs | 4hrs |
| Working with API | H | 3hrs| 3.5hrs | 3.5hrs|
| Initial JS | H | 5hrs| 5.5hrs | 5.5hrs |
| CSS Styling | H | 5hrs|8hrs |8hrs |
| non-MVP Goals | M | 5hrs| N/A | N/A |
| Total | H | 22hrs| 21hrs| 21hrs|

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description. I'm particularly fond of this function.  It is admittedly a bit chunky but its gone thru several iterations and it includes a few intricate functions.

```
async function getAnswer(event) {
  try {
    event.preventDefault();
    removeOldError();
    removeOldImages();
    let isQuestion = questionBox.value;
    if (isQuestion.includes('?')) {
      let yesOrNo = await axios.get(`https://boiling-mountain-84087.herokuapp.com/http://yesno.wtf/api`);
      let answer = yesOrNo.data;
      console.log(answer);
      displayAnswer(answer);
    } else {
      notAQ();
    }
```

## Change Log
 Since the space that the GIFs occupy tends to vary GIF-to-GIF, centering the answer on them was near impossible.  I instead chose to stack the answer and GIF (API data). It ended up looking cleaner anyway in my opinion.

 The "slogan" located below the sites name was originally going to live elsewhere on the site, but it looks much cleaner as a sort of subtitle.

 The input box was going to read "What's on your mind?" But I received advice to clue users in to the fact that they needed to ask a yes or no question, and the input box seemed like the best place to do that.   