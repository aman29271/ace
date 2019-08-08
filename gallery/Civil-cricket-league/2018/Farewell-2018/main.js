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
//  window.onload= function(){
// // image_loop();
// $('.row').justifiedGallery({
//     lastRow: 'nojustify',
//     rowHeight: 160,
//     margin : 20,
// }).on('jg.complete',function(){
//     $('.swipebox-image').swipebox();
// })
// // test();
// // load_image(image_name_list);
// image_name_list.forEach(img => {
//     thumbnail_src = `https://drive.google.com/thumbnail?id=${img}`;
//     img_src = `https://drive.google.com/thumbnail?id=${img}&sz=w850-h550`;
//     var anchor  = document.createElement('a');
//     anchor.href = img_src;
//     anchor.classList.add('swipebox-image');
//     var image = new Image();
//     image.onload = function(){
//         anchor.innerHTML=`<img src="${image.src}" alt="" class="img">`;
//         var parent_el = document.querySelector('.row');
//         parent_el.appendChild(anchor);
//         $('.row').justifiedGallery('norewind');
//     }
//     image.src = thumbnail_src;
//     // anchor.classList.add('img-anchor');
//     // var anchor = `<a href="${img_src}" class="swipebox-image"><img src="${thumbnail_src}"></a>`;
// });
// };
// var count=0;
// function test(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://drive.google.com/thumbnail?id=1v_8RCgv7BBjYHH9YFdC-Z08De-lN3_g0',true);
//     xhr.responseType = 'blob';
//     xhr.onload = function(){
//         if(xhr.status == 200 && xhr.readyState ==4){
//             var blob = this.response;
//             var img = new Image();
//             img.onload = function(){
//                 var p = document.querySelector('.row');
//                 p.appendChild(img);
//                 window.URL.revokeObjectURL(img.src);
//             }
//             img.src = window.URL.createObjectURL(blob);
//         }
//     }
//     xhr.send()
// }
// function load_image(){
//     length = image_name_list.length;
//     if(length - count >= 12){
//         load_next = 12;
//     }
//     else{
//         load_next = length;
//     }
//     for(var i=count;i<(count + load_next);i++){
//         updateHTML(image_name_list[i]);
//     }
//     count = count + load_next;

// }
// function updateHTML(e){
//     var xhr = new XMLHttpRequest();
//     var url = "https://drive.google.com/thumbnail?id="+ e;
//     xhr.open('GET',url,true);
//     xhr.responseType = 'blob';
//     xhr.onload = function(){
//         if(xhr.readyState == 4 && xhr.status ==200){
//             var blob = xhr.response;
//             var img = new Image();
//             img.onload = function(){
//                 var anchor = document.createElement('a');
//                 anchor.href = `${url}&sz=w850-h550`;
//                 anchor.classList.add('swipebox-image');
//                 anchor.appendChild('img');
//                 var parent_el = document.querySelector('.row');
//                 parent_el.appendChild(anchor);
//                 $('.row').justifiedGallery('norewind');
//                 window.URL.revokeObjectURL(img.src);
//             }
//             img.src = window.URL.createObjectURL(blob);
//         }
//         else{
//             console.log("Network Error detected");
//         }
//     }
//     xhr.send();
// }
