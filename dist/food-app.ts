class Score{}
//
class Food{
    constructor(public element:HTMLDivElement){
        element.addEventListener('click',this.clickEventHandler.bind(this)); //bindを使うことでthisを明示することができる。
    }
    clickEventHandler(){
        this.element.classList.toggle('food--active'); //指定したクラスがあった場合はクラスを付け足す。
    }
}
//Foodクラスの一覧
class Foods{
    elements = document.querySelectorAll<HTMLDivElement>('.food'); //クラスがfoodの要素を全て取得する。ジェネリクスで要素を指定できる。
    private _activeElements:HTMLDivElement[] = [];
    private _activeElementsScore:number[] = [];
    //active状態のFoodを配列として取得する。
    get activeElements(){
        //初期化処理
        this._activeElements = [];
        this.elements.forEach(element => {
            //food--active要素を持っていたら実行
            if(element.classList.contains('food--active')){
                this._activeElements.push(element);
            }
            
        })
        return this._activeElements;
    }
    //active状態のFoodのスコアを取得する。
    get activeElementsScore(){
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            //数字が書いてある要素を取得する。
            const foodScore = element.querySelector('.food__score');
            if(foodScore){
                this._activeElementsScore.push(Number(foodScore.textContent))
            }
        })
        return this._activeElementsScore;
    }
    //各要素を取得する。
    constructor(){
        this.elements.forEach(element => {
            new Food(element); //各Foodに関する詳細な処理はFoodクラスで実行する。
        })
    }
}

const foods = new Foods();