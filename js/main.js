!function(){
    var duration =50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
        .siblings('.active').removeClass('active')  //兄弟姐妹有active的就删掉
        switch(speed){
            case 'slow':
                duration=100
                break;
            case 'normal':
                duration=50
                break;
            case 'fast':
                duration=10
                break;  
        }
    })
  function writeCode(prefix,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n=0
    let id
    id= setTimeout(function run(){
        //  console.log(duration)
        n+=1
        container.innerHTML=code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n<code.length){
           id= setTimeout(run,duration)           
        }
        else{
            fn&&fn.call()
        }
    },duration)//setInterval读了一次20ms之后    就不会再读了
  } 
  let code = `
  /*
  *首先准备皮卡丘的皮
  */
  .preview{
    height:100%;
    border:1px solid green;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #fee433;
  }
  
  .wrapper{
    width:100%;
    height:165px;
    position: relative;
    /* border:solid red 1px; */
  }

  .wrapper > :not(:last-child){
      z-index:1;
  }
  /*
  *画皮卡丘鼻子
  */
  .nose{
    width:0px;
    height:0px;
    border-style:solid;
    border-width:12px;
    border-color:black transparent transparent;
    border-radius:11px;
    position:absolute;
    left:50%;      /*左边的边界在中间，不是本身的中间与父亲的中间对齐*/
    top:28px;
    margin-left:-12px;  /*11是22的一半 ,或者用下面的*/
   /*  transform:translateX(-50%); */
    
  }
  /*
  *画皮卡丘的2只眼睛
  */
  .eye{
    width:49px;
    height:49px;
    background: #2e2e2e;
    position: absolute;
    border-radius:50%;
    border:2px solid #000000;
  }
  /*
  *画皮卡丘的2只眼睛里的珠子
  */
  .eye::before{
    content:'';
    display:block;
    width:24px;
    height:24px;
    background:white;
    position: absolute;
    border-radius:50%;
    left:6px;
    top:-1px;
    border:2px solid #000;
  }
  /*
  *左边眼睛
  */
  .eye.left{
    right:50%;
    margin-right:90px;
  }
  /*
  *右边眼睛
  */
  .eye.right{
    left:50%;
    margin-left:90px;
  }
  /*
  *画腮红
  */
  .face{
    width:68px;
    height:68px;
    background: #fc0d1c;
    border:2px solid black;
    border-radius:50%;
    position: absolute;
    top:85px;
  }
  /*
  *左边腮红
  */
  .face.left{
    right:50%;  
    margin-right:116px;
  }
  /*
  *右边腮红
  */
  .face.right{
    left:50%;
    margin-left:116px;
  }
  /*
  *画上嘴唇
  */
  .upperLip{
    width:80px;
    height:25px;
    border:2px solid black;  
    position: absolute;
    top:46px;
    background: #fee433;
  }
  /*
  *画左上嘴唇
  */
  .upperLip.left{
    right:50%;
    border-bottom-left-radius:40px 25px;
    border-top:none;
    border-right:none;
    transform:rotate(-18deg);
  }
  /*
  *画右上嘴唇
  */
  .upperLip.right{
    left:50%;
    border-bottom-right-radius:40px 25px;
    border-top:none;
    border-left:none;
    transform:rotate(18deg);
  }
  /*
  *画下嘴唇
  */
  .lowerLip-wrapper{
    bottom:-30px;
    position: absolute;
    left:50%;
    margin-left:-90px;
    /* z-index:-1; */
    /* border:1px solid red; */
    height:140px;
    width:180px;
    overflow:hidden;
  }
  
  .lowerLip{
    width:180px;
    height:1000px;
    background: #990513;
    border-radius:120px/600px;
    border:2px solid black;
    position: absolute;
    bottom:0px;
    overflow:hidden;
  }
  /*
  *画里面的舌头
  */
  .lowerLip::after{
    content:'';
    position:absolute;
    bottom:-20px;
    width:130px;
    height:130px;
    background: #fc4a62;
    left:50%;
    margin-left:-65px;
    border-radius:65px;
  }
  /*
  *好了，皮卡丘画完了，送给你
  */
  `
  writeCode('',code)
}.call()

