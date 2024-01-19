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


var clutter="";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
  clutter+=`<span> ${dets} </span>`

  document.querySelector("#page2>h1").innerHTML= clutter;
})

gsap.to("#page2>h1>span",{
  ScrollTrigger:{
    trigger:`#page2>h1>span`,
    start: `top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  }
  ,stagger:.2,
  color:`#fff`
})



function canvas(){
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    imgs/frames00007.png
    imgs/frames00010.png
    imgs/frames00013.png
    imgs/frames00016.png
    imgs/frames00019.png
    imgs/frames00022.png
    imgs/frames00025.png
    imgs/frames00028.png
    imgs/frames00031.png
    imgs/frames00034.png
    imgs/frames00037.png
    imgs/frames00040.png
    imgs/frames00043.png
    imgs/frames00046.png
    imgs/frames00049.png
    imgs/frames00052.png
    imgs/frames00055.png
    imgs/frames00058.png
    imgs/frames00061.png
    imgs/frames00064.png
    imgs/frames00067.png
    imgs/frames00070.png
    imgs/frames00073.png
    imgs/frames00076.png
    imgs/frames00079.png
    imgs/frames00082.png
    imgs/frames00085.png
    imgs/frames00088.png
    imgs/frames00091.png
    imgs/frames00094.png
    imgs/frames00097.png
    imgs/frames00100.png
    imgs/frames00103.png
    imgs/frames00106.png
    imgs/frames00109.png
    imgs/frames00112.png
    imgs/frames00115.png
    imgs/frames00118.png
    imgs/frames00121.png
    imgs/frames00124.png
    imgs/frames00127.png
    imgs/frames00130.png
    imgs/frames00133.png
    imgs/frames00136.png
    imgs/frames00139.png
    imgs/frames00142.png
    imgs/frames00145.png
    imgs/frames00148.png
    imgs/frames00151.png
    imgs/frames00154.png
    imgs/frames00157.png
    imgs/frames00160.png
    imgs/frames00163.png
    imgs/frames00166.png
    imgs/frames00169.png
    imgs/frames00172.png
    imgs/frames00175.png
    imgs/frames00178.png
    imgs/frames00181.png
    imgs/frames00184.png
    imgs/frames00187.png
    imgs/frames00190.png
    imgs/frames00193.png
    imgs/frames00196.png
    imgs/frames00199.png
    imgs/frames00202.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 67;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page3`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page3",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `250% top`,
  });
}

canvas();

var clutter="";

document.querySelector("#page4>h1").textContent.split(" ").forEach(function(dets){
  clutter+=`<span> ${dets} </span>`

  document.querySelector("#page4>h1").innerHTML= clutter;
})

gsap.to("#page4>h1>span",{
  ScrollTrigger:{
    trigger:`#page4>h1>span`,
    start: `top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  }
  ,stagger:.2,
  color:`#fff`
})



function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
imgs/bridges00004.png
imgs/bridges00007.png
imgs/bridges00010.png
imgs/bridges00013.png
imgs/bridges00016.png
imgs/bridges00019.png
imgs/bridges00022.png
imgs/bridges00025.png
imgs/bridges00028.png
imgs/bridges00031.png
imgs/bridges00034.png
imgs/bridges00037.png
imgs/bridges00040.png
imgs/bridges00043.png
imgs/bridges00046.png
imgs/bridges00049.png
imgs/bridges00052.png
imgs/bridges00055.png
imgs/bridges00058.png
imgs/bridges00061.png
imgs/bridges00064.png
imgs/bridges00067.png
imgs/bridges00070.png
imgs/bridges00073.png
imgs/bridges00076.png
imgs/bridges00079.png
imgs/bridges00082.png
imgs/bridges00085.png
imgs/bridges00088.png
imgs/bridges00091.png
imgs/bridges00094.png
imgs/bridges00097.png
imgs/bridges00100.png
imgs/bridges00103.png
imgs/bridges00106.png
imgs/bridges00109.png
imgs/bridges00112.png
imgs/bridges00115.png
imgs/bridges00118.png
imgs/bridges00121.png
imgs/bridges00124.png
imgs/bridges00127.png
imgs/bridges00130.png
imgs/bridges00133.png
imgs/bridges00136.png
imgs/bridges00139.png
imgs/bridges00142.png
imgs/bridges00145.png
imgs/bridges00148.png
imgs/bridges00151.png
imgs/bridges00154.png
imgs/bridges00157.png
imgs/bridges00160.png
imgs/bridges00163.png
imgs/bridges00166.png
imgs/bridges00169.png
imgs/bridges00172.png
imgs/bridges00175.png
imgs/bridges00178.png
imgs/bridges00181.png
imgs/bridges00184.png
imgs/bridges00187.png
imgs/bridges00190.png
imgs/bridges00193.png
imgs/bridges00196.png
imgs/bridges00199.png
imgs/bridges00202.png`;
    return data.split("\n")[index];
  }
  
  const frameCount = 67;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page5`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page5",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `250% top`,
  });
}

canvas1();


var clutter="";

document.querySelector("#page6>h1").textContent.split(" ").forEach(function(dets){
  clutter+=`<span> ${dets} </span>`

  document.querySelector("#page6>h1").innerHTML= clutter;
})

gsap.to("#page6>h1>span",{
  ScrollTrigger:{
    trigger:`#page6>h1>span`,
    start: `top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  }
  ,stagger:.2,
  color:`#fff`
})


function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = ` 
    https://thisismagma.com/assets/home/lore/seq/1.webp?2
    https://thisismagma.com/assets/home/lore/seq/2.webp?2
    https://thisismagma.com/assets/home/lore/seq/3.webp?2
    https://thisismagma.com/assets/home/lore/seq/4.webp?2
    https://thisismagma.com/assets/home/lore/seq/5.webp?2
    https://thisismagma.com/assets/home/lore/seq/6.webp?2
    https://thisismagma.com/assets/home/lore/seq/7.webp?2
    https://thisismagma.com/assets/home/lore/seq/8.webp?2
    https://thisismagma.com/assets/home/lore/seq/9.webp?2
    https://thisismagma.com/assets/home/lore/seq/10.webp?2
    https://thisismagma.com/assets/home/lore/seq/11.webp?2
    https://thisismagma.com/assets/home/lore/seq/12.webp?2
    https://thisismagma.com/assets/home/lore/seq/13.webp?2
    https://thisismagma.com/assets/home/lore/seq/14.webp?2
    https://thisismagma.com/assets/home/lore/seq/15.webp?2
    https://thisismagma.com/assets/home/lore/seq/16.webp?2
    https://thisismagma.com/assets/home/lore/seq/17.webp?2
    https://thisismagma.com/assets/home/lore/seq/18.webp?2
    https://thisismagma.com/assets/home/lore/seq/19.webp?2
    https://thisismagma.com/assets/home/lore/seq/20.webp?2
    https://thisismagma.com/assets/home/lore/seq/21.webp?2
    https://thisismagma.com/assets/home/lore/seq/22.webp?2
    https://thisismagma.com/assets/home/lore/seq/23.webp?2
    https://thisismagma.com/assets/home/lore/seq/24.webp?2
    https://thisismagma.com/assets/home/lore/seq/25.webp?2
    https://thisismagma.com/assets/home/lore/seq/26.webp?2
    https://thisismagma.com/assets/home/lore/seq/27.webp?2
    https://thisismagma.com/assets/home/lore/seq/28.webp?2
    https://thisismagma.com/assets/home/lore/seq/29.webp?2
    https://thisismagma.com/assets/home/lore/seq/30.webp?2
    https://thisismagma.com/assets/home/lore/seq/31.webp?2
    https://thisismagma.com/assets/home/lore/seq/32.webp?2
    https://thisismagma.com/assets/home/lore/seq/33.webp?2
    https://thisismagma.com/assets/home/lore/seq/34.webp?2
    https://thisismagma.com/assets/home/lore/seq/35.webp?2
    https://thisismagma.com/assets/home/lore/seq/36.webp?2
    https://thisismagma.com/assets/home/lore/seq/37.webp?2
    https://thisismagma.com/assets/home/lore/seq/38.webp?2
    https://thisismagma.com/assets/home/lore/seq/39.webp?2
    https://thisismagma.com/assets/home/lore/seq/40.webp?2
    https://thisismagma.com/assets/home/lore/seq/41.webp?2
    https://thisismagma.com/assets/home/lore/seq/42.webp?2
    https://thisismagma.com/assets/home/lore/seq/43.webp?2
    https://thisismagma.com/assets/home/lore/seq/44.webp?2
    https://thisismagma.com/assets/home/lore/seq/45.webp?2
    https://thisismagma.com/assets/home/lore/seq/46.webp?2
    https://thisismagma.com/assets/home/lore/seq/47.webp?2
    https://thisismagma.com/assets/home/lore/seq/48.webp?2
    https://thisismagma.com/assets/home/lore/seq/49.webp?2
    https://thisismagma.com/assets/home/lore/seq/50.webp?2
    https://thisismagma.com/assets/home/lore/seq/51.webp?2
    https://thisismagma.com/assets/home/lore/seq/52.webp?2
    https://thisismagma.com/assets/home/lore/seq/53.webp?2
    https://thisismagma.com/assets/home/lore/seq/54.webp?2
    https://thisismagma.com/assets/home/lore/seq/55.webp?2
    https://thisismagma.com/assets/home/lore/seq/56.webp?2
    https://thisismagma.com/assets/home/lore/seq/57.webp?2
    https://thisismagma.com/assets/home/lore/seq/58.webp?2
    https://thisismagma.com/assets/home/lore/seq/59.webp?2
    https://thisismagma.com/assets/home/lore/seq/60.webp?2
    https://thisismagma.com/assets/home/lore/seq/61.webp?2
    https://thisismagma.com/assets/home/lore/seq/62.webp?2
    https://thisismagma.com/assets/home/lore/seq/63.webp?2
    https://thisismagma.com/assets/home/lore/seq/64.webp?2
    https://thisismagma.com/assets/home/lore/seq/65.webp?2
    https://thisismagma.com/assets/home/lore/seq/66.webp?2
    https://thisismagma.com/assets/home/lore/seq/67.webp?2
    https://thisismagma.com/assets/home/lore/seq/68.webp?2
    https://thisismagma.com/assets/home/lore/seq/69.webp?2
    https://thisismagma.com/assets/home/lore/seq/70.webp?2
    https://thisismagma.com/assets/home/lore/seq/71.webp?2
    https://thisismagma.com/assets/home/lore/seq/72.webp?2
    https://thisismagma.com/assets/home/lore/seq/73.webp?2
    https://thisismagma.com/assets/home/lore/seq/74.webp?2
    https://thisismagma.com/assets/home/lore/seq/75.webp?2
    https://thisismagma.com/assets/home/lore/seq/76.webp?2
    https://thisismagma.com/assets/home/lore/seq/77.webp?2
    https://thisismagma.com/assets/home/lore/seq/78.webp?2
    https://thisismagma.com/assets/home/lore/seq/79.webp?2
    https://thisismagma.com/assets/home/lore/seq/80.webp?2
    https://thisismagma.com/assets/home/lore/seq/81.webp?2
    https://thisismagma.com/assets/home/lore/seq/82.webp?2
    https://thisismagma.com/assets/home/lore/seq/83.webp?2
    https://thisismagma.com/assets/home/lore/seq/84.webp?2
    https://thisismagma.com/assets/home/lore/seq/85.webp?2
    https://thisismagma.com/assets/home/lore/seq/86.webp?2
    https://thisismagma.com/assets/home/lore/seq/87.webp?2
    https://thisismagma.com/assets/home/lore/seq/88.webp?2
    https://thisismagma.com/assets/home/lore/seq/89.webp?2
    https://thisismagma.com/assets/home/lore/seq/90.webp?2
    https://thisismagma.com/assets/home/lore/seq/91.webp?2
    https://thisismagma.com/assets/home/lore/seq/92.webp?2
    https://thisismagma.com/assets/home/lore/seq/93.webp?2
    https://thisismagma.com/assets/home/lore/seq/94.webp?2
    https://thisismagma.com/assets/home/lore/seq/95.webp?2
    https://thisismagma.com/assets/home/lore/seq/96.webp?2
    https://thisismagma.com/assets/home/lore/seq/97.webp?2
    https://thisismagma.com/assets/home/lore/seq/98.webp?2
    https://thisismagma.com/assets/home/lore/seq/99.webp?2
    https://thisismagma.com/assets/home/lore/seq/100.webp?2
    https://thisismagma.com/assets/home/lore/seq/101.webp?2
    https://thisismagma.com/assets/home/lore/seq/102.webp?2
    https://thisismagma.com/assets/home/lore/seq/103.webp?2
    https://thisismagma.com/assets/home/lore/seq/104.webp?2
    https://thisismagma.com/assets/home/lore/seq/105.webp?2
    https://thisismagma.com/assets/home/lore/seq/106.webp?2
    https://thisismagma.com/assets/home/lore/seq/107.webp?2
    https://thisismagma.com/assets/home/lore/seq/108.webp?2
    https://thisismagma.com/assets/home/lore/seq/109.webp?2
    https://thisismagma.com/assets/home/lore/seq/110.webp?2
    https://thisismagma.com/assets/home/lore/seq/111.webp?2
    https://thisismagma.com/assets/home/lore/seq/112.webp?2
    https://thisismagma.com/assets/home/lore/seq/113.webp?2
    https://thisismagma.com/assets/home/lore/seq/114.webp?2
    https://thisismagma.com/assets/home/lore/seq/115.webp?2
    https://thisismagma.com/assets/home/lore/seq/116.webp?2
    https://thisismagma.com/assets/home/lore/seq/117.webp?2
    https://thisismagma.com/assets/home/lore/seq/118.webp?2
    https://thisismagma.com/assets/home/lore/seq/119.webp?2
    https://thisismagma.com/assets/home/lore/seq/120.webp?2
    https://thisismagma.com/assets/home/lore/seq/121.webp?2
    https://thisismagma.com/assets/home/lore/seq/122.webp?2
    https://thisismagma.com/assets/home/lore/seq/123.webp?2
    https://thisismagma.com/assets/home/lore/seq/124.webp?2
    https://thisismagma.com/assets/home/lore/seq/125.webp?2
    https://thisismagma.com/assets/home/lore/seq/126.webp?2
    https://thisismagma.com/assets/home/lore/seq/127.webp?2
    https://thisismagma.com/assets/home/lore/seq/128.webp?2
    https://thisismagma.com/assets/home/lore/seq/129.webp?2
    https://thisismagma.com/assets/home/lore/seq/130.webp?2
    https://thisismagma.com/assets/home/lore/seq/131.webp?2
    https://thisismagma.com/assets/home/lore/seq/132.webp?2
    https://thisismagma.com/assets/home/lore/seq/133.webp?2
    https://thisismagma.com/assets/home/lore/seq/134.webp?2
    https://thisismagma.com/assets/home/lore/seq/135.webp?2
    https://thisismagma.com/assets/home/lore/seq/136.webp?2 
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 136;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page7`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page7",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `250% top`,
  });
}

canvas2();


gsap.to(".page7-cir",{
scrollTrigger:{
  trigger:".page7-cir",
  start:`top center`,
  end:`bottom top`,
  // markers:true,
  scroller:`#main`,
scrub:.5
},
scale:1.5
})

gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:".page7-cir-inner",
    start:`top center`,
    end:`bottom top`,
    // markers:true,
    scroller:`#main`,
  scrub:.5
  },
 backgroundColor:`#203de2`
  })