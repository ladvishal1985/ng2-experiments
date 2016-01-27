System.register(['angular2/core', './component/Datagrid'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Datagrid_1;
    var DatagridView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Datagrid_1_1) {
                Datagrid_1 = Datagrid_1_1;
            }],
        execute: function() {
            DatagridView = (function () {
                function DatagridView() {
                    this.columns = [
                        { name: "Name", desc: "name" },
                        { name: "Email", desc: "email" },
                        { name: "Work", desc: "work" },
                        { name: "DBO", desc: "dob" },
                    ];
                    this.users = [
                        {
                            "id": 0,
                            "name": "Adam Carter",
                            "work": "Unilogic",
                            "email": "bdam.carter@unilogic.com",
                            "dob": "24/11/1978",
                            "address": "83 Warner Street",
                            "city": "Boston",
                            "optedin": true
                        },
                        {
                            "id": 1,
                            "name": "Leanne Brier",
                            "work": "Connic",
                            "email": "beanne.brier@connic.org",
                            "dob": "13/05/1987",
                            "address": "9 Coleman Avenue",
                            "city": "Toronto",
                            "optedin": false
                        },
                        {
                            "id": 2,
                            "name": "Adam Carter",
                            "work": "Unilogic",
                            "email": "ddam.carter@unilogic.com",
                            "dob": "24/11/1978",
                            "address": "83 Warner Street",
                            "city": "Boston",
                            "optedin": true
                        },
                        {
                            "id": 3,
                            "name": "Leanne Brier",
                            "work": "Connic",
                            "email": "eeanne.brier@connic.org",
                            "dob": "13/05/1987",
                            "address": "9 Coleman Avenue",
                            "city": "Toronto",
                            "optedin": false
                        },
                        {
                            "id": 4,
                            "name": "Adam Carter",
                            "work": "Unilogic",
                            "email": "fdam.carter@unilogic.com",
                            "dob": "24/11/1978",
                            "address": "83 Warner Street",
                            "city": "Boston",
                            "optedin": true
                        },
                        {
                            "id": 5,
                            "name": "Leanne Brier",
                            "work": "Connic",
                            "email": "geanne.brier@connic.org",
                            "dob": "13/05/1987",
                            "address": "9 Coleman Avenue",
                            "city": "Toronto",
                            "optedin": false
                        },
                        {
                            "id": 6,
                            "name": "Adam Carter",
                            "work": "Unilogic",
                            "email": "hdam.carter@unilogic.com",
                            "dob": "24/11/1978",
                            "address": "83 Warner Street",
                            "city": "Boston",
                            "optedin": true
                        },
                        {
                            "id": 7,
                            "name": "Leanne Brier",
                            "work": "Connic",
                            "email": "leanne.brier@connic.org",
                            "dob": "13/05/1987",
                            "address": "9 Coleman Avenue",
                            "city": "Toronto",
                            "optedin": false
                        }
                    ];
                }
                DatagridView = __decorate([
                    core_1.Component({
                        selector: 'datagrid-view',
                        templateUrl: 'js/datagrid/datagrid_view.html',
                        directives: [Datagrid_1.Datagrid],
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatagridView);
                return DatagridView;
            })();
            exports_1("default",DatagridView);
        }
    }
});
//# sourceMappingURL=DatagridView.js.map