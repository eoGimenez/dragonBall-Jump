window .onload = () => {
            //60 x 90 tamaño 80 x 105;
            const gokuSprite = {
        posSprite: [{
            x_ini: 5,
            y_ini: 5,
            w: 60,
            h: 90
        },
        {
            x_ini: 65,
            y_ini: 5,
            w: 60,
            h: 65
        },
        {
            x_ini: 122,
            y_ini: 5,
            w: 60,
            h: 65
        },
        {
            x_ini: 180,
            y_ini: 5,
            w: 60,
            h: 65
        },
        {
            x_ini: 235,
            y_ini: 5,
            w: 60,
            h: 65
        },
        {   
            x_ini: 288,
            y_ini: 5,
            w: 65,
            h: 99
        }],
        src: "images/Sprites.png"
    }
class Goku {
    constructor () {
            this.x = 225;
            this.y = 325;
            this.width = 80 //width;
            this.heigth = 105 //heigth;
            this.velocidadX = 10;
            this.velocidadY = 20;
            this.imgGoku = new Image ();
            this.imgGoku.src = gokuSprite.src;
            this.jump= 60;
            this.i = 0;
            //this.test = this.print();
        }
        print (ctx) {
            //ctx.drawImage(this.imgGoku, this.x, this.y, this.width, this.heigth)

            setInterval(() => {
                ctx.drawImage(this.imgGoku, gokuSprite.posSprite[this.i].x_ini, gokuSprite.posSprite[this.i].y_ini, gokuSprite.posSprite[this.i].w, gokuSprite.posSprite[this.i].h, this.x, this.y, this.width, this.heigth)
                this.i = (this.i+1)%gokuSprite.posSprite.length;
                
            }, 200);
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
                test.y = test.y + (test.velocidadY * intervaloSalto) + ( (test.aceleracion*intervaloSalto) /2)
                ctx.fillRect(test.x, test.y, test.width, test.heigth) // imprimir goku subiendo
            } else if ( cont > 25 ) {
                console.log("sbais")
                test.y = test.y + (test.velocidadY * intervaloBajo) + ( (test.aceleracion*intervaloBajo) /2)
                ctx.fillRect(test.x, test.y, test.width, test.heigth) // imprimir goku bajando
            }
            if (cont >= 49) cont = 0;
        }
    }
    class Platform {
        constructor (canvas) {
            this.width = 160;
            this.heigth = 60;
            this.x = Math.floor(Math.random()*(450/* canvas.width */ - this.width));
            this.y = Math.floor(Math.random()*(450/* canvas.width */ - this.width));
            this.imgPlatform = new Image ();
            this.imgPlatform.src = "images/kinton.png";
            this.velocidad = 50;
        }
        print (ctx) {
            ctx.drawImage(this.imgPlatform, this.x, this.y, this.width, this.heigth)
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
        /*     this.velocidadY = 10; */
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
                this.iteration++;
                this.clear();
                this.recalculate();
                this.print();
                this.goku.test
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
            //this.goku.print(this.ctx)
            this.platforms.forEach(platform => {
                platform.print(this.ctx);})
            this.platformsMove.forEach(platformsMove => {
                platformsMove.print(this.ctx);})
        }
        recalculate() {
            if(this.iteration == 60) {
            let platform = new Platform(this.canvas);
            let platformMove = new PlatformMove(this.canvas)
            this.platforms.push(platform);
            this.platformsMove.push(platformMove)
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
}