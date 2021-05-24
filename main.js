// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  // Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
  // modal is the section of the error display that needs to be hidden
  // console.log(modal) grabs modal error section
  // hides the error message when page first loads
  // Display the error modal by removing the .hidden class
  // Display the server error message in the modal
  const modal = document.querySelector("#modal")
  // When a user clicks on an empty heart:
  // Change the heart to a full heart
  // need to select all of the hearts using querySelectorAll
  const hearts = document.querySelectorAll("span.like-glyph")
  hearts.forEach(function(heart) {
    // make a server call
    // add an eventlistener to each heart
    heart.addEventListener("click", event => {
      // Invoke mimicServerCall to simulate making a server request
      mimicServerCall()
      // when successful, change heart
      // Add the .activated-heart class to make the heart appear red
      // use promise that have .then() with 2 conditions we can use
      .then(() => {
        if (heart.innerHTML == EMPTY_HEART) {
          heart.innerHTML = FULL_HEART
          heart.className = "activated-heart"
        //do something with our response
        } else {
          // if empty, make full, add new class and make heart appear red
          // else if full, make empty
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }
      })
      // When the "server" returns a failure status:
      // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
      .catch(error => {
        // Display the error modal by removing the .hidden class
        modal.hidden = false
        // Display the server error message in the modal
        const modalMessage = document.querySelector("#modal-message")
        modalMessage.innerHTML = error
        // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
        // When the "server" returns a success status:
        setTimeout(() => {
          // do this during time out
          modal.hidden = true
        }, 3000)
        })
      })
    })
  })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
