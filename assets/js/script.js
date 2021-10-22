// variables declerations
var i;
var productList = document.querySelectorAll(".product-image");
var modal = document.querySelector(".modal");
var pvrBtn = document.querySelector(".slider-control a:nth-child(1)");
var nxtBtn = document.querySelector(".slider-control a:nth-child(2)");

// removing txt from slider-dots
document.querySelector(".slider-dots").innerHTML = "";

// Event listners for product items
productList.forEach(function(val, index){
    val.addEventListener("click", function(){
        setSlide(index);
        i = index;
        modal.classList.remove("hide-me");
    })
    var btnDot = document.createElement("span");
    btnDot.innerHTML = "dot";
    btnDot.classList.add("slider-dot");
    document.querySelector(".slider-dots").appendChild(btnDot);
});

// making nodelist of dynamic dots
var dots = document.querySelectorAll(".slider-dot");

// Event listners for dynamic dots
dots.forEach(function(val, index){
    val.addEventListener("click", function(){
        setSlide(index);
        i = index;
    })
});

// Event listners for privious btn
pvrBtn.addEventListener("click", function(){
    if(i == 0)
        i = (productList.length - 1);
    else
        i -= 1;
    setSlide(i);
});

// Event listners for next btn
nxtBtn.addEventListener("click", function(){
    if(i == (productList.length - 1))
        i = 0;
    else
        i += 1;
    setSlide(i);
});

// Event listners for close btn
document.querySelector(".close").addEventListener("click",function(){modal.classList.add("hide-me");});
modal.addEventListener("click",function(){modal.classList.add("hide-me");});
modal.querySelector("*").addEventListener("click",function(e){ e.stopPropagation() });

// function to change slide
function setSlide(index){
    var node = productList[index].cloneNode(true);
    node.classList.remove("product-image");
    node.classList.add("slide","slide-up");
    dots.forEach(function(btn, btnIndex){
        btn.classList.remove("active-dot");
        btnIndex == index && btn.classList.add("active-dot");
    });
    if(document.querySelector(".slide")!= null){
        document.querySelector(".slide").classList.remove("slide-up");
        document.querySelector(".slide").classList.add("slide-remove");
        setTimeout(function(){ 
            document.querySelector(".slider").innerHTML = "";
            document.querySelector(".slider").appendChild(node);
        }, 500);
    }
    else{
        document.querySelector(".slider").innerHTML = "";
        document.querySelector(".slider").appendChild(node);
    }
}