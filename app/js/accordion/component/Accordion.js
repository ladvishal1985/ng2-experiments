System.register(['angular2/core', './AccordionItem'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, AccordionItem_1;
    var Accordion;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AccordionItem_1_1) {
                AccordionItem_1 = AccordionItem_1_1;
            }],
        execute: function() {
            Accordion = (function () {
                function Accordion() {
                }
                Accordion = __decorate([
                    core_1.Component({
                        selector: 'accordion-panel',
                        templateUrl: 'js/accordion/component/accordion_tpl.html',
                        inputs: ['items'],
                        directives: [AccordionItem_1.AccordionItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Accordion);
                return Accordion;
            })();
            exports_1("Accordion", Accordion);
        }
    }
});
//# sourceMappingURL=Accordion.js.map