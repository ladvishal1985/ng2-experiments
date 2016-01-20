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
    var AccordionItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AccordionItem = (function () {
                function AccordionItem() {
                    this._isOpen = false;
                }
                AccordionItem.prototype.toggleOpen = function (event) {
                    event.preventDefault();
                    console.log("Is Clicked!!");
                    this.isOpen = !this.isOpen;
                };
                Object.defineProperty(AccordionItem.prototype, "isOpen", {
                    get: function () {
                        return this._isOpen;
                    },
                    set: function (value) {
                        this._isOpen = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AccordionItem = __decorate([
                    core_1.Component({
                        selector: 'accordion-item',
                        template: "\n\t\t<div class=\"panel panel-default\">\n    \t\t<div  class=\"panel-heading\" (click) = \"toggleOpen($event)\">\n      \t\t\t<h4 class=\"panel-title\">\n        \t\t\t<a class=\"accordion-toggle\" >{{data.heading}}</a>\n        \t\t\t<i class=\"indicator glyphicon glyphicon-chevron-right pull-right\" [class.glyphicon-chevron-down]=\"isOpen\"></i>\n      \t\t\t</h4>\n    \t</div>\n    \t<div id=\"collapseOne\" class=\"panel-collapse\" [hidden] = \"!isOpen\" >\n      \t\t<div class=\"panel-body\">{{data.body}}</div>\n    \t</div> \n  \t",
                        inputs: ['data', 'isOpen'],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AccordionItem);
                return AccordionItem;
            })();
            exports_1("AccordionItem", AccordionItem);
        }
    }
});
//# sourceMappingURL=AccordionItem.js.map