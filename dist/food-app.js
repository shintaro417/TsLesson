var Score = /** @class */ (function () {
    function Score() {
    }
    return Score;
}());
//
var Food = /** @class */ (function () {
    function Food(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this)); //bindを使うことでthisを明示することができる。
    }
    Food.prototype.clickEventHandler = function () {
        this.element.classList.toggle('food--active'); //指定したクラスがあった場合はクラスを付け足す。
    };
    return Food;
}());
//Foodクラスの一覧
var Foods = /** @class */ (function () {
    //各要素を取得する。
    function Foods() {
        this.elements = document.querySelectorAll('.food'); //クラスがfoodの要素を全て取得する。ジェネリクスで要素を指定できる。
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(function (element) {
            new Food(element); //各Foodに関する詳細な処理はFoodクラスで実行する。
        });
    }
    Object.defineProperty(Foods.prototype, "activeElements", {
        //active状態のFoodを配列として取得する。
        get: function () {
            var _this = this;
            //初期化処理
            this._activeElements = [];
            this.elements.forEach(function (element) {
                //food--active要素を持っていたら実行
                if (element.classList.contains('food--active')) {
                    _this._activeElements.push(element);
                }
            });
            return this._activeElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "activeElementsScore", {
        //active状態のFoodのスコアを取得する。
        get: function () {
            var _this = this;
            this._activeElementsScore = [];
            this.activeElements.forEach(function (element) {
                //数字が書いてある要素を取得する。
                var foodScore = element.querySelector('.food__score');
                if (foodScore) {
                    _this._activeElementsScore.push(Number(foodScore.textContent));
                }
            });
            return this._activeElementsScore;
        },
        enumerable: false,
        configurable: true
    });
    return Foods;
}());
var foods = new Foods();
