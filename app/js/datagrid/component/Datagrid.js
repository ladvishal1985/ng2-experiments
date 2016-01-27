System.register(['angular2/core', './Sorter', './Column'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sorter_1, Column_1;
    var Datagrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sorter_1_1) {
                Sorter_1 = Sorter_1_1;
            },
            function (Column_1_1) {
                Column_1 = Column_1_1;
            }],
        execute: function() {
            Datagrid = (function () {
                function Datagrid() {
                }
                Datagrid.prototype.onOrderChange = function (value) {
                    this.orderProp = value.key;
                    this.reverse = value.order;
                    this.activeColIndex = value.activeColIndex;
                };
                Datagrid = __decorate([
                    core_1.Component({
                        selector: "datagrid",
                        templateUrl: 'js/datagrid/component/dg_tpl.html',
                        inputs: ["dsource", 'columnDefs'],
                        directives: [Column_1.Column],
                        pipes: [Sorter_1.OrderByPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Datagrid);
                return Datagrid;
            })();
            exports_1("Datagrid", Datagrid);
        }
    }
});
//# sourceMappingURL=Datagrid.js.map