# DragonBall Z Jump

Primer proyecto en equipo del bootcamp de Web Development en IronHack

## Sobre nosotros

Somos Xabier, Adrian y Eugenio, estudiamos web development. Creamos el juego de Dragon Ball z, con Canvas y JavaScript

## Deployment

You can play the game [here](#).

## Estructura de trabajo

Organizamos nuestro trabajo en [Trello](https://trello.com/b/FaqIs49l/proyecto-dragonball-jump)

## El juego..

El objetivo es subir lo mas alto posible, ayudandote de las distintass paltaformas y esquivando los obstaculos.

## Controles

Para controlar el personaje, usaremos flecha izquierda y flecha derecha, el salto es automatico y continuo.

## Condición de victoria

Conseguir 7.000 PUNTOS!

## Condición de perdida

 - Caerse.
 - Colisionar con un Enemigo.

## Classes

|   Class      | Properties                                                            | Methods                                          |
| :----------: | --------------------------------------------------------------------- | ------------------------------------------------ |
|   Goku       | x, y, w, h, vel X, imgGoku                                            | print(ctx), moveLeft(), moveRigth()              |
| Platform     | imgPlatform                                                           | print(ctx),                                      |
| PlatformMove | x, y, w, h, imgPlatformMove , vel X                                   | print(ctx), move()                               |
| PlatformBreak| super (x, y, w, h), imgPlatformBreaking                               | print(ctx), // BONUS Break()                     |
| Obstaculo    | x, y, w, h, vel, imgObstacle, vel X                                   | print(ctx), move()                               |
|              | canvas, ctx, imgWin, imgLoose, imgWallpaper, goku, platform,          | start(), stop(), clear(), print(), recalculate() |
|   Juego      | obstacles, score, intervalId, iteration, platformMove, platformBreak, | delet(), gravity (), jump(),                     |
|              | jumpT, colition, reJump.                                              |                                                  |
---
