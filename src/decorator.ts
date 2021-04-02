function Logging(target:Function){
    console.log('Logging..');
}

@Logging
class User{
    name = 'aaa';
    constructor(){
        console.log('User was created'!);
    }
}