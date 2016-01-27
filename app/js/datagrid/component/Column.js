System.register(['angular2/core', 'angular2/common', './Sorter'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Sorter_1;
    var Column;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Sorter_1_1) {
                Sorter_1 = Sorter_1_1;
            }],
        execute: function() {
            Column = (function () {
                function Column() {
                    this.isReverse = true;
                    this.update = new core_1.EventEmitter();
                }
                Column.prototype.sortData = function (key, index) {
                    this.isReverse = !this.isReverse;
                    this.update.next({ "key": key, "order": this.isReverse, "activeColIndex": index });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Column.prototype, "colIndex", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Column.prototype, "activeColIndex", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Column.prototype, "update", void 0);
                Column = __decorate([
                    core_1.Component({
                        selector: 'column',
                        template: "\n\t\t<div class=\"column\" (click)=\"sortData(col.desc, colIndex)\">\n        \t{{col.name}}\n    \t\t<sorter [direction] = \"isReverse\" *ngIf = \"colIndex == activeColIndex\"></sorter>\n        </div>\n\t",
                        directives: [Sorter_1.Sorter, common_1.NgClass],
                        inputs: ['col', 'colIndex', 'activeColIndex'],
                        events: ['update']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Column);
                return Column;
            })();
            exports_1("Column", Column);
        }
    }
});
//# sourceMappingURL=Column.js.map