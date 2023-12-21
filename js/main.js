const navMenu=document.getElementById('nav-menu');
const navClose=document.getElementById('nav-close');
const navToggle=document.getElementById('nav-toggle');



navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show');
   
}
)

navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show');
}
);

const navLinks=document.querySelectorAll('.nav-link');

function linkAction(){
    navMenu.classList.remove('show');
}

navLinks.forEach(n=>n.addEventListener('click',linkAction));

const section=document.querySelectorAll('section[id]');

window.addEventListener('scroll',scrollActive);

function scrollActive(){
    const scrollY=window.pageYOffset;

    section.forEach(current =>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-50;

        sectionId=current.getAttribute('id');
      if(scrollY > sectionTop && scrollY<= sectionTop+sectionHeight){
        document.querySelector('.nav-menu a[href*='+ sectionId+']').classList.add('active')
      }else{
        document.querySelector('.nav-menu a[href*='+ sectionId+']').classList.remove('active');
      }
        
    })
}