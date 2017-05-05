console.log("hello");
var div = document.getElementById("count");
var count = 0;
var clear = true;
var open = false;


console.log("hello2");
window.addEventListener('scroll', function(e) {
    console.log("hello3");
    var top = div.getBoundingClientRect().top;
    console.log(top);

    if (top <= 220 && clear) {
        console.log("hello4");
        clear = false;
        div.style.transform = "scale(1.3)";
        var id = setInterval(function(e) {
            count += 10;
            div.firstElementChild.innerHTML = count + "";
            console.log("here");
            if (count >= 200) {
                clearInterval(id);
                console.log("Clearedscbdhbhjadbchja");
            }
        }, 100);
    }
});
