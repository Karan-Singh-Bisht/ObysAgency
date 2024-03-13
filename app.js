function loadingAnimation(){
    let tl = gsap.timeline();

tl.from(".line h1",{
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
});

tl.from("#line1-part1",{
    opacity: 0,
    onStart:function(){
        let h5Timer = document.querySelector("#line1-part1 h5");
    let grow = 0;
    let interval;

    interval = setInterval(function(){
        grow++;
        if(grow === 100){
            clearInterval(interval);
        }
        h5Timer.textContent = grow;
    },25);
    }
})

tl.to(".line h2",{
    opacity: 1,
    animationName: "anime",
});

tl.to("#loader",{
    opacity: 0,
    duration: 0.4,
    delay: 2,
});

tl.from("#page1",{
    y: 1600,
    opacity: 0,
    delay: 0.2,
    duration: 0.6,
});

tl.to("#loader",{
    display:"none",
});

tl.from("#nav",{
    opacity: 0,
    y: -100,
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y: 200,
    duration: 1,
    stagger: 0.2,
});
}
 
function cursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left: dets.x,
            top: dets.y,
        });
    });
    
    Shery.makeMagnet("#nav-part2 h3",{});
}

loadingAnimation();
cursor();