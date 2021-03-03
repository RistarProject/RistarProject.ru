let menuButton = document.querySelector(".icon_burger");

menuButton.onclick = function(){
    document.querySelector(".mwnu_mobile").classList.toggle("menu_active");
};

let tabButton = document.querySelectorAll(".tab");

let tabContent = document.querySelectorAll(".content")

function turnOffTabs(){
    tabButton.forEach(function(tab){
        tab.classList.remove("tab_active");
    });

    tabContent.forEach(function(content){
        content.classList.remove("content_active");
    });
};

tabButton.forEach(function(tab){
    tab.addEventListener("click",function(){
        turnOffTabs();

        tab.classList.add("tab_active");

        let tabId = tab.getAttribute('data-tab');

        let tabContent = document.querySelector(tabId);
        
        tabContent.classList.add('content_active');
    });
});