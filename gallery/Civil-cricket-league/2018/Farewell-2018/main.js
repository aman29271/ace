/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
image_name_list=[
  "1v_8RCgv7BBjYHH9YFdC-Z08De-lN3_g0",
  "1mF34d4LbzckdQVCTFCQPYXRgxPgRGwd1",
  "1XM1f7b2buaMf_7z5AXxtRv0feGbVUoXZ",
  "17LCO9G7NeroYQRcIpuDW3mD1rj-gPL7E",
  "1EP4Yr4tdoKq6THif78aV9URSWUVPTM-o",
  "1w8aTo8bU2_aAaRjgr6LIIJiwbI2X_2W0",
  "1KUH2MMXaNcG-gAph7wKbKwnWq3EOxpdY",
  "1y53fYkY2hjmDn7i2-iavddU5zCsbSgKF",
  "1mln26bbMGb1H6SKYi1YyuUIKfFzRWKys",
  "1FuyGoJmADhJ5hVwNibVkF8dXMo35vVd4",
  "1E7LVT2qRyHHEgljB2xg2DjR8qnNqSjTy",
  "19pclSaRf627a1rZrYOtgu-CdhRNZ1i5T",
  "12_e0HB-Lxa5x85DA1IDA7kG77cD8g1l2",
  "112F7BGZYYm4U98J79S9DrKrvX_o2mT4t",
  "1oC48jd3cpLNXLEhczPaYT9N-HGPy1C5p",
  "1gsac72jPuMpk1m0l0JRIvP2J6HI_2YLo",
  "1ePluZ_VVE9wshcQrDWDX_jQeqqk4onzi",
  "1adHb1JcOSVv4ArYQe53_jaf4twbKbFgd",
  "1_vRk_6FZRndqj8N3OvDHIxP0v6H7QoCT",
  "1lF7euPbl-dpOxW_hjlvNjsnknZKxGnJJ",
  "1kylaEMLHgM_JmzaRUg_RldDwhMLiIqEu",
  "1kERFMc6CkqEpfzY6oMyTq0E22Nu4DneY",
  "1_ojxXEOnVWuJ9vI31YS7d9GRnprpWxP4",
  "154OpbJ5ojTWHFm02VyeVQWfMjNZygJVK",
  "1Ol272b3SomSrLCSkcuPGje1VQyoyJjRW"
];
var i=0;
 window.onload= function(){
image_loop();

  };
function image_loop(){
    if(i< image_name_list.length){
        var newDIV = document.createElement('div');
        var imgDOM= document.createElement('img');
        var downloadingImage = new Image();
        downloadingImage.src = "https://drive.google.com/thumbnail?id=" + image_name_list[i];
        imgDOM.onclick = function(){fetch_link(this)};
        newDIV.className="image";
        newDIV.appendChild(imgDOM);
        downloadingImage.onload = function(){
            imgDOM.src = this.src;
            imgDOM.parentElement.style.backgroundImage="none";
        }
        document.querySelector(".row").appendChild(newDIV);
        i++;
        setTimeout(image_loop,50);
    } else{}
};
 var img_link;
 var img_html;
function fetch_link(element){
    console.log(element);
    img_html = element;
    img_link = element.src;
    img_link =img_link + "&sz=w850-h550";
    insert_img();
}
function insert_img(){
    if(document.querySelector(".modal-main-content").children.length !=0){
        var parentDIV = document.querySelector(".modal-main-content");
        parentDIV.firstElementChild.src =img_link;
        document.getElementById("modal").style.display="block";
    }
    else{
        var new_img = document.createElement("img");
        var parentDIV = document.querySelector(".modal-main-content");
        new_img.src= img_link;
        parentDIV.appendChild(new_img);
        document.getElementById("modal").style.display="block";
    };
}
function close_btn(){
    var modal = document.getElementById("modal");
    modal.style.display="none";
}
function previous_slide(){
    var previous_image = img_html.parentElement.previousElementSibling.firstChild;
    fetch_link(previous_image);
}
 function next_slide(){
    var next_image = img_html.parentElement.nextElementSibling.firstChild;
    fetch_link(next_image);
 }
 function modal_close(){
     document.getElementById("modal").style.display="none";
 }
 document.onkeydown = function(event){
     event = event || window.event;
     console.log(event.keyCode);
     switch(event.keyCode){
        case 27:
            modal_close();
            break;
        case 37:
            previous_slide();
            break;
        case 39:
            next_slide();
            break;
        
        }
 }



