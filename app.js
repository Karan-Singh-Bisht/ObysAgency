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
    delay: 3.1,
});

tl.from("#page1",{
    y: 1600,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
});

tl.to("#loader",{
    display:"none",
});