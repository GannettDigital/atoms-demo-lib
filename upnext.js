
console.log(" UPNEXT SCRIPT running");
let article = document.getElementsByTagName('body')[0],
    wrapper = document.getElementById('upNextWrapper'),
    container = document.getElementById('upnextContainer'),
    shown = false,
    launchScrollPercentage = 50;

window.onscroll = function() {checkToShowBanner()};
function checkToShowBanner() {
    console.log(" UPNEXT SCRIPT running");
    if(!shown && (window.scrollY > (article.offsetHeight * (launchScrollPercentage/100)))) {
        shown = true;
        showBanner();
    }
}
function showBanner() {
    console.log(" UPNEXT SCRIPT running");
    wrapper.classList.add('open');
    setTimeout(function(){
        container.classList.add('open-banner');
    }, 250);
}
