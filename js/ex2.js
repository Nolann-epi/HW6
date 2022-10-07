/* Tutorial 4
   Example 2 JavaScript code
*/


const displayText400 = () => {

    const text = Array.from(document.getElementsByClassName("400level"));
    for (let i = 0; i < text.length; i++) {
        console.log(text[i].textContent);
      }
}

displayText400();