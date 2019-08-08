/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

image_name_list =[
  
  "0B8ELvDXxd7FubkRDQmYtZjY1SFk",
  "0B8ELvDXxd7FuSHZtbGJIUkhDVTA",
  "0B8ELvDXxd7Fud0kxVlBmbG1MLWc",
  "0B8ELvDXxd7FuN3plWVoxZm5VR2M",
  "0B8ELvDXxd7FudF9rVndzNjNnczA",
  "0B8ELvDXxd7FuMzZ3YkIwYTlqQmc",
  "0B8ELvDXxd7FuRW1DUmVvR1hnT1E",
  "0B8ELvDXxd7FuNndXcTFaazJrT0E",
  "0B8ELvDXxd7FucjJXWGw0Z2w5bVk",
  "0B8ELvDXxd7Fua2p3YjltSGFrcXc",
  "0B8ELvDXxd7FuMzVHa3pvOW93X3c",
  "0B8ELvDXxd7FuRi1wdDVsZVE5ZVk",
  "0B8ELvDXxd7FuWVdCNVI4emZFb1k",
  "0B8ELvDXxd7FudUphM3NNSFlfWlU",
  "0B8ELvDXxd7FuMW5CVnJCWHFKLTA",
  "0B8ELvDXxd7FuY09nSjRydWJXZW8",
  "0B8ELvDXxd7FuSHVzS3RTMUFfMkU",
  "0B8ELvDXxd7Fuak5iX2tuajQ0OWs",
  "0B8ELvDXxd7FubjI5b0IyTm9SaFU",
  "0B8ELvDXxd7FuSUd1QjNFcmx4UFE",
  "0B8ELvDXxd7FuMDhTaDlxbzZQSzQ",
  "0B8ELvDXxd7FuUXZMakNoRTU2WEU",
  "0B8ELvDXxd7Fudkp5RGEyZGtMcEk",
  "0B8ELvDXxd7FuRnM1TDdLMnpRRms",
  "0B8ELvDXxd7FuUDg5a0RfeHZFNzg",
  "0B8ELvDXxd7FuUXgtNXNfRVk0d1E",
  "0B8ELvDXxd7FucW9Hb1M3dFpGdmc",
  "0B8ELvDXxd7FueGdUV0ZwdTR3Yms",
  "0B8ELvDXxd7FuUWhBYjVIZlBPaFk",
  "0B8ELvDXxd7FuVm01TmlEZTNSTzQ",
  "0B8ELvDXxd7FuSVZmTjB6a0tOMVU",
  "0B8ELvDXxd7FuM0Z5Y2YtUVZWN1k",
  "0B8ELvDXxd7FuU2k5UllFeUdseGM",
  "0B8ELvDXxd7FuWDBKNFA5YUZ6WjA",
  "0B8ELvDXxd7FuaGdTemlBV1UwTmc"
  
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

