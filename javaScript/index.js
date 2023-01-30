window .onload = () => {

class Goku {
    constructor () {
            this.x = x;
            this.y = y;
            this.width = width;
            this.heigth = heigth;
            this.velocidadX = velocidadX;
            this.velocidadY = velocidadY;
            this.imgGoku = new Image ();
            this.imgGoku.src = "";
            this.jump= 60;
        }
        print (ctx) {
            ctx.drawImage(this.imgGoku, this.x, this.y, this.width, this.heigth)
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
        constructor () {
            this.x = x;
            this.y = y;
            this.width = width;
            this.heigth = heigth;
            this.imgPlatform = new Image ();
            this.imgPlatform.src = "";
        }
        print (ctx) {
            ctx.drawImage(this.imgPlatform, this.x, this.y, this.width, this.heigth)
        }
    }
    class PlatformMove extends Platform {
        constructor (x, y, width, heigth) {
            super (x, y, width, heigth) //son caracteristicas de Platform que queremos conservar,
            this.imgPlatformMove = new Image ();
            this.imgPlatformMove.src = "";
        }
        print (ctx) {
            ctx.drawImage(this.imgPlatformMove, this.x, this.y, this.width, this.heigth)
        }
        move() {
            // buscar algoritmo equivalente al del salto
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
            //this.velocidadY = velocidadY; BONUS
        }
    }
    class Game {
        constructor () {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.backGround = new Image ();
        this.backGround.src = "";
        this.Wallpaper = new Image ();
        this.Wallpaper.src = "images/wallpaper.png";
        this.goku = new Goku;
        this.platform = new Platform;
        this.platformMove = new PlatformMove;
        this.platformBreak = new PlatformBreak;
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
                this.print();
               
             }, 20) 
            }
        
        }
        stop () {
            if(this.intervalId) clearInterval(this.intervalId)
        }
        clear () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }

    let game = new Game();
    document.getElementById('Start').onclick = () => {
        startGame();
    }

    function startGame () {
        game.start()
    }

}
