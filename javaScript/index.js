window.onload = () => {
    let btnSound = document.getElementsByClassName('btn-sound')[0];
    let soundActive = true;
    let gameActive = false;
    let gokuCount = 0;
  const gokuSprite = {
    posSprite: [
      { x_ini: 5, y_ini: 5, w: 60, h: 90 },
      { x_ini: 65, y_ini: 5, w: 60, h: 65 },
      { x_ini: 122, y_ini: 5, w: 60, h: 65 },
      { x_ini: 180, y_ini: 5, w: 60, h: 65 },
      { x_ini: 235, y_ini: 5, w: 60, h: 65 },
      { x_ini: 288, y_ini: 5, w: 65, h: 99 },
    ],
    src: "images/Sprites.png",
  };
  let platforms = [
    { x_ini: 300, y_ini: 350, w: 160, h: 60 },
    { x_ini: 200, y_ini: 450, w: 160, h: 60 },
    { x_ini: 400, y_ini: 140, w: 160, h: 60 },
    { x_ini: 100, y_ini: 600, w: 160, h: 60 },
    //{ x_ini: 50, y_ini: 50, w: 160, h: 60},
    { x_ini: 200, y_ini: 40, w: 160, h: 60 },
  ];
  class Goku {
    constructor() {
      this.x = 200;
      this.y = 200;
      this.width = 80; //width;
      this.heigth = 105; //heigth;
      this.velocidadX = 20;
      this.imgGoku = new Image();
      this.imgGoku.src = gokuSprite.src;
    }
  
    print(ctx) {
      // cuando hagamos control de coliciones, cuando toca para volver a saltar hay que reiniciar la animacion desde que toca,
      if (gokuCount >= 0 && gokuCount <= 8) {
        ctx.drawImage(this.imgGoku, gokuSprite.posSprite[0].x_ini, gokuSprite.posSprite[0].y_ini, gokuSprite.posSprite[0].w, 
        gokuSprite.posSprite[0].h, this.x, this.y, this.width, this.heigth);
      } else if (gokuCount > 7 && gokuCount <= 14) {
        ctx.drawImage(this.imgGoku, gokuSprite.posSprite[1].x_ini, gokuSprite.posSprite[1].y_ini, gokuSprite.posSprite[1].w,
          gokuSprite.posSprite[1].h, this.x, this.y, this.width,  this.heigth);
      } else if (gokuCount > 14 && gokuCount <= 21) {
        ctx.drawImage(this.imgGoku, gokuSprite.posSprite[2].x_ini, gokuSprite.posSprite[2].y_ini, gokuSprite.posSprite[2].w,
          gokuSprite.posSprite[2].h, this.x, this.y, this.width, this.heigth);
      } else if (gokuCount > 21 && gokuCount <= 28) {
        ctx.drawImage( this.imgGoku, gokuSprite.posSprite[3].x_ini, gokuSprite.posSprite[3].y_ini, gokuSprite.posSprite[3].w,
          gokuSprite.posSprite[3].h, this.x, this.y, this.width, this.heigth );
      } else if (gokuCount > 28 && gokuCount <= 35) {
        ctx.drawImage( this.imgGoku, gokuSprite.posSprite[4].x_ini, gokuSprite.posSprite[4].y_ini, gokuSprite.posSprite[4].w,
          gokuSprite.posSprite[4].h, this.x, this.y, this.width, this.heigth);
      } else if (gokuCount > 35 && gokuCount <= 41) {
        ctx.drawImage(this.imgGoku, gokuSprite.posSprite[5].x_ini, gokuSprite.posSprite[5].y_ini, gokuSprite.posSprite[5].w,
          gokuSprite.posSprite[5].h, this.x, this.y, this.width, this.heigth);
      } else if ((gokuCount = 42)) {
        ctx.drawImage(this.imgGoku, gokuSprite.posSprite[5].x_ini, gokuSprite.posSprite[5].y_ini, gokuSprite.posSprite[5].w, 
        gokuSprite.posSprite[5].h, this.x, this.y, this.width, this.heigth);
        gokuCount = 0;
      }
    }
    moveLeft() {
      this.x -= this.velocidadX /1;
      if (this.x < 0) {
        this.x = canvas.width;
      }
    }
    moveRight() {
      this.x += this.velocidadX /1;
      if (this.x > canvas.width) {
        this.x = 0;
      }
    }
  }
  
  class Platform {
    constructor(canvas) {
      this.imgPlatform = new Image();
      this.imgPlatform.src = "images/kinton.png";
      this.velocidad = 50;
    }
    print(ctx) {
      game.platforms.forEach((pos) => {
        ctx.drawImage(this.imgPlatform, pos.x_ini, pos.y_ini, pos.w, pos.h);
      });
    }
    move() {
      this.y += this.velocidad;
    }
  }
  class PlatformMove {
    constructor() {
      this.x = Math.floor(Math.random() * 390);
      this.y = 0;
      this.w = 160;
      this.h = 60;
      this.imgPlatformMove = new Image();
      this.imgPlatformMove.src = "images/kinton.png";
      this.velocidadX = 8;
      this.velocidadY = 0;
    }
    print(ctx) {
      ctx.drawImage(this.imgPlatformMove, this.x, this.y, this.w, this.h);
    }
    move() {
      this.x += this.velocidadX;
      if (this.x > canvas.width) {
        this.x = 0;
      }
    }
  }
  class PlatformBreak extends Platform {
    constructor(x, y, width, heigth) {
      super(x, y, width, heigth);
      this.imgPlatformBreak = new Image();
      this.imgPlatformBreak.src = "";
      this.imgPlatformBreaking = new Image();
      this.imgPlatformBreaking.src = "";
    }
    print(ctx) {
      ctx.drawImage(this.imgPlatformBreak, this.x, this.y, this.width, this.heigth);
    }
    /* g   BONUS     break (ctx) {
            ctx.drawImage(this.imgPlatformBreaking, this.x, this.y, this.width, this.heigth)
            BONUS
            BONUS
        } */
  }
  class Obstacle {
    constructor (canvas) {
        this.x = Math.floor(Math.random() * 350);
        this.y = -60;
        this.width = 100;
        this.heigth = 80; 
        this.imgObstacle = new Image ();
        this.imgObstacle.src = "images/cabeza.png";
        this.velocidadX = 4;
    }
    move(){
      this.x += this.velocidadX;
      if (this.x >= (canvas.width - 85)) {
        this.velocidadX = - 4;
      }
      if(this.x <= 32){
        this.velocidadX = 4;
      }
    
    }
    print(ctx){
            ctx.drawImage(this.imgObstacle, this.x, this.y, this.width, this.heigth);
        };
    move () {
      this.x += this.velocidadX;
          if (this.x >= (canvas.width -85)) {
              this.velocidadX = -4;
          }
          if (this.x <= -35) {
              this.velocidadX = 4;
          }
    }
    }
    class Game {
    constructor(platforms) {
      this.canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
      this.win = new Image();
      this.win.src = "images/winphoto.png";
      this.lose = new Image();
      this.lose.src = "images/GameOver.png";
      this.wallpaper = new Image();
      this.wallpaper.src = "images/wallpaper.jpeg";
      this.goku = new Goku();
      this.platform = new Platform();
      this.platformMove = new PlatformMove();
      this.obstacle = new Obstacle ()
      this.platformBreak = new PlatformBreak();
      this.platforms = platforms;
      this.platformsMove = [];
      this.score = 0;
      this.intervalId = undefined;
      this.iteration = 0;
      this.jumpT = false;
      this.colition = false;
      this.reJump = 0;
    }
    start() {
      if (this.intervalId == undefined) {
        this.intervalId = setInterval(() => {
          this.score += 10;
          gokuCount++;
          this.iteration++;
          this.reJump++;
          this.clear();
          this.recalculate();
          this.gravity();
          this.print();
          this.stop();
        }, 25);
      }
    }
    stop() {
      if (this.goku.y > 750 || this.colition == true) {
        gameActive = false;
        clearInterval(this.intervalId);
        gokuCount = 0;
        this.lose.src = "images/GameOver.png";
        this.ctx.drawImage(this.lose, 150, 180, 300, 300);
        this.ctx.fillText("GAME OVER", 200, 510);
      }
      if (this.score >= 7000) {
        gameActive = false;
        clearInterval(this.intervalId)
        this.win.src = "images/winphoto.png";
        this.ctx.drawImage(this.win, 150, 150, 250, 350)
      } 
    }
    delet() {
      delete this;
    }
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    print() {
      this.ctx.drawImage(this.wallpaper, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "black";
      this.ctx.font = "25px Rubik Mono One";
      this.ctx.fillText(`SCORE: ${this.score}`, 30, 50);
      this.platform.print(this.ctx);
      this.goku.print(this.ctx);
      if (this.score >= 2000 && this.score <= 7500) {
        this.platformMove.print(this.ctx);
      }
      if (this.score >= 3000 && this.score <= 8500) {
          this.obstacle.print(this.ctx)
      }
    }
  
    gravity() {
      this.goku.y += 8;
    }
    jump() {
      if (this.jumpT == true && this.iteration >= 0 && this.iteration <= 8) {
        this.goku.y -= 3.5;
      } else if (this.jumpT == true && this.iteration >= 9 && this.iteration <= 14) {
        this.goku.y -= 2;
      } else if (this.jumpT == true && this.iteration >= 15 && this.iteration <= 18) {
        this.goku.y -= 1;
      } else if (this.jumpT == true && this.iteration >= 19) {
        this.goku.y -= 0.8;
        this.iteration = 0;
        this.jumpT = false;
      }
    }
  
      /* bolaDragon () {
            if (this.jumpT == true && this.iteration >= 0 && this.iteration <=20) {
                this.goku.y -=100;
            } else if (this.jumpT == true && this.iteration >= 21 && this.iteration <=40) {
                this.goku.y -= 80;
            } else if (this.jumpT == true && this.iteration >= 41 && this.iteration <=60) {
                this.goku.y -= 40;
            } else if (this.jumpT == true && this.iteration >= 61 && this.iteration <= 79) {
                this.goku.y -= 10;
            } else if (this.jumpT == true && this.iteration == 80) {
                this.iteration = 0;
                this.jumpT = false
            } 
        } */
    recalculate() {
        this.platformMove.move();
        this.obstacle.move();
        this.platforms.forEach((platform) => {
            if (platform.y_ini > this.canvas.height) {
                platform.x_ini = Math.floor(Math.random() * 390);
                platform.y_ini = -10;
            }
            if (!(this.goku.x + this.goku.width - 20 < platform.x_ini + 10 || this.goku.x - 10 > platform.x_ini + platform.w - 50 || this.goku.y + this.goku.heigth - 10 < platform.y_ini + 20 || this.goku.y - 10 > platform.h + platform.y_ini - 25) && this.reJump > 18) {
                this.jumpT = true;
                this.reJump = 0;
                this.iteration = 0;
                gokuCount = 6;
            }
            if (!(this.goku.x + this.goku.width - 20 < this.platformMove.x + 10 || this.goku.x - 10 > this.platformMove.x + this.platformMove.w - 50 || this.goku.y + this.goku.heigth - 10 < this.platformMove.y + 20 || this.goku.y - 10 > this.platformMove.h + this.platformMove.y - 25) && this.reJump > 18) {
                this.jumpT = true;
                this.reJump = 0;
                this.iteration = 0;
                gokuCount = 6;
            }
            if(!(this.goku.x + this.goku.width -20 < this.obstacle.x +20 || this.goku.x  > this.obstacle.x + this.obstacle.width -20|| this.goku.y -10 > this.obstacle.y + this.obstacle.heigth -5 || this.goku.y + this.goku.heigth -20 < this.obstacle.y -20)) {
                this.colition = true
            }  
            if (this.jumpT == true) {
                this.platforms[0].y_ini += 1;
                this.platforms[1].y_ini += 1;
                this.platforms[2].y_ini += 1;
                this.platforms[3].y_ini += 1;
                this.platforms[4].y_ini += 1;
                if (this.score >= 2000 && this.score <= 7500) {
                  this.platformMove.y += 1;
                }
                if (this.score >= 3000 && this.score <= 8500) {
                  
                  this.obstacle.y += 1;
              }
                this.jump();
                if (this.goku.y < 60) this.goku.y = 60;
              }
            });
       
        }
    }
    
    let sound = new Audio("sounds/Musica.mp3");
    let game = new Game(platforms);
    document.getElementById("btn").onclick = () => {
    if (!gameActive) {
        sound.play();
        gameActive = true;
        game.clear();
        game.delet();
        game = new Game(platforms);
        startGame();
        btnSound.innerHTML = 'SOUND ON'
        soundActive = true;
    }
  };
  function startGame() {
      game.start();
    }
    
  document.getElementsByTagName("body")[0].addEventListener("keydown", (flecha) => {
        switch (flecha.key) {
            case "ArrowLeft":
                game.goku.moveLeft();
                break;
            case "ArrowRight":
                game.goku.moveRight();
                break;
                default:
                    break;
        }
    });
    document.getElementsByTagName("body")[0].addEventListener("keyup", (flecha) => {
      switch (flecha.key) {
          case "ArrowLeft":
              game.goku.moveLeft();
              break;
          case "ArrowRight":
              game.goku.moveRight();
              break;
              default:
                  break;
      }
  });
    document.getElementsByClassName('btn-sound')[0].onclick = () => {
        if (!soundActive) {
            sound.play();
            soundActive = true;
            btnSound.innerHTML = 'SOUND ON'
        }else {
            sound.pause();
            soundActive = false
            btnSound.innerHTML = 'SOUND OFF'
        }
    }
    document.querySelector("#btn").addEventListener("click", function() {
      document.querySelector("#gameBoard").style.display = "block";
  });
  
  };        
  