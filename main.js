// Defining text characters for the empty and full hearts for you to use later.
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};
// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph");
console.log(articleHearts)
for (const glyph of articleHearts) {
  // console.log(glyph)
  glyph.addEventListener("click", likeCallback);
}

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(){
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function() {
      reject();
    });
}



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
