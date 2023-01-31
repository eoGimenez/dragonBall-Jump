window .onload = () => {
    let gokuCount = 0;
    let cont = 0;
    let intervaloSalto = -120;
    let intervaloBajo = 120
    const gokuSprite = {
        posSprite: [
          { x_ini: 5, y_ini: 5, w: 60, h: 90 },
          { x_ini: 65, y_ini: 5, w: 60, h: 65 },
          { x_ini: 122, y_ini: 5, w: 60, h: 65 },
          { x_ini: 180, y_ini: 5, w: 60, h: 65 },
          { x_ini: 235, y_ini: 5, w: 60, h: 65 },
          { x_ini: 288, y_ini: 5, w: 65, h: 99 }
        ],
        src: "images/Sprites.png"
        
    };
class Goku {
    constructor () {
            this.x = 225;
            this.y = 450;
            this.width = 80 //width;
            this.heigth = 105 //heigth;
            this.velocidadX = 10;
            this.velocidadY = 5;
            this.aceleracion = -9.8,
            this.imgGoku = new Image ();
            this.imgGoku.src = gokuSprite.src;
            this.jump= 60;
            this.i = 0;
            this.setIntervalGoku = undefined;
        }

        print (ctx) {
            // cuando hagamos control de coliciones, cuando toca para volver a saltar hay que reiniciar la animacion desde que toca,
            if (gokuCount >= 0 && gokuCount <= 8) {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[0].x_ini, gokuSprite.posSprite[0].y_ini, gokuSprite.posSprite[0].w, gokuSprite.posSprite[0].h, this.x, this.y, this.width, this.heigth);
            } else if (gokuCount > 7 && gokuCount <= 14) {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[1].x_ini, gokuSprite.posSprite[1].y_ini, gokuSprite.posSprite[1].w, gokuSprite.posSprite[1].h, this.x, this.y, this.width, this.heigth);
            } else if (gokuCount > 14 && gokuCount <= 21) {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[2].x_ini, gokuSprite.posSprite[2].y_ini, gokuSprite.posSprite[2].w, gokuSprite.posSprite[2].h, this.x, this.y, this.width, this.heigth);
            } else if (gokuCount > 21 && gokuCount <= 28) {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[3].x_ini, gokuSprite.posSprite[3].y_ini, gokuSprite.posSprite[3].w, gokuSprite.posSprite[3].h, this.x, this.y, this.width, this.heigth);
            } else if (gokuCount > 28 && gokuCount <= 35) {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[4].x_ini, gokuSprite.posSprite[4].y_ini, gokuSprite.posSprite[4].w, gokuSprite.posSprite[4].h, this.x, this.y, this.width, this.heigth);
            } else if (gokuCount > 35 && gokuCount <= 41) {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[5].x_ini, gokuSprite.posSprite[5].y_ini, gokuSprite.posSprite[5].w, gokuSprite.posSprite[5].h, this.x, this.y, this.width, this.heigth);
            } else if (gokuCount = 42) {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[5].x_ini, gokuSprite.posSprite[5].y_ini, gokuSprite.posSprite[5].w, gokuSprite.posSprite[5].h, this.x, this.y, this.width, this.heigth);
                gokuCount = 0;
            }
        }
        moveLeft () {
            this.x -= this.velocidadX; // falta margen
        }
        moveRight (){
            this.x += this.velocidadX // falta margen
        }
        rebound (ctx) {
            // re ajustar a nuevas medidas canva,
             if (cont < 25 || cont >54) {
                this.y = this.y + (this.velocidadY * intervaloSalto) + ( (this.aceleracion*intervaloSalto) /2)
              //ctx.fillRect(this.x, this.y, this.width, test.heigth) // imprimir goku subiendo
              //this.print(ctx)
            } else if ( cont > 25 ) {
                console.log("sbais")
                this.y = this.y + (this.velocidadY * intervaloBajo) + ( (this.aceleracion*intervaloBajo) /2)
                //this.print(ctx)//ctx.fillRect(test.x, test.y, test.width, test.heigth) // imprimir goku bajando
            }
            if (cont >= 49) cont = 0; 
        }
    }
    class Platform {
        constructor (canvas) {
            // this.width = 160;
            // this.heigth = 60;
            this.platform = [
                { x_ini: 300, y_ini: 350, w: 160, h: 60},
                { x_ini: 200, y_ini: 450, w: 160, h: 60},
                { x_ini: 400, y_ini: 150, w: 160, h: 60},
                { x_ini: 100, y_ini: 550, w: 160, h: 60}, 
                { x_ini: 50, y_ini: 50, w: 160, h: 60},
                
            ],
            // this.x = Math.floor(Math.random()*(450/* canvas.width */ - this.width));
            // this.y = Math.floor(Math.random()*(450/* canvas.height */ - this.height));
            this.imgPlatform = new Image ();
            this.imgPlatform.src = "images/kinton.png";
            this.velocidad = 100;
        }
        print (ctx) {
            ctx.drawImage(this.imgPlatform, this.x, this.y, this.width, this.heigth)
            this.platform.forEach(pos => {
                ctx.drawImage(this.imgPlatform, pos.x_ini, pos.y_ini, pos.w, pos.h);
            });
        }
        move () {
            this.y += this.velocidad
        }
        

    }
    class PlatformMove extends Platform {
        constructor (x, y, width, heigth) {
            super (x, y, width, heigth) //son caracteristicas de Platform que queremos conservar,
            this.imgPlatformMove = new Image ();
            this.imgPlatformMove.src = "images/kinton.png";
            this.velocidadX = 20;
            this.velocidadY = 10;
        }
        print (ctx) {
            ctx.drawImage(this.imgPlatformMove, this.x, this.y, this.width, this.heigth)
        }
        move() {
            this.x += this.velocidadX;
            this.y += this.velocidadY
        }
        
    }
    class PlatformBreak extends Platform {
        constructor (x, y, width, heigth) {
            super (x, y, width, heigth)
            this.imgPlatformBreak = new Image ();
            this.imgPlatformBreak.src = "";
            this.imgPlatformBreaking = new Image ();
            this.imgPlatformBreaking.src = "";
        }
        print (ctx) {
            ctx.drawImage(this.imgPlatformBreak, this.x, this.y, this.width, this.heigth)
        }
        /*    BONUS     break (ctx) {
            ctx.drawImage(this.imgPlatformBreaking, this.x, this.y, this.width, this.heigth)
            BONUS
            BONUS
        } */
    }
    class Obstacle {
        constructor (canvas) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.heigth = heigth;
            this.velocidadX = velocidadX;
            this.imgObstacle = new Image ();
            this.imgObstacle.src = "";
            //this.velocidadY = velocidadY; BONUS
        }
        print(){
            ctx.drawImage(this.imgObstacle, this.x, this.y, this.width, this.height)
        }
    }
    class Game {
        constructor () {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.backGround = new Image ();
        this.backGround.src = "";
        this.wallpaper = new Image ();
        this.wallpaper.src = "images/wallpaper.png";
        this.goku = new Goku ();
        this.platform = new Platform ();
        this.platformMove = new PlatformMove ();
        this.platformBreak = new PlatformBreak ();
        this.platforms = [];
        this.platformsMove= [];
        this.obstacles = [];
        this.score = 0;
        this.intervalId = undefined;
        this.iteration = 0;
        
        }

        start () {
            if(this.intervalId == undefined) {
                this.intervalId = setInterval (() => {
                    gokuCount++
                    this.iteration++;
                    // cont++
                    this.clear();
                    this.recalculate();
                    this.print();
                    this.goku.rebound(this.ctx);
                    this.goku.print(this.ctx);
                }, 20) 
            }
        
        }
        stop () {
            if(this.intervalId) clearInterval(this.intervalId)
        }
        clear () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
        print () {
            this.ctx.drawImage(this.wallpaper, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(this.wallpaper, 0, 0, this.canvas.width, this.canvas.height)
            this.platforms.forEach(platform => {
                platform.print(this.ctx);})
            this.platformsMove.forEach(platformsMove => {
                platformsMove.print(this.ctx);})
        }
        recalculate() {
            if(this.iteration == 60) {
            let platform = new Platform(this.canvas);
           /*  let platformMove = new PlatformMove(this.canvas) */
            this.platforms.push(platform);
           /*  this.platformsMove.push(platform) */
            this.iteration = 0;
            }
        }
    }
    let game = new Game();
    document.getElementById('btn').onclick = () => {
        startGame();
    }
    function startGame () {
        game.start()
    }
    document.getElementsByTagName("body")[0].addEventListener ("keydown", (flecha) => {
        switch(flecha.key) {
          case "ArrowLeft" : 
          this.goku.moveLeft()
          //if(player.x < 0) player.x = 0;
          break;
          case "ArrowRight" : 
          this.goku.moveRight()
          //if(player.x > 430) player.x = 430;
          break;
          default:
            break;
          }
    })
}