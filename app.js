const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.id = "backToTop";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "10px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "1px solid grey";
topBtn.style.borderRadius = "50%";
topBtn.style.backgroundColor = "grey";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  const tabs = document.querySelectorAll("#productTabs .nav-link");
  const underline = document.querySelector(".tab-underline");

  function moveUnderline(el) {
    underline.style.width = el.offsetWidth + "px";
    underline.style.left = el.offsetLeft + "px";
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      moveUnderline(tab);
    });
  });

  window.addEventListener("load", () => {
    const activeTab = document.querySelector("#productTabs .nav-link.active");
    if (activeTab) moveUnderline(activeTab);
  });

const addDetails = document.getElementById("addDetails");
const text = document.getElementById("text");

if(addDetails&&text){
addDetails.addEventListener("click",()=>{
    text.classList.toggle("hide");
})
}

const addDetails1 =document.getElementById("addDetails1")
const text1 = document.getElementById("text1")
if(addDetails1&&text1){
addDetails1.addEventListener("click",()=>{
    text1.classList.toggle("hide")
})
}

const addDetails2 =document.getElementById("addDetails2")
const text2 = document.getElementById("text2")
if(addDetails2&&text2){
addDetails2.addEventListener("click",()=>{
    text2.classList.toggle("hide")
})
}

const addDetails3 =document.getElementById("addDetails3")
const text3 = document.getElementById("text3")
if(addDetails3&&text3){
   addDetails3.addEventListener("click",()=>{
    text3.classList.toggle("hide")
}) 
}

const addDetails4 =document.getElementById("addDetails4")
const text4 = document.getElementById("text4")
if(addDetails4&&text4){
addDetails4.addEventListener("click",()=>{
    text4.classList.toggle("hide")
})
}

const addDetails5 =document.getElementById("addDetails5")
const text5 = document.getElementById("text5")
if(addDetails5&&text5){
addDetails5.addEventListener("click",()=>{
    text5.classList.toggle("hide")
})
}

const showButton1 = document.getElementById("showMoreBtn1")
const addCard1 = document.getElementById("addCard1")
if(showButton1&&addCard1){
showButton1.addEventListener("click",()=>{
addCard1.innerHTML = `<div class="card pulse-hover py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/camera.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card pulse-hover py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/mobile2.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/headset.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/jug.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://www.naijatechguide.com/wp-content/uploads/2018/02/power-bank.jpg"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://images.jdmagicbox.com/quickquotes/images_main/wx-180-wireless-neckband-headset-2018377796-wsbi9m8y.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/blander.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://png.pngtree.com/png-vector/20250125/ourmid/pngtree-universal-portable-three-sided-pyramid-mobile-accessory-png-image_15329597.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRY5Wz1faSh_Sy2wmQreZwPXHb23W3na7og&s"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/iphone.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`

                            showButton1.style.display = "none"
})
}

const showButton2 = document.getElementById("showBtn2")
const addCard2 = document.getElementById("addCard2")
if(showButton2&&addCard2){
showButton2.addEventListener("click",()=>{
addCard2.innerHTML = `<div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/camera.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/mobile2.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/headset.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/jug.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://www.naijatechguide.com/wp-content/uploads/2018/02/power-bank.jpg"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://images.jdmagicbox.com/quickquotes/images_main/wx-180-wireless-neckband-headset-2018377796-wsbi9m8y.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/blander.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://png.pngtree.com/png-vector/20250125/ourmid/pngtree-universal-portable-three-sided-pyramid-mobile-accessory-png-image_15329597.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRY5Wz1faSh_Sy2wmQreZwPXHb23W3na7og&s"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/iphone.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`

                            showButton2.style.display = "none"
})
}

const showButton3 = document.getElementById("showMoreBtn3")
const addCard3 = document.getElementById("addCard3")
if(showButton3&&addCard3){
showButton3.addEventListener("click",()=>{
addCard3.innerHTML = `<div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/camera.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                          
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://images.jdmagicbox.com/quickquotes/images_main/wx-180-wireless-neckband-headset-2018377796-wsbi9m8y.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/blander.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRY5Wz1faSh_Sy2wmQreZwPXHb23W3na7og&s"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pulse-hover card py-3 mt-3" style="max-width: 52rem;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img height="150" width="230" src="./images/iphone.png"
                                            class="img-fluid rounded-start ms-4" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <h6 class="card-title">GoPro HERO6 4K Action Camera - Black</h6>
                                                <button class="p-1 btnn bg-white rounded">
                                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 -960 960 960" width="24px" fill="#2854C5">
                                                            <path
                                                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                                        </svg></i>
                                                </button>
                                            </div>
                                            <span class="fw-bold">$998.00</span>
                                            <br>
                                            <img src="./images/rating2.png" alt=""><span
                                                class="text-warning align-bottom"> 7.5 </span>&nbsp; <img
                                                src="./images/Dot.png" alt=""><span
                                                class="card-text text-secondary">&nbsp; 154 orders &nbsp;<img
                                                    src="./images/Dot.png" alt=""><span class="text-success">&nbsp; Free
                                                    Shipping</span> </span>
                                            <p class="m-2 ps-0 ms-0 text-secondary">Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua
                                            <span id="text5" class="text-secondary hide">Ratione numquam ullam itaque, sed quas deserunt atque iusto, eligendi commodi quidem nobis quam quae reiciendis illo voluptates cumque, consectetur corporis sunt?</span>
                                            </p>
                                             <p id="addDetails5" class="text-primary" style="cursor: pointer;">View details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`

                            showButton3.style.display = "none"
})
}

const previousBtn = document.getElementById("previous-btn")
const nextBtn = document.getElementById("next-btn")

const currentPage = window.location.pathname;

function gotoPage(page){
window.location.pathname = page;
}
if(currentPage.includes("all-categories.html")&&previousBtn){
    previousBtn.disable = true;
    previousBtn.style.opacity = "0.5";
    previousBtn.style.cursor ="not-allowed"
}

if(currentPage.includes("categories-row2.html")&&nextBtn){
      nextBtn.disable = true;
    nextBtn.style.opacity = "0.5";
    nextBtn.style.cursor ="not-allowed"
}

if(previousBtn){
    previousBtn.addEventListener("click",()=>{
        if(currentPage.includes("categories-row1.html")){
gotoPage("all-categories.html");
        }
        else if(currentPage.includes("categories-row2.html")){
            gotoPage("categories-row1.html")
        }
    })
}

if(nextBtn){
    nextBtn.addEventListener("click",()=>{
        if(currentPage.includes("all-categories.html")){
gotoPage("categories-row1.html");
        }
        else if(currentPage.includes("categories-row1.html")){
            gotoPage("categories-row2.html");
        }
    })
}

const previousBtn1 = document.getElementById("previous-btn1")
const nextBtn1 = document.getElementById("next-btn1")

const currentPage1 = window.location.pathname;

function gotoPage(page){
window.location.pathname = page;
}
if(currentPage1.includes("categories-col.html")&&previousBtn1){
    previousBtn1.disable = true;
    previousBtn1.style.opacity = "0.5";
    previousBtn1.style.cursor ="not-allowed"
}

if(currentPage1.includes("categories-col3.html")&&nextBtn1){
      nextBtn1.disable = true;
    nextBtn1.style.opacity = "0.5";
    nextBtn1.style.cursor ="not-allowed"
}

if(previousBtn1){
    previousBtn1.addEventListener("click",()=>{
        if(currentPage1.includes("categories-col3.html")){
gotoPage("categories-col2.html");
        }
        else if(currentPage1.includes("categories-col2.html")){
            gotoPage("categories-col.html")
        }
    })
}

if(nextBtn1){
    nextBtn1.addEventListener("click",()=>{
        if(currentPage1.includes("categories-col.html")){
gotoPage("categories-col2.html");
        }
        else if(currentPage1.includes("categories-col2.html")){
            gotoPage("categories-col3.html");
        }
    })
}

const showBtnCol1 = document.getElementById("showBtnCol1");
const colCard = document.getElementById("colCard");
if(showBtnCol1&&colCard){
showBtnCol1.addEventListener("click",()=>{
    colCard.innerHTML = ` <div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>

<div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>

<div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>
`
showBtnCol1.style.display="none";
})
}

const showBtnCol2 = document.getElementById("showBtnCol2");
const colCard2 = document.getElementById("colCard2");
if(showBtnCol2&&colCard2){
showBtnCol2.addEventListener("click",()=>{
    colCard2.innerHTML = ` <div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>

<div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>

<div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>
`
showBtnCol2.style.display="none";
})
}

const showBtnCol3 = document.getElementById("showBtnCol3");
const colCard3 = document.getElementById("colCard3");
if(showBtnCol3&&colCard3){
showBtnCol3.addEventListener("click",()=>{
    colCard3.innerHTML = ` <div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>

<div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>

<div class="d-flex gap-4">
     <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div> 

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>

 <div class="card mt-3" style="width: 17rem;">
  <img  height="270" src="./images/phones.png" class="card-img-top py-3" alt="...">
  <hr> 
  <div class="card-body pt-0 mt-0">
    <div class="d-flex justify-content-between">
    <p  class="card-title fw-bold">$99.50 <del class="fw-light text-secondary">$1128.00</del></p> 

    <button class="pt-1 px-2 btnn rounded bg-white"> <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></i></button>
   
</div>
<img class="pb-2" src="./images/rating2.png" alt=""><span class="text-warning ps-2 pb-2">7.5</span>

    <p class="card-text text-secondary">GoPro HERO6 4K Action Camera - Black</p>
  </div>
</div>
</div>
`
showBtnCol3.style.display="none";
})
}

// let cartCount = 0;
// const cartCountElement = document.getElementById("cartCount");
// const addToCartButtons = document.querySelectorAll(".addToCartBtn");

// const emptyDiv = document.getElementById("emptyDiv");

// function updateCartDisplay(){
//     if(cartCount===0){
//         // cartCount.style.display="none";
//     }
//     else{
//  cartCountElement.style.display = "inline-block";
//         cartCountElement.textContent = cartCount;
//     }
// }

// addToCartButtons.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         cartCount++;
//         updateCartDisplay();
//     })


// })




let cartCount = 3;
const cartCountElement = document.getElementById("cartCount");

// ✅ Function to update badge display
function updateCartDisplay() {
  if (cartCount === 0) {
    cartCountElement.style.display = "none";
  } else {
    cartCountElement.style.display = "inline-block";
    cartCountElement.textContent = cartCount;
  }
}

document.addEventListener("click", function (e) {
  const target = e.target;

  if (target.classList.contains("addToCartBtn") || target.closest(".addToCartBtn")) {
    cartCount++;
    updateCartDisplay();
  }

  if (target.classList.contains("btnn1")) {
    const card = target.closest(".cartCardremove");
    if (card) {
      card.remove();
      cartCount = Math.max(0, cartCount - 1);
      updateCartDisplay();
    }
  }
});

updateCartDisplay();




const moveToCart1= document.getElementById("moveToCart1");
moveToCart1.addEventListener("click",()=>{
    emptyDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnn1")) {
    const cartCard = event.target.closest(".cartCardremove");
    if (cartCard) {
      cartCard.remove();
    }
  }
});
emptyDiv.innerHTML+=`
 <div class="cartCardremove p-3 pb-0">
            <div class="d-flex align-items-start">
              <div class="d-flex align-items-center" style="width: 4rem;">
                <img src="./images/tablet.png" alt="" class="p-2"
                  style="width: 50px; height: 50px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;">
              </div>

              <div class="flex-grow-1">
                <p class="mb-1 fw-bold">T-shirts with multiple colors, for men and lady</p>
                <p class="text-muted mb-1 text-secondary" style="font-size: 14px;">
                  Size: medium, Color: blue, Material: Plastic<br>
                  Seller: <span class="text-secondary">Artel Market</span>
                </p>
                <div class="d-flex pt-2 pb-4 gap-2">
                  <button class="btnn btnn1 bg-white py-1 rounded shadow-sm px-2 text-danger btn-sm">Remove</button>
                  <button class="btnn btnn2 bg-white py-1 rounded shadow-sm px-3 text-primary ">Save for later</button>
                </div>
              </div>

              <div class="text-end" style="min-width: 100px;">
                <p class="fw-semibold mb-1">$170.50</p>
                <select class="form-select form-select-sm">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </select>
              </div>
            </div>
            <hr>
          </div>
`
})


const moveToCart2= document.getElementById("moveToCart2");
moveToCart2.addEventListener("click",()=>{
    emptyDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnn1")) {
    const cartCard = event.target.closest(".cartCardremove");
    if (cartCard) {
      cartCard.remove();
    }
  }
});
emptyDiv.innerHTML+=`
 <div class="cartCardremove p-3 pb-0">
            <div class="d-flex align-items-start">
              <div class="d-flex align-items-center" style="width: 4rem;">
                <img src="./images/mobile2.png" alt="" class="p-2"
                  style="width: 50px; height: 50px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;">
              </div>

              <div class="flex-grow-1">
                <p class="mb-1 fw-bold">T-shirts with multiple colors, for men and lady</p>
                <p class="text-muted mb-1 text-secondary" style="font-size: 14px;">
                  Size: medium, Color: blue, Material: Plastic<br>
                  Seller: <span class="text-secondary">Artel Market</span>
                </p>
                <div class="d-flex pt-2 pb-4 gap-2">
                  <button class="btnn btnn1 bg-white py-1 rounded shadow-sm px-2 text-danger btn-sm">Remove</button>
                  <button class="btnn btnn2 bg-white py-1 rounded shadow-sm px-3 text-primary ">Save for later</button>
                </div>
              </div>

              <div class="text-end" style="min-width: 100px;">
                <p class="fw-semibold mb-1">$170.50</p>
                <select class="form-select form-select-sm">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </select>
              </div>
            </div>
            <hr>
          </div>
`
})


const moveToCart3= document.getElementById("moveToCart3");
moveToCart3.addEventListener("click",()=>{
    emptyDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnn1")) {
    const cartCard = event.target.closest(".cartCardremove");
    if (cartCard) {
      cartCard.remove();
    }
  }
});
emptyDiv.innerHTML+=`
 <div class="cartCardremove p-3 pb-0">
            <div class="d-flex align-items-start">
              <div class="d-flex align-items-center" style="width: 4rem;">
                <img src="./images/watch.png" alt="" class="p-2"
                  style="width: 50px; height: 50px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;">
              </div>

              <div class="flex-grow-1">
                <p class="mb-1 fw-bold">T-shirts with multiple colors, for men and lady</p>
                <p class="text-muted mb-1 text-secondary" style="font-size: 14px;">
                  Size: medium, Color: blue, Material: Plastic<br>
                  Seller: <span class="text-secondary">Artel Market</span>
                </p>
                <div class="d-flex pt-2 pb-4 gap-2">
                  <button class="btnn btnn1 bg-white py-1 rounded shadow-sm px-2 text-danger btn-sm">Remove</button>
                  <button class="btnn btnn2 bg-white py-1 rounded shadow-sm px-3 text-primary ">Save for later</button>
                </div>
              </div>

              <div class="text-end" style="min-width: 100px;">
                <p class="fw-semibold mb-1">$170.50</p>
                <select class="form-select form-select-sm">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </select>
              </div>
            </div>
            <hr>
          </div>
`
})

const moveToCart4= document.getElementById("moveToCart4");
moveToCart4.addEventListener("click",()=>{
    emptyDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnn1")) {
    const cartCard = event.target.closest(".cartCardremove");
    if (cartCard) {
      cartCard.remove();
    }
  }
});
emptyDiv.innerHTML+=`
 <div class="cartCardremove p-3 pb-0">
            <div class="d-flex align-items-start">
              <div class="d-flex align-items-center" style="width: 4rem;">
                <img src="./images/laptop.png" alt="" class="p-2"
                  style="width: 50px; height: 50px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;">
              </div>

              <div class="flex-grow-1">
                <p class="mb-1 fw-bold">T-shirts with multiple colors, for men and lady</p>
                <p class="text-muted mb-1 text-secondary" style="font-size: 14px;">
                  Size: medium, Color: blue, Material: Plastic<br>
                  Seller: <span class="text-secondary">Artel Market</span>
                </p>
                <div class="d-flex pt-2 pb-4 gap-2">
                  <button class="btnn btnn1 bg-white py-1 rounded shadow-sm px-2 text-danger btn-sm">Remove</button>
                  <button class="btnn btnn2 bg-white py-1 rounded shadow-sm px-3 text-primary ">Save for later</button>
                </div>
              </div>

              <div class="text-end" style="min-width: 100px;">
                <p class="fw-semibold mb-1">$170.50</p>
                <select class="form-select form-select-sm">
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                </select>
              </div>
            </div>
            <hr>
          </div>
`
})

const backTOShop = document.getElementById("backTOShop");
const cartCardremove = document.querySelectorAll(".cartCardremove");
const removeAll = document.getElementById("removeAll");
removeAll.addEventListener("click",()=>{
cartCardremove.forEach((cartbox)=>{
    cartbox.style.display="none";
    boxDiv.style.height="75PX";
});

})

const twoBtns = document.getElementById("twoBtns");
const removeBtn = document.querySelectorAll(".btnn1");
removeBtn.forEach((btnRemove)=>{
    btnRemove.addEventListener("click",()=>{
        let cartCardremove = btnRemove.closest(".cartCardremove")
        if(cartCardremove){
            cartCardremove.remove();
           
        }
    })
})


const boxDiv = document.getElementById("boxDiv");
const saveDiv = document.getElementById("saveDiv");

document.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("btnn1")) {
    const card = target.closest(".cartCardremove");
    if (card) card.remove();
  }

  if (target.classList.contains("saveForLaterBtn") || target.id.startsWith("savebtn")) {
    const card = target.closest(".cartCardremove");
    if (card && saveDiv) {
      const img = card.querySelector("img").src;
      const title = card.querySelector("p.fw-bold")?.innerText || "No title";
      const price = card.querySelector(".fw-semibold")?.innerText || "$0.00";

      const savedCard = document.createElement("div");
      savedCard.className = "ms-4";
      savedCard.style.width = "14rem";
      savedCard.innerHTML = `
        <div class="card border-0 rounded" style="height: 18rem;">
          <div class="bgColor2 rounded ">
            <img src="${img}" class="product-img rounded py-3 img-fluid card-img-top" alt="...">
          </div>
        </div>
        <div class="card-body lh-sm pt-2 p-0">
          <p class="fw-bold">${price}</p>
          <p class="card-text fw-light ul pt-0">${title}</p>
        </div>
        <button class="moveToCartBtn rounded btnn bg-white mt-2 mb-3 py-1 px-2 shadow-sm text-primary">
          <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0d6efd">
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 
              0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 
              200h280l110-200H246Zm-38-80h590q23 0 35 
              20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 
              80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 
              280h280-280Z" />
          </svg></i> Move to cart</button>
      `;

      saveDiv.appendChild(savedCard);
      card.remove();
    }
  }

 
  if (target.classList.contains("moveToCartBtn")) {
   
    let savedCard = target.closest(".ms-4") || target.closest(".card-body")?.parentElement;

    if (savedCard && boxDiv) {
      const img = savedCard.querySelector("img").src;
      const title = savedCard.querySelector("p.fw-bold")?.innerText || "No title";
      const price = savedCard.querySelector(".fw-bold")?.innerText || "$0.00";

      const cartCard = document.createElement("div");
      cartCard.className = "cartCardremove p-3 pb-0";
      cartCard.innerHTML = `
        <div class="d-flex align-items-start">
          <div class="d-flex align-items-center" style="width: 4rem;">
            <img src="${img}" alt="" class="p-2"
              style="width: 50px; height: 50px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;">
          </div>

          <div class="flex-grow-1">
            <p class="mb-1 fw-bold">${title}</p>
            <p class="text-muted mb-1 text-secondary" style="font-size: 14px;">
              Size: medium, Color: blue, Material: Plastic<br>
              Seller: <span class="text-secondary">Artel Market</span>
            </p>
            <div class="d-flex pt-2 pb-4 gap-2">
              <button class="btnn btnn1 bg-white py-1 rounded shadow-sm px-2 text-danger btn-sm">Remove</button>
              <button class="btnn bg-white py-1 rounded shadow-sm px-3 text-primary saveForLaterBtn">Save for later</button>
            </div>
          </div>

          <div class="text-end" style="min-width: 100px;">
            <p class="fw-semibold mb-1">${price}</p>
            <select class="form-select form-select-sm">
              <option>Qty: 1</option>
              <option>Qty: 2</option>
              <option>Qty: 3</option>
            </select>
          </div>
        </div>
        <hr>
      `;

      boxDiv.insertBefore(cartCard, document.getElementById("emptyDiv"));
      savedCard.remove(); 
    }
  }
});




