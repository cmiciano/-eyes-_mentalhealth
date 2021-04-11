/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

let query = window.location.search;
console.log(query)

let url_params = new URLSearchParams(query);
let a = url_params.get("a")
console.log(a)


let card_desc = [
    "test_string1",
    "test_string2",
    "test_string3",
    "test_string4",
    "test_string5",
    "test_string6",
    "test_string7",
    "test_string8",
    "test_string9",
    "test_string10",
    "test_string11",
    "test_string12",
    "test_string13",
    "test_string14",
    "test_string15",
    "test_string16",
    "test_string17",
    "test_string18",
    "test_string19",
    "test_string20"

]
let index_val = parseInt(a)


document.getElementById("resourceHeadingText").innerText = card_desc[index_val]
try {
    document.getElementById("resourceHeadingText-1").innerText = card_desc[index_val + 1]
    document.getElementById("resourceHeadingText-2").innerText = card_desc[index_val + 2]
    document.getElementById("resourceHeadingText-3").innerText = card_desc[index_val + 3]
}
catch (error) {}