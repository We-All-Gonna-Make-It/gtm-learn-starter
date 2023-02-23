

const buttons = document.getElementsByClassName("addCart")
const test = () => {
    console.log("test")
    window.dataLayer.push({'event': 'testing31'});
}
buttons[1].addEventListener("click", test)
