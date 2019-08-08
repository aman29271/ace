/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
image_name_list =[
  
  "0B8ELvDXxd7FuQ0stTG9PNENmYkE",
  "0B8ELvDXxd7FuRTBzRXJMYUxmNkk",
  "0B8ELvDXxd7FuWkItc1VzX2NSOU0",
  "0B8ELvDXxd7FuWFpLajJGVTJ0bTA",
  "0B8ELvDXxd7FucndqYVpnVnVTNFE",
  "0B8ELvDXxd7FuZXg5N1E5ZHBzMTA",
  "0B8ELvDXxd7FuRWg0bkd4S280elU",
  "0B8ELvDXxd7FuMndHdjBWal9fZEk",
  "0B8ELvDXxd7FuT0pRQV9URGRwZXM",
  "0B8ELvDXxd7FuS1FEZFdoaDJLUFE",
  "0B8ELvDXxd7FuTDN3UTFsdThJLXM",
  "0B8ELvDXxd7FubDQxTXVlc0RwbUU",
  "0B8ELvDXxd7FuUGJpdTlndlpVd1U",
  "0B8ELvDXxd7FuY29IVXUxT2xGWlE",
  "0B8ELvDXxd7Fua1FobUlfTENIbWc",
  "0B8ELvDXxd7FuVGcweE4wemlTR28",
  "0B8ELvDXxd7FuWE9tQ0VFbVZreWs",
  "0B8ELvDXxd7FuQVVZYjJMNGxocGc"
];
// var i=0;
//  window.onload= function(){
// image_loop();

//   };
// function image_loop(){
//     if(i< image_name_list.length){
//         var newDIV = document.createElement('div');
//         var imgDOM= document.createElement('img');
//         var downloadingImage = new Image();
//         downloadingImage.src = "https://drive.google.com/thumbnail?id=" + image_name_list[i];
//         imgDOM.onclick = function(){fetch_link(this)};
//         newDIV.className="image";
//         newDIV.appendChild(imgDOM);
//         downloadingImage.onload = function(){
//             imgDOM.src = this.src;
//             imgDOM.parentElement.style.backgroundImage="none";
//         }
//         document.querySelector(".row").appendChild(newDIV);
//         i++;
//         setTimeout(image_loop,50);
//     } else{}
// };
//  var img_link;
//  var img_html;
// function fetch_link(element){
//     console.log(element);
//     img_html = element;
//     img_link = element.src;
//     img_link =img_link + "&sz=w850-h550";
//     insert_img();
// }
// function insert_img(){
//     if(document.querySelector(".modal-main-content").children.length !=0){
//         var parentDIV = document.querySelector(".modal-main-content");
//         parentDIV.firstElementChild.src =img_link;
//         document.getElementById("modal").style.display="block";
//     }
//     else{
//         var new_img = document.createElement("img");
//         var parentDIV = document.querySelector(".modal-main-content");
//         new_img.src= img_link;
//         parentDIV.appendChild(new_img);
//         document.getElementById("modal").style.display="block";
//     };
// }
// function close_btn(){
//     var modal = document.getElementById("modal");
//     modal.style.display="none";
// }
// function previous_slide(){
//     var previous_image = img_html.parentElement.previousElementSibling.firstChild;
//     fetch_link(previous_image);
// }
//  function next_slide(){
//     var next_image = img_html.parentElement.nextElementSibling.firstChild;
//     fetch_link(next_image);
//  }
//  function modal_close(){
//      document.getElementById("modal").style.display="none";
//  }
//  document.onkeydown = function(event){
//      event = event || window.event;
//      console.log(event.keyCode);
//      switch(event.keyCode){
//         case 27:
//             modal_close();
//             break;
//         case 37:
//             previous_slide();
//             break;
//         case 39:
//             next_slide();
//             break;
        
//         }
//  }

