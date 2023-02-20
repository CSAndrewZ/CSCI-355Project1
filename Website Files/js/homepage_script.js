const panels = document.querySelectorAll('.panel');

panels.forEach( (panel) => {
  
  panel.addEventListener('click', () => {
    
    removeActiveClasses() 
    panel.classList.add('active')
    
  })

})

function removeActiveClasses(){
  
  panels.forEach( (panel) => {
    panel.classList.remove('active')
  })

}

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.udemyCourse2');

left.addEventListener('mouseenter', () => container.classList.add('hover-left') );
left.addEventListener('mouseleave', () => container.classList.remove('hover-left') );

right.addEventListener('mouseenter', () => container.classList.add('hover-right') );
right.addEventListener('mouseleave', () => container.classList.remove('hover-right') );