
console.log(" UPNEXT SCRIPT running");
let article = document.getElementsByTagName('body')[0],
    wrapper = document.getElementById('upNextWrapper'),
    container = document.getElementById('upnextContainer'),
    shown = false,
    launchScrollPercentage = 50;
if (document.referrer.indexOf('google.com') > -1 || document.referrer.indexOf('bing.com') > -1 || document.referrer.indexOf('yahoo.com') > -1 || document.referrer.indexOf('facebook') > -1 || document.referrer.indexOf('twitter') > -1 ) {
    launchScrollPercentage = 25;
}
window.onscroll = function() {checkToShowBanner()};
function checkToShowBanner() {
    if(!shown && (window.scrollY > (article.offsetHeight * (launchScrollPercentage/100)))) {
        shown = true;
        showBanner();
    }
}
function showBanner() {
    wrapper.classList.add('open');
    setTimeout(function(){
        container.classList.add('open-banner');
    }, 250);
}
