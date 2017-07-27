webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-fragments></app-fragments>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_keyword_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/keyword-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fragments_fragments_component__ = __webpack_require__("../../../../../src/app/components/fragments/fragments.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_fragments_fragments_component__["a" /* FragmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_keyword_filter_pipe__["a" /* KeywordFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [
            { provide: 'content', useClass: __WEBPACK_IMPORTED_MODULE_4__services_content_service__["a" /* ContentService */] },
            { provide: 'config', useClass: __WEBPACK_IMPORTED_MODULE_5__services_config_service__["a" /* ConfigService */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/fragments/fragments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter__field {\n  padding: 1rem;\n  margin: 0 1rem;\n  width: 90%;\n  font-size: 1.5rem;\n  font-family: \"Helvetica Neue\", sans-serif;\n}\n\n.filter__feedback {\n  font-family: \"Helvetica Neue\", sans-serif;\n  margin: 1rem 1rem;\n}\n\n\n\n.fragment-list__list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.fragment-list__item {\n  width: 300px;\n  height: 400px;\n  overflow: hidden;\n  float: left;\n  border-radius: 2px;\n  margin: 1rem;\n  padding: 1rem;\n  box-shadow: 0 .1rem .2rem #aaa;\n  background-image:\n    linear-gradient(\n      to bottom,\n      white, #fcfcfc\n    );\n}\n\n.fragment-list__item img {\n  width: 100%;\n}\n\n.fragment-list__item p {\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: 100;\n  font-size: 1.25rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fragments/fragments.component.html":
/***/ (function(module, exports) {

module.exports = "<input\n  class=\"filter__field\"\n  type=\"text\"\n  placeholder=\"Filter results\"\n  #filterField\n  (keyup)=\"setFilter(filterField.value)\"\n  />\n\n<p class=\"filter__feedback\" *ngIf=\"filter.length > 3\">\n  Filtering by: {{ filter }}\n</p>\n\n<ul class=\"fragment-list__list\">\n  <li class=\"fragment-list__item\"\n      *ngFor=\"let fragment of fragments | keywordFilter:filter\"\n      [innerHTML]=\"fragment.getHtml()\">\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/fragments/fragments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FragmentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FragmentsComponent = (function () {
    function FragmentsComponent(content) {
        this.content = content;
        this.filter = '';
        this.fragments = [];
    }
    FragmentsComponent.prototype.ngOnInit = function () {
        this.fragments = this.content.load() || [];
    };
    FragmentsComponent.prototype.setFilter = function (value) {
        this.filter = value;
    };
    return FragmentsComponent;
}());
FragmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-fragments',
        template: __webpack_require__("../../../../../src/app/components/fragments/fragments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fragments/fragments.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewEncapsulation */].Native
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('content')),
    __metadata("design:paramtypes", [Object])
], FragmentsComponent);

//# sourceMappingURL=fragments.component.js.map

/***/ }),

/***/ "../../../../../src/app/core-data/fragment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fragment; });
var Fragment = (function () {
    function Fragment(path, rawHtml) {
        this._path = path;
        this._html = rawHtml;
        this._keywords = this._html.replace(/<\/?[^>]+(>|$)/g, '').replace(/\s{2,}/gm, ' ').trim();
    }
    Fragment.prototype.include = function (filter) {
        return this._keywords.indexOf(filter) > -1;
    };
    Fragment.prototype.getHtml = function () {
        return this._html;
    };
    Fragment.prototype.getHelloWorld = function () {
        return 'hello world';
    };
    return Fragment;
}());

//# sourceMappingURL=fragment.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/keyword-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeywordFilterPipe = (function () {
    function KeywordFilterPipe() {
    }
    KeywordFilterPipe.prototype.transform = function (fragments, filter) {
        if (!fragments || !filter || filter.length <= 3) {
            return fragments;
        }
        return fragments.filter(function (fragment) { return fragment.include(filter); });
    };
    return KeywordFilterPipe;
}());
KeywordFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'keywordFilter',
        pure: false
    })
], KeywordFilterPipe);

//# sourceMappingURL=keyword-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = (function () {
    function ConfigService() {
        // 'http://localhost:4503
        this.origin = '';
        // '/content/acs-samples/spa/angular/_jcr_content/root/responsivegrid/angular.json'
        this.componentUrl = '';
        this.externalize = false;
        this.origin = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */]['origin'] || '';
        this.componentUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */]['componentUrl'] || '';
        this.externalize = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isUndefined"])(this.origin) && this.origin !== '';
    }
    ConfigService.prototype.isExternalize = function () {
        return this.externalize;
    };
    // environment.origin
    ConfigService.prototype.getOrigin = function () {
        return this.origin || '';
    };
    ConfigService.prototype.addOrigin = function (absolutePath) {
        return this.getOrigin() + absolutePath;
    };
    // environment.componentUrl
    ConfigService.prototype.getComponentUrl = function () {
        return this.addOrigin(this.componentUrl);
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_fragment__ = __webpack_require__("../../../../../src/app/core-data/fragment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ContentService = (function () {
    function ContentService(http, config) {
        this.http = http;
        this.config = config;
        this.fragments = [];
    }
    ContentService.prototype.getFragmentUrl = function (fragmentPath) {
        return this.config.addOrigin(fragmentPath + '/_jcr_content/root.html');
    };
    // Ideally this is replaced w/ a rewriter
    ContentService.prototype.externalizeHtml = function (html) {
        if (this.config.isExternalize()) {
            return html.replace(/src="\//m, 'src="' + this.config.getOrigin() + '/');
        }
        else {
            return html;
        }
    };
    ContentService.prototype.load = function () {
        var _this = this;
        this.http.get(this.config.getComponentUrl()).subscribe(function (data) {
            // Read the result field from the JSON response.
            var fragmentPaths = [];
            // Depending on the number of values specified, the fragments property can be an array or a string
            if (data.hasOwnProperty('fragments')) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_util__["isArray"])(data['fragments'])) {
                    fragmentPaths = data['fragments'];
                }
                else {
                    fragmentPaths.push(data['fragments']);
                }
            }
            var _loop_1 = function (fragmentPath) {
                var fragmentUrl = _this.getFragmentUrl(fragmentPath);
                _this.http.get(fragmentUrl, { responseType: 'text' }).subscribe(function (html) {
                    _this.fragments.push(new __WEBPACK_IMPORTED_MODULE_2__core_data_fragment__["a" /* Fragment */](fragmentUrl, _this.externalizeHtml(html)));
                });
            };
            for (var _i = 0, fragmentPaths_1 = fragmentPaths; _i < fragmentPaths_1.length; _i++) {
                var fragmentPath = fragmentPaths_1[_i];
                _loop_1(fragmentPath);
            }
        });
        return this.fragments;
    };
    return ContentService;
}());
ContentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('config')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, Object])
], ContentService);

var _a;
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    origin: '',
    componentUrl: '/content/acs-samples/spa/angular/_jcr_content/root/responsivegrid/angular.json',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);