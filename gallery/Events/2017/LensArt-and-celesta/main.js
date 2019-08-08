/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
image_name_list =[
  
  "11biahuUwiKGj4snxsUZ-orMLDcXjrSer",
  "1v_Cw5sRAj4HTCB2uC54xuDLUD1pYrTKm",
  "1-tz8x8QtF2J-te3cWy7fkSTao6AqTwUl",
  "1ta7B5KlnaJEfN4EvAiz2LyT1Bp3imHOA",
  "1Enb3QbNTGgqGUuf3TFTKaE1akJMtA55d",
  "1Lr9iKT3XNTToLVXuUrpqecEP1NVHVo1M",
  "1RVB0zRF_aBJ2twbvupWjfuHhPH0V6q9m",
  "1S2losZ6abtnQfx7zdMwLgr8Iz_QSaFPa"
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

