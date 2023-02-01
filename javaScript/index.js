window .onload = () => {
    let gokuCount = 0;
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
            { x_ini: 400, y_ini: 140, w: 160, h: 60},
            { x_ini: 100, y_ini: 600, w: 160, h: 60}, 
            //{ x_ini: 50, y_ini: 50, w: 160, h: 60},
            { x_ini: 200, y_ini: 40, w: 160, h: 60}
        ];
   /*  let obstacles = [
            { x_ini: 300, y_ini: 350, w: 260, h: 70},] */
class Goku {
    constructor () {
            this.x = 140;
            this.y = 380;
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
            // this.x = Math.floor(Math.random()*(450/* canvas.width */ /* - this.width))
            // this.y = Math.floor(Math.random()*(450/* canvas.height */ - this.height));
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
            this.x = Math.floor(Math.random() * 350);
            this.y = -10;
            this.width = 100;
            this.heigth = 80; 
            /* this.velocidadX = velocidadX; */
            this.imgObstacle = new Image ();
            this.imgObstacle.src = "images/cabeza.png";
            //this.velocidadY = velocidadY; BONUS
        }
        print(ctx){
            
                ctx.drawImage(this.imgObstacle, this.x, this.y, this.width, this.heigth);
            };
        
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
        this.obstacle = new Obstacle();
        /*   this.imageKinton = new Image ()
        this.imageKinton = "images/kinton.png" */
/*         this.platformMove = new PlatformMove ();
        this.platformBreak = new PlatformBreak (); */
        this.platforms = platforms;
        this.score = 0;
        this.intervalId = undefined;
        this.iteration = 0;
        this.jumpT = false;
        this.colition = false;
        
        }

        start () {
            if(this.intervalId == undefined) {
                this.intervalId = setInterval (() => {
                    this.score += 10
                    gokuCount++
                    this.iteration++;
                    this.clear();
                    //this.gravity();
                    this.recalculate();
                    this.gravity();
                    this.print();
                    this.stop();
                }, 25) 
            }
            
        }
        stop () {
            if (this.goku.y > 750 || this.colition == true) {
                clearInterval(this.intervalId) 
                this.ctx.fillText('GAME OVER', 200, 300);
            }
            /* if (this.score == 2500) {
                clearInterval(this.intervalId)
                this.ctx.fillText('MVP =  mas velocidad porfa', 200, 300);
            } */
            };
        
        clear () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
        print () {
            this.ctx.drawImage(this.wallpaper, 0, 0, this.canvas.width, this.canvas.height)
            /* this.goku.rebound(this.ctx); */
           
            /* this.platformsMove.forEach(platformsMove => {
                platformsMove.print(this.ctx);}) */ 
            this.ctx.fillStyle = "black";
            this.ctx.font = "20px Arial";
            this.ctx.fillText(`Score: ${this.score}`, 10, 30);
            this.platform.print(this.ctx);
            this.goku.print(this.ctx);
            if(this.score >= 2500 && this.score <= 7500){this.obstacle.print(this.ctx)}
           
            
        }
        gravity () {
            this.goku.y += 8
            /* this.platforms.forEach(platform => {
                platform.y_ini += 2
            })  */
        }

        jump () {
            console.log(this.iteration)
            if (this.jumpT == true && this.iteration >= 0 && this.iteration <=8) {
                this.goku.y -=5;
            } else if (this.jumpT == true && this.iteration >= 9 && this.iteration <=14) {
                this.goku.y -= 4;
            } else if (this.jumpT == true && this.iteration >= 15 && this.iteration <=18) {
                this.goku.y -= 2;
            } else if (this.jumpT == true && this.iteration >= 19) {
                this.goku.y -= 1;
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
                this.platforms.forEach((platform) => {
/*                     if (this.goku.y < 200) {
                        platform.y_ini += (this.goku.y -160)
                    } */
                    if (platform.y_ini > this.canvas.height) {
                        platform.x_ini = Math.floor(Math.random() *390);
                        platform.y_ini = -10;
                    }

                
                    /* let checkDistance = function (gokuX, gokuY, platformX, platformY) {
                        result = Math.sqrt(Math.pow(gokuX - gokuY, -2) + Math.pow(platformX - platformY, -2));
                        return result;
                    }
                    console.log(result)
                    if (checkDistance(this.goku.x, this.goku.y, platform.x_ini, platform.y_ini) < (this.goku.y + platform.y_ini) ) {
                        this.jumpTest = true
                        this.jump();
                        console.log(this.jumpTest) 
                    }*/
                    if  (!((this.goku.x + this.goku.width) -20 < platform.x_ini +10 || this.goku.x -10 > platform.x_ini + platform.w -50 || (this.goku.y + this.goku.heigth) -10 < platform.y_ini +20 || this.goku.y -10 > platform.h + platform.y_ini -25)) {
                    //(platform.x_ini + platform.w < this.goku.heigth + this.goku.x) { 
                        this.jumpT = true;
                        this.iteration = 0;
                        gokuCount = 6;
                        console.log(this.jumpT)
                    }
                    if(!(this.goku.x + this.goku.width < this.obstacle.x || this.goku.x > this.obstacle.x + this.obstacle.width || this.goku.y > this.obstacle.y + this.obstacle.heigth || this.goku.y + this.goku.heigth < this.obstacle.y)) {
                        console.log("eiii")
                        this.colition = true
                    }
                    if (this.jumpT == true) {
                        this.platforms[0].y_ini += 1;
                        this.platforms[1].y_ini += 1;
                        this.platforms[2].y_ini += 1;
                        this.platforms[3].y_ini += 1;
                        this.platforms[4].y_ini += 1;
                        //this.platforms[5].y_ini += 25;
                        this.jump();
                       // this.goku.y -= 100
                       if(this.score >= 2500 && this.score <= 7500) {
                        this.obstacle.y +=1 
                        this.obstacle.print(this.ctx)
                       }
                        if (this.goku.y < 60) this.goku.y = 60;
                        //this.jumpT = false
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