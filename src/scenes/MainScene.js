import Phaser from 'phaser'

export default class MainScene extends Phaser.Scene
{
	constructor(){
        super('mainScene')
    }

    preloader(){
        this.load.image('dirt', '../assest/TxTilesetGrass.png')
    }

    create(){
        this.add.image(400, 300, 'sky')
    }

    update(){

    }
}