var crsr =document.querySelector("#cursor")
 var blur =document.querySelector("#cursor-blur")
 
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x -2 +"px"
    crsr.style.top = dets.y+6+"px"
    blur.style.left = dets.x- 110+"px"
    blur.style.top = dets.y- 110+"px"
    
 });

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function() {
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
        
    })

    elem.addEventListener("mouseleave",function() {
      crsr.style.scale = 1
      crsr.style.border = "0px solid #95c11e"
      crsr.style.backgroundColor = "#95c11e"
  }) 

})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "60px",
  
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      //markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  
  });


  
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  }); 
  
  gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
      trigger: "#colon1",
      scroller: "body",
      start:"top 55%",
      end:"top 45%",
      scrub:4

    }
  })

  gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
      trigger: "#colon1",
      scroller: "body",
      start:"top 55%",
      end:"top 45%",
      scrub:4

    }
  })

  gsap.from("#page4 h1", {
    y: 40,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 80%",
      end: "top 75%",
      scrub: 3,
    },
  });