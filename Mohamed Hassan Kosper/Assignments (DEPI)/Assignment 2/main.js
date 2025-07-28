const links = document.querySelectorAll('li a'); 

links.forEach(link =>{
    link.addEventListener('click',function(e){
        links.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        console.log(e.target);
    })
})

