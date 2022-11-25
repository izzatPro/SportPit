window.addEventListener('DOMContentLoaded', () =>{
// Tabs
let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabParrent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
    };
    function showTabContent(i = 0){
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    tabParrent.addEventListener('click', function(e){
        const target = e.target;
        console.log(e.target);
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i) =>{
                console.log(item);
                if (target == item){
                    hideTabContent();
                    showTabContent(i);                }
            });
        }
    });
});
