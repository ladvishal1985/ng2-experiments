System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './accordion/AccordionView', './datagrid/DatagridView'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, AccordionView_1, DatagridView_1;
    var AppDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AccordionView_1_1) {
                AccordionView_1 = AccordionView_1_1;
            },
            function (DatagridView_1_1) {
                DatagridView_1 = DatagridView_1_1;
            }],
        execute: function() {
            AppDemo = (function () {
                function AppDemo(router, location) {
                    this.router = router;
                    this.location = location;
                }
                AppDemo.prototype.getLinkStyle = function (path) {
                    return (this.location.path() === path.substring(1, path.length));
                };
                AppDemo = __decorate([
                    core_1.Component({
                        selector: 'demo-app',
                        template: "\n    \t<h1>NG2 - Component Demo</h1>\n    \t<ul class=\"nav nav-pills\">\n\t      <li [class.active]=\"getLinkStyle('#/accordion')\"><a [routerLink]=\"['Accordion']\">Accordion</a></li>\n\t      <li [class.active]=\"getLinkStyle('#/datagrid')\"><a [routerLink]=\"['DataGrid']\">DataGrid</a></li>\n\t    </ul>\n\t    \n    \t<router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['/accordion'] },
                        { path: '/accordion', name: 'Accordion', component: AccordionView_1.default },
                        { path: '/datagrid', name: 'DataGrid', component: DatagridView_1.default }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location])
                ], AppDemo);
                return AppDemo;
            })();
            browser_1.bootstrap(AppDemo, [
                router_1.ROUTER_PROVIDERS,
                router_1.ROUTER_DIRECTIVES,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map