interface Human {
    name:String;
    age:number;
    //greeting:(message:string) => void;
    //オブジェクト内でのみ使える
    greeting(message:string):void;
} 

const human:Human= {
    name: 'Quil',
    age: 38,
    greeting(message:string){
        console.log(message);
    }
}