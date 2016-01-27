System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Sorter, OrderByPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Sorter = (function () {
                function Sorter() {
                }
                Sorter = __decorate([
                    core_1.Component({
                        selector: 'sorter',
                        template: "\n\t\t<i class=\"indicator glyphicon glyphicon glyphicon-sort-by-alphabet\"  [ngClass]=\"{'glyphicon-sort-by-alphabet-alt': direction == false}\"></i>\n\t",
                        directives: [common_1.NgClass],
                        inputs: ['direction']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Sorter);
                return Sorter;
            })();
            exports_1("Sorter", Sorter);
            OrderByPipe = (function () {
                function OrderByPipe() {
                    this.direction = 1;
                }
                OrderByPipe.prototype.transform = function (input, args) {
                    var _this = this;
                    console.log("Actual Direction-->" + args[1]);
                    this.isReverse = args[1];
                    if (this.isReverse == true) {
                        this.direction = 1;
                        console.log("It is ascending!");
                    }
                    else {
                        this.direction = -1;
                        console.log("It is descending!");
                    }
                    if (input) {
                        var property = args[0];
                        return input.slice().sort(function (a, b) {
                            if (a[property] < b[property]) {
                                return -1 * _this.direction;
                            }
                            else if (b[property] < a[property]) {
                                return 1 * _this.direction;
                            }
                            else {
                                return 0;
                            }
                        });
                    }
                    else {
                        return input;
                    }
                };
                OrderByPipe = __decorate([
                    core_1.Pipe({ name: 'orderBy' }), 
                    __metadata('design:paramtypes', [])
                ], OrderByPipe);
                return OrderByPipe;
            })();
            exports_1("OrderByPipe", OrderByPipe);
        }
    }
});
//# sourceMappingURL=Sorter.js.map