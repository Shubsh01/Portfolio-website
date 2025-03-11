const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// FIRST PAGE ANIMATION 

document.addEventListener("DOMContentLoaded", () => {
    function firstPageAnimation() {
        var tl = gsap.timeline();

        tl.from("#nav", {
            y: "-10",
            opacity: 0,
            duration: 1,
            ease: "Expo.inOut"
        });

        tl.to(".boundingElement",{
            y: "0",
            // opacity: 0.7,
            duration: 1,
            ease: "Expo.inOut" ,
            delay: -0.7,
            stagger: 0.2
        })

        tl.from("#herofooter",{
            y: "-10",
            opacity: 0,
            duration: .8,
            delay: -0.7,
            ease: Expo.inOut
        })
    }

    firstPageAnimation();
});


var timeout ;

function flatCircle(){
    var xScale = 1;
    var yScale = 1;
    
    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove",(details)=>{
        clearTimeout(timeout)

        xScale = gsap.utils.clamp(0.8,1.2,details.clientX-xPrev)
        yScale = gsap.utils.clamp(0.8,1.2,details.clientY-yPrev)

        xPrev = details.clientX
        yPrev = details.clientY

        circleMouseFollower(xScale,yScale)

        setTimeout(()=>{
        document.querySelector('#mouseCircle').style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(1,1)`
        },100)
    })

}

flatCircle()

function circleMouseFollower(xScale,yScale){
    window.addEventListener("mousemove",(details)=>{
        // console.log(details.clientX,details.clientY); Shows x and y axis position
        document.querySelector('#mouseCircle').style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(${xScale},${yScale})`
    })
}

circleMouseFollower();
// firstPageAnimation();


// SECOND PAGE ANIMATION 

// document.querySelectorAll(".elem").forEach((elem)=>{
//     elem.addEventListener("mousemove",(details)=>{
//         var diff = details.clientY - elem.getBoundingClientRect().top
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease: Power1,
//             top:diff,
//             left: details.clientX
//         })
//     })
// })

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });


