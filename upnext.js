
console.log(" UPNEXT SCRIPT running");
const wrapper = document.getElementById('upNextWrapper');
const container = document.getElementById('upnextContainer');

setTimeout(function(){
  wrapper.classList.add('open');
  container.classList.add('open-banner');
}, 600);
