import { dataArray } from "./data.js";

const images = document.querySelectorAll('.anim');

let observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            if(entry.target.classList.contains('anim-left')) {
                entry.target.classList.add('anim1-left');
                entry.target.classList.add('show');
            } else if (entry.target.classList.contains('anim-right')) {
                entry.target.classList.add('anim1-right');
                entry.target.classList.add('show');
            } else {
                entry.target.classList.add('anim1-down');
                entry.target.classList.add('show');
            }      
        } else {
            if(entry.target.classList.contains('anim-left')) {
                entry.target.classList.remove('anim1-left');     
                entry.target.classList.remove('show');     
            } else if (entry.target.classList.contains('anim-right')) {
                entry.target.classList.remove('anim1-right');
                entry.target.classList.remove('show');
            } else {
                entry.target.classList.remove('anim1-down');
                entry.target.classList.remove('show');
            }      
        }
    });
    
});

images.forEach(image => {
    observer.observe(image);
});


