export class Point {
    private x: number;
    private y: number;
    
    constructor(in_X?: number, in_y?:number){
        this.x = in_X;
        this.y = in_y;
    }

    draw(){
        console.log('X: '+ this.x + ', Y: '+this.y);
    }

    get X(){
        return this.x;
    }

    getX(){
        return this.x;
    }

    set X(value: number){
        if( value < 0 ){
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    }

    setX(value: number){
        if( value < 0 ){
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    }
}