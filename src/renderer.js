export class canvasInstance {
    constructor(config) {
        console.log(config.canvasElementId);
        this.canvasElement = document.getElementById(config.canvasElementId);
        this.ctx = this.canvasElement.getContext("2d");
        this.width = this.canvasElement.width;
        this.height = this.canvasElement.height;

        this.data = config.data;

        this.renderGrayScale();
    }

    renderGrayScale() {
        //for (point of this.data) {
        //}

        this.ctx.beginPath();
        this.ctx.fill;
    }
}
