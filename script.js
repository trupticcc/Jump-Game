
let score = 0 ;
let cross = true ; 
let gameover_ = false ;

document.onkeydown = function(e) 
{
     console.log("key code : " ,e.keyCode);
     dino = document.querySelector(".dino");
     if(e.keyCode == 38)  // for jump
        { 
             dino.classList.add("animatedino");
             setTimeout(() => {
                dino.classList.remove("animatedino");
             }, 700);              // 700 miliseconds
        }
        else if(e.keyCode == 39) // for right 
            {
              dino_l = parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
              dino.style.left = dino_l + 300 + "px" ;
            }
        else if(e.keyCode == 37) // for left 
                {
                     dino_l = parseInt(window.getComputedStyle(dino , null ).getPropertyValue("left"));
                     dino.style.left = dino_l - 300 + "px" ;
                }

}

setInterval(() => {
     dino = document.querySelector(".dino");
     obstacle = document.querySelector(".obstacle");
     gameover = document.querySelector(".gameover");

     dx = Number.parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
     dy = Number.parseInt(window.getComputedStyle(dino , null).getPropertyValue("bottom"));

     ox = Number.parseInt(window.getComputedStyle(obstacle , null).getPropertyValue("left"));
     oy = Number.parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("bottom"));

     offsetX = Math.abs(dx-ox);
     offsety = Math.abs(dy-oy);

     // console.log(offsetX , offsety );

     if(offsetX < 50 && offsety < 52 )
          {
               //  alert("game over ")
                gameover_ = true ;
                gameover = document.querySelector(".gameover");
                gameover.innerHTML = "Play Again";
                gameover.style.visibility = "visible" ;

          }
          else if(offsetX < 100 && cross)
          {     
                if(!gameover_)
                    {
                ++score ; 
                updatescore(score);
                cross = false ;
                setTimeout(()=> {
                      cross = true ; 
                }, 1000 );
                gameover = document.querySelector(".gameover");
                gameover.style.visibility = "hidden" ;

               }else 
               {
                    score = 0 ; 
                    updatescore(score);
                    gameover_ = false ; 
               }
          }

}, 10);

function updatescore(score)
{
      scorecount.innerHTML = "Your score : " + score ; 
}