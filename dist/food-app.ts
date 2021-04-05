class Score{}

class Food{}
//Foodクラスの一覧
class Foods{
    elements = document.querySelectorAll<HTMLDivElement>('.food'); //クラスがfoodの要素を全て取得する。ジェネリクスで要素を指定できる。
    //各要素を取得する。
    constructor(){
        this.elements.forEach(elements => {

        })
    }
}

const foods = new Foods();