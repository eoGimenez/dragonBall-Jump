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
    let platforms = [
            { x_ini: 300, y_ini: 350, w: 160, h: 60},
            { x_ini: 200, y_ini: 450, w: 160, h: 60},
            { x_ini: 400, y_ini: 150, w: 160, h: 60},
            { x_ini: 100, y_ini: 550, w: 160, h: 60}, 
            { x_ini: 50, y_ini: 50, w: 160, h: 60}
        ];
class Goku {
    constructor () {
            this.x = 140;
            this.y = 250;
            this.width = 80 //width;
            this.heigth = 105 //heigth;
            this.velocidadX = 20;
            this.velocidadY = 20;
            this.gravity = 0.98;
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
            this.x -= this.velocidadX;
            if (this.x < 0) {
                this.x = canvas.width;
              }
        }
        moveRight (){
            this.x += this.velocidadX;
            if (this.x > canvas.width) {
                this.x = 0;
              }
        }
        
    }

    class Platform {
        constructor (canvas) {
            this.imgPlatform = new Image ();
            this.imgPlatform.src = "images/kinton.png";
            this.velocidad = 50;
        }
        print (ctx) {
            game.platforms.forEach((pos) => {
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
        /* g   BONUS     break (ctx) {
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
        constructor (platforms) {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.backGround = new Image ();
        this.backGround.src = "";
        this.wallpaper = new Image ();
        this.wallpaper.src = "images/wallpaper.jpeg";
        this.goku = new Goku ();
        this.platform = new Platform ();
        this.platformMove = new PlatformMove ();
        this.platformBreak = new PlatformBreak ();
        this.platforms = platforms;
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
                    cont++
                    this.clear();
                    this.jump();
                    this.gravity();
                    this.recalculate();
                    this.gravity();
                    this.print();
                    this.stop();
                }, 20) 
            }
            
        }
        stop () {
            if (this.goku.y > 750) {
                clearInterval(this.intervalId) 
                this.ctx.fillText('GAME OVER', 200, 300);
            } 
            };
        
        clear () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
        print () {
            this.ctx.drawImage(this.wallpaper, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.fillStyle = "black";
            this.ctx.font = "20px Arial";
            this.ctx.fillText(`Score: ${this.score}`, 10, 30);
            this.platform.print(this.ctx);
            this.goku.rebound(this.ctx);
            this.goku.print(this.ctx);
        }
        Jump(){
            let velocidadY = 0;
            let gravity = 0.98;
            let maxHeigth = 550;
            if (this.goku.y >= maxHeigth) {
                velocidadY =- velocidadY
             }
         }
        gravity() {
            let velocidadY = 0;
            let gravity = 0.98;
                velocidadY += gravity;
                this.goku.y += velocidadY;
            
        }
        recalculate() {
                 this.platforms.forEach((platform) => {
/*                     if (this.goku.y < 200) {
                        platform.y_ini += (this.goku.y -160)
                    } */
                    if (platform.y_ini > this.canvas.height) {
                        platform.x_ini = Math.floor(Math.random() *390);
                        platform.y_ini = -10;
                    }
                    if ((this.goku.y + this.goku.width > platform.x_ini || this.goku.width > platform.w + platform.y_ini)) {
                        this.jump()

                    }  
                })   
            } 
        }
        let game = new Game(platforms);
        document.getElementById('btn').onclick = () => {
            startGame();
        }
        function startGame () {
            game.start()
        }
        document.getElementsByTagName("body")[0].addEventListener ("keydown", (flecha) => {
            switch(flecha.key) {
                case "ArrowLeft" : 
                game.goku.moveLeft()
                //if(player.x < 0) player.x = 0;
                break;
                case "ArrowRight" : 
                game.goku.moveRight()
                //if(player.x > 430) player.x = 430;
                break;
                default:
                break;
                }
        })
    }