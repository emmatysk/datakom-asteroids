import PlayState from 'states/PlayState'

export default
class Game extends Phaser.Game {
    constructor() {
        super(1080, 720, Phaser.AUTO, 'main', null);
        this.showDebugHeader = () => {};

        this.state.add('Play', PlayState);
        //this.stage.disableVisibilityChange = true;
    }

    start() {
        this.state.start('Play');
    }




}

