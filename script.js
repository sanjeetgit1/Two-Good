function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();


 function cursor(){
var crsr = document.querySelector("#cursor")
var vi   = document.querySelector(".go1782767198 video")

vi.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x +30+ "px"
  crsr.style.top = dets.y +30+ "px"

})


vi.addEventListener("mouseenter",function(dets){
  crsr.style.opacity=1,
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"

})
vi.addEventListener("mouseleave",function(dets){
 
     crsr.style.opacity=0
})

 }
 cursor();

 function cursor1(){

  var crsr1 = document.querySelector("#cursor1")
var vi1   = document.querySelector("#page4")

vi1.addEventListener("mousemove",function(dets){
  crsr1.style.left = dets.x +30+ "px"
  crsr1.style.top = dets.y +30+ "px"

})


vi1.addEventListener("mouseenter",function(dets){
  crsr1.style.opacity=1,
  crsr1.style.left = dets.x + "px"
  crsr1.style.top = dets.y + "px"

})
vi1.addEventListener("mouseleave",function(dets){
 
     crsr1.style.opacity=0
})
 }
 cursor1();

var t1 = gsap.timeline();


t1.to(".change h1 , .change1 h2",{
y:-10,
duration:1,
stagger:0.2
})


t1.from(".box1 , .box2 , .box3",{
opacity:0,
duration:2,
stagger:0.2,

scrollTrigger:{
trigger:("#page2"),
scroller:("#main"),
// markers:true,
start:"top 60%",
end:"top 10%",
scrub:2
}
})
t1.from(".leftimage , .rightimage,.leftimage1 , .rightimage1",{
opacity:0,
stagger:2,

scrollTrigger:{
trigger:("#page4"),
scroller:("#main"),
start:"top 60%",
end:"top 10%",
scrub:2,

}
})
t1.to(".thanks h2",{
y:-10,
duration:1,
stagger:0.5,
scrollTrigger:{
  trigger:"#page5",
  scroller:"#main",
  // markers:true,
  start:"top 30%",
  end:"top 10%",
  scrub:2
}
})
t1.from(".textimpact ,.imageimpact",{
y:-10,
duration:1,
stagger:0.5,
opacity:0,
scrollTrigger:{
  trigger:"#page6",
  scroller:"#main",
  // markers:true,
  start:"top 60%",
  end:"top 10%",
  scrub:2
}
})
t1.to(".top1 svg ",{
y:-10,
duration:1,
stagger:0.2,
scrollTrigger:{
  trigger:"#nav",
  scroller:"#main",
  // markers:true,
  start:"top -2%",
  end:"top 0%",
  scrub:.2
}
})
t1.from(" .contact , .bottom svg , .nitty, .paragarph ",{
y:-10,
duration:1,
stagger:2,
opacity:0,
scrollTrigger:{
  trigger:"#page7",
  scroller:"#main",
  // markers:true,
  start:"top 70%",
  end:"top 40%",
  scrub:.2
}
})



