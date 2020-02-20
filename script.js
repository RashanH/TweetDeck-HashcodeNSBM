// ==UserScript==
// @name         TweetDeck
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tweetdeck.twitter.com/
// @grant        none
// ==/UserScript==


setTimeout(function() {
    document.getElementsByClassName("js-column")[0].style.width="33%";
    document.getElementsByClassName("js-column")[1].style.width="33%";
    document.getElementsByClassName("js-column")[2].style.width="33%";

    document.getElementsByClassName("js-column-header")[0].style.display="none";
    document.getElementsByClassName("js-column-header")[1].style.display="none";
    document.getElementsByClassName("js-column-header")[2].style.display="none";

    //document.getElementsByClassName("js-app-header")[0].style.display="none"; //don't

    var h1 = document.createElement('h1');
    var content = document.createTextNode('#HashCodeNSBM #HashcodeLK #HashCode');
    h1.appendChild(content);
    h1.style.textAlign = "center";
    h1.style.padding = "30px";
    h1.style.color = "#000000";
    h1.style.fontsize = "36px";
    h1.style.fontweight = "500";
    document.getElementsByClassName('js-app-columns')[0].prepend(h1);
}, 6000);
