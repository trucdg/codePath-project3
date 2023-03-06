# codePath-project2
# Web Development Project 2 - *SWE Flashcards 😎*

## Submitted by: **Truc Duong**

## ⚡️ Inspiration 
In this project, I will be creating a web app for learning some fundamental concepts in the SWE industry.
User will be able to use the study cards in a randomized order.

Time spent: **X** hours spent in total

## 🎯 Goals
By the end of this assignment I will be able to
- [x] Create a new component
- [x] Share a small piece of data from one component to the next
- [x] Utilize `useState()` to create state variables to help control component behavior
- [x] use the `onClick()` event to call a method
- [x] create multiple `div` sections to keep track of different chunks of information
- [x] use those `div` sections as the basis for CSS styling

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contains images in addition to or in place of text
- [ ] Cards have different visual styles such as color based on their category
  - [ ] *visual style implemented*

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- At first, I didn't know where to start, but then I tried sketching out the components and went from there.
- The card flipping CSS animation is kinda cool tbh.

## 🧠 Brainstorming:
- To control the front and back of a flashcard:
  - Create a state variable to keep track of whether the card is flipped to the front or not.
  - Use [inline conditional rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator) to show either the question or answer on the card based on the state variable
- To make flashcards have cool animations for flipping to the front and back: [resource](https://www.w3schools.com/howto/howto_css_flip_card.asp)

## License

    Copyright [2023] [Truc Duong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
