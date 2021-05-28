/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

let query = window.location.search;
console.log(query)

let url_params = new URLSearchParams(query);
let a = url_params.get("a")
console.log(a)


let card_desc = [
    "Mentally search for instances that have brought you happiness and contribute to your self-love whenever you feel overwhelmed",
    "Consider doing positive affirmations! Invest time in the things you love",
    "Self care is not always pretty and that is okay! Taking care of yourself can require hard work",
    "The harder, perhaps hardest part about well-being is that you have to work for it every single day.",
    "Repeat after me: I am NOT broken! I deserve to love myself",
    "Taking breaks, in my experience, is almost never a bad thing! One needs breaks to be at peace with oneself",
    "Sometimes, all that you can do is just allow yourself to feel",
    "Never feel guilty of your emotions. They are valid, and so are you!",
    "I challenge you to look at yourself in the mirror every morning and smile to yourself. Keep looking for happiness even if they are in the smallest of corners",
    "Everything happens on its own time, even if we might not initially see it.",
    "You do not have to have your entire future figured out. All that matters is that you woke up today.",
    "Understand that your feelings are valid, so please have faith that things can and will get better someday if we set our minds to it!",
    "Repeat after me! This is MY academic journey, so do not expect it to me the same as everyone elses!",
    "Just keep going, to be honest. Your grades are just something to reflect on what you can do better next time.",
    "You are doing your best...even if it may not feel like it. If you do not feel like you are doing your best, then consider the facts and push for healthy ways to be better!",
    "Your scores are just numbers on paper. Keep going! Your story does not end here.",
    "Please, reach out to your loved ones, even the smallest message could go so incredibly far…",
    "Find ways to stay connected with your friends and family! Try sharing things that remind you of them.",
    "Try to do something that excites you every weekend or whenever possible, something to look forward to!",
    "Cuddle with your pets if you have any, and check in on your friends!"

]
let index_val = parseInt(a)


document.getElementById("resourceHeadingText").innerText = card_desc[index_val]
try {
    document.getElementById("resourceHeadingText-1").innerText = card_desc[index_val + 1]
    document.getElementById("resourceHeadingText-2").innerText = card_desc[index_val + 2]
    document.getElementById("resourceHeadingText-3").innerText = card_desc[index_val + 3]
}
catch (error) {}

function myFunction() {
    console.log('myFunction')
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    $('.resource').toggleClass('smallpost')
  }