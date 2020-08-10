function togglemenu(){
    let nevigation= document.querySelector(".nevigation");
      let toggle= document.querySelector(".toggle");  
      nevigation.classList.toggle("active");
    toggle.classList.toggle("active");
}

var text=document.querySelector('.text')
var shadow='';
for(var i=0; i<30; i++){
  shadow += (shadow?',':'')+i*1+'px ' + i*1+'px 0 #353535';
}
text.style.textShadow=shadow;

var text=document.querySelector('.text2')
var shadow='';
for(var i=0; i<30; i++){
  shadow += (shadow?',':'')+i*1+'px ' + i*1+'px 0 #353535';
}
text.style.textShadow=shadow;

var text=document.querySelector('.text3')
var shadow='';
for(var i=0; i<30; i++){
  shadow += (shadow?',':'')+i*1+'px ' + i*1+'px 0 #353535';
}
text.style.textShadow=shadow;

var text=document.querySelector('.text4')
var shadow='';
for(var i=0; i<30; i++){
  shadow += (shadow?',':'')+i*1+'px ' + i*1+'px 0 #353535';
}
text.style.textShadow=shadow;

var text=document.querySelector('.text5')
var shadow='';
for(var i=0; i<30; i++){
  shadow += (shadow?',':'')+i*1+'px ' + i*1+'px 0 #353535';
}
text.style.textShadow=shadow;


// testimonial slider

const slides=document.querySelector(".slider").children;
const indicatorImages=document.querySelector(".slider_indicator").children;

for(let i=0; i<indicatorImages.length; i++){
    indicatorImages[i].addEventListener("click",function(){
      

        for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");

          const id=this.getAttribute("data-id");
            for(let j=0; j<slides.length; j++){
                slides[j].classList.remove("active");
            }
          slides[id].classList.add("active");
    })
}
// testimonial slider


// portfolio Item Filter

const filterContainer=document.querySelector(".portfolio_filter"),
        filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        portfolioItems=document.querySelectorAll(".portfolio_item"),
        totalPortfolioItem=portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++) {
filterBtns[i].addEventListener("click",function(){
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue=this.getAttribute("data-filter");
    for(let k=0; k<totalPortfolioItem; k++){
        if(filterValue === portfolioItems[k].getAttribute("data-catagory")){
            portfolioItems[k].classList.remove("hide");
            portfolioItems[k].classList.add("show");
        }
        else{
            portfolioItems[k].classList.remove("show");
            portfolioItems[k].classList.add("hide"); 
        }
        if(filterValue==="all"){
            portfolioItems[k].classList.remove("hide");
            portfolioItems[k].classList.add("show");
        }
    }

})

}   

//portfolio lightbox
const lightbox=document.querySelector(".lightbox"),
        lightboxImg=lightbox.querySelector(".lightbox_img"),
        lightboxClose=lightbox.querySelector(".lightbox_close"),
        lightboxText=lightbox.querySelector(".caption_text"),
        lightboxCounter=lightbox.querySelector(".caption_count");
let itemIndex=0;
for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click",function(){
    itemIndex=i;
        changeItem();
    toggleLightbox();
    })
}
function nextItem(){
    if(itemIndex===totalPortfolioItem-1){
        itemIndex=0;  }
    else{
        itemIndex++}
    changeItem();
}


function prevItem(){
    if(itemIndex===0){
        itemIndex=totalPortfolioItem-1;   }
    else{
        itemIndex--
    }
    changeItem();
}


function toggleLightbox(){
    lightbox.classList.toggle("open")
}


function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio_img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;

}

// lightboxClose

lightbox.addEventListener("click",function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
    })
