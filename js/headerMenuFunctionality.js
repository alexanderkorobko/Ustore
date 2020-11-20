'use strict'

import generateSubCatalog from './generateSubCatalog.js';
import getData from "./getData.js";

const catalog=()=>{
    const updateSubCatalog=generateSubCatalog();
    const btnBurger=document.querySelector('.btn-burger');
    const catalog=document.querySelector('.catalog');
    // const btnBurgerCloseMenu=document.querySelector('.btn-close');
    const subCatalog=document.querySelector('.subcatalog');
    const subcatalogHeader=document.querySelector('.subcatalog-header');
    const btnReturn=document.querySelector('.btn-return');
    const overlay=document.querySelector('.overlay');

    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('afterbegin', overlay);


    const openMenu=()=>{
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu=()=>{
        closeSubMenu();
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    };

    const hendlerCatalog=(event)=>{
        event.preventDefault();
        
        let clickedLi=event.target.closest('.catalog-list__item a');
        if(clickedLi){
            getData.subCatalog(clickedLi.textContent, (data)=>{
                updateSubCatalog(clickedLi.textContent, data);
                console.log(clickedLi.textContent);
                console.log(data);
                subCatalog.classList.add('subopen');
            })
        };
        
        if(event.target.closest('.btn-close')){
            closeMenu();
            // subcatalogHeader.textContent=clicked.textContent;
        }
    };

    const closeSubMenu=()=>{
        subCatalog.classList.remove('subopen');
    }



    btnBurger.addEventListener('click', openMenu);
// btnBurgerCloseMenu.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', hendlerCatalog);
subCatalog.addEventListener('click', event=>{
    const btnReturn=event.target.closest('.btn-return');

    if(btnBurger) closeSubMenu();
});


document.addEventListener('keydown', (event)=>{
    if(event.code==='Escape'){
        closeMenu();
    };
})

}

export default catalog;