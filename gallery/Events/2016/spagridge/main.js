/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
image_name_list =[
  
  "0B8ELvDXxd7FuU3hsdF8taVRuV2M",
  "0B8ELvDXxd7FueTlJaUxIN0cwLWc",
  "0B8ELvDXxd7FuRUVKZTZZX0l1eWM",
  "0B8ELvDXxd7FubV81SkU0TkpJMDQ",
  "0B8ELvDXxd7FuQkZoZDJIT0M2ZGc",
  "0B8ELvDXxd7FuaTJ1djJuVGlNZDg",
  "0B8ELvDXxd7FuODRZMFg4TTVxSm8",
  "0B8ELvDXxd7FuZlhjV19sNjdnNms",
  "0B8ELvDXxd7FuUHE0MVZ2VFpiVG8",
  "0B8ELvDXxd7FucE1mZllBWi1JYWc",
  "0B8ELvDXxd7FuSW5kb3RaU3NUaFk",
  "0B8ELvDXxd7FuMzZsRzh6ZTE5eWs",
  "0B8ELvDXxd7FuSVdkbDhxX01sNGc",
  "0B8ELvDXxd7FuYVpUUWg1d181enM",
  "0B8ELvDXxd7FueWwzVU5FNTNUNVU",
  "0B8ELvDXxd7FuVVhWS1p6YUtCeU0",
  "0B8ELvDXxd7FuOC1sQ2VJbU9XeDg",
  "0B8ELvDXxd7FuVjJ0eTNwUEV4Uk0",
  "0B8ELvDXxd7FuYklWZ0pqQnBVZ0E",
  "0B8ELvDXxd7FuMnhOM3BIOHg5OHc",
  "0B8ELvDXxd7FudUxaV0NJa1BxQlk",
  "0B8ELvDXxd7Fuc3JZRERkYU9DeWM",
  "0B8ELvDXxd7FuSjlpWjc5ekszYTg",
  "0B8ELvDXxd7FubUlDckZjb0p6dlk",
  "0B8ELvDXxd7FuZ05nbVZTOHpiWm8",
  "0B8ELvDXxd7FuZmFZRnk5QllIWVE",
  "0B8ELvDXxd7FuUXlqUHdIUzVsNWc",
  "0B8ELvDXxd7FuRENjcVZtTDE3Qm8",
  "0B8ELvDXxd7FudjJ1TUpKc01yMk0",
  "0B8ELvDXxd7FuVG8zSTJnTzU1aUE",
  "0B8ELvDXxd7Fucy1BY3VMZVpkZDA",
  "0B8ELvDXxd7FuMUtaUE02dDBpcTQ",
  "0B8ELvDXxd7FuZ1ROMFZmZFdJeVU",
  "0B8ELvDXxd7FuMU1aNzNsWmR5OUU",
  "0B8ELvDXxd7FuVlZjWnA2WHFhSWs"
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
