window.onload= function(){
    // image_loop();
    $('.row').justifiedGallery({
        lastRow: 'nojustify',
        rowHeight: 200,
        margin : 20,
    }).on('jg.complete',function(){
        $('.swipebox-image').swipebox();
    })
    init_load();
    };
    {
        let n = image_name_list.length;
        let count =0;
        function init_load(){
            let i;
            if(n-count>12){
                 i=12;
            }
            else{
                 i = n-count;
            }
            for(let j=0;j<i;j++){
                const thumbnail = image_name_list[count+j];
                let thumbnail_src = `https://drive.google.com/thumbnail?id=${thumbnail}`;
                let img_src = `https://drive.google.com/thumbnail?id=${thumbnail}&sz=w850-h550`;
                let anchor = document.createElement('a');
                anchor.href=img_src;
                anchor.classList.add('swipebox-image');
                let image = new Image();
                image.onload = function(){
                    anchor.innerHTML=`<img src="${image.src}" alt="" class="img">`;
                    var parent_el = document.querySelector('.row');
                    parent_el.appendChild(anchor);
                    $('.row').justifiedGallery('norewind');
                }
                image.src = thumbnail_src;
            }
            count = count + i;
            
        }
    }
    $(window).scroll(function(){
        if($(window).scrollTop()+ $(window).height() >= ($(document).height()-100)){
            init_load();
        }
    })
