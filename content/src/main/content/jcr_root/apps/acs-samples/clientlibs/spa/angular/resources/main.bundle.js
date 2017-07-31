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

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__factories_heroFactory_service__ = __webpack_require__("../../../../../src/app/factories/heroFactory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__factories_experienceFragmentFactory_service__ = __webpack_require__("../../../../../src/app/factories/experienceFragmentFactory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__factories_contentFragmentFactory_service__ = __webpack_require__("../../../../../src/app/factories/contentFragmentFactory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_experience_fragments_experience_fragments_component__ = __webpack_require__("../../../../../src/app/components/experience-fragments/experience-fragments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_content_fragments_content_fragments_component__ = __webpack_require__("../../../../../src/app/components/content-fragments/content-fragments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_hero_hero_component__ = __webpack_require__("../../../../../src/app/components/hero/hero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_externalizer_pipe__ = __webpack_require__("../../../../../src/app/pipes/externalizer.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_12__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_experience_fragments_experience_fragments_component__["a" /* ExperienceFragmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_content_fragments_content_fragments_component__["a" /* ContentFragmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_hero_hero_component__["a" /* HeroComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_externalizer_pipe__["a" /* ExternalizerPipe */],
            __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [
            { provide: 'content', useClass: __WEBPACK_IMPORTED_MODULE_4__services_content_service__["a" /* ContentService */] },
            { provide: 'config', useClass: __WEBPACK_IMPORTED_MODULE_5__services_config_service__["a" /* ConfigService */] },
            { provide: 'heroFactory', useClass: __WEBPACK_IMPORTED_MODULE_6__factories_heroFactory_service__["a" /* HeroFactoryService */] },
            { provide: 'experienceFragmentFactory', useClass: __WEBPACK_IMPORTED_MODULE_7__factories_experienceFragmentFactory_service__["a" /* ExperienceFragmentFactoryService */] },
            { provide: 'contentFragmentFactory', useClass: __WEBPACK_IMPORTED_MODULE_8__factories_contentFragmentFactory_service__["a" /* ContentFragmentFactoryService */] },
            __WEBPACK_IMPORTED_MODULE_5__services_config_service__["a" /* ConfigService */] // For Pipe
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app__angular\" class=\"app__background\"\n     [ngStyle]=\"{ 'background-image': 'url(' + (backgroundImage | externalize) + ')'}\">\n\n  <div class=\"content-wrapper\">\n    <app-hero\n      [heroFragment]=\"heroFragment\"></app-hero>\n\n    <h2 class=\"sub-title\">{{ fragmentsTitle }}</h2>\n\n    <app-experience-fragments\n      [fragmentPaths]=\"experienceFragmentPaths\"></app-experience-fragments>\n\n    <app-content-fragments\n      [fragmentPaths]=\"contentFragmentPaths\"></app-content-fragments>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app__background {\n  background-color: black;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var AppComponent = (function () {
    function AppComponent(config, content) {
        this.config = config;
        this.content = content;
        this.experienceFragmentPaths = [];
        this.contentFragmentPaths = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.content.get(this.config.getApiUrl()).subscribe(function (data) {
            console.log(data);
            _this.backgroundImage = data['backgroundImage'];
            _this.heroFragment = data['heroFragment'];
            _this.fragmentsTitle = data['fragmentsTitle'];
            _this.experienceFragmentPaths = data['experienceFragments'];
            _this.contentFragmentPaths = data['contentFragments'];
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app/app.component.less")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('config')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('content')),
    __metadata("design:paramtypes", [Object, Object])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/content-fragments/content-fragments.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"card-list__title stripe\">Content Fragments</h3>\n\n<dl class=\"card-list\"\n    *ngIf=\"fragments\">\n  <dd class=\"card-list__card\"\n      *ngFor=\"let fragment of fragments\"\n      [innerHTML]=\"fragment.content | externalize : 'html'\">\n  </dd>\n</dl>\n"

/***/ }),

/***/ "../../../../../src/app/components/content-fragments/content-fragments.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/content-fragments/content-fragments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentFragmentsComponent; });
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

var ContentFragmentsComponent = (function () {
    function ContentFragmentsComponent(fragmentFactory) {
        this.fragmentFactory = fragmentFactory;
        this.fragmentPaths = [];
        this.fragments = [];
    }
    ContentFragmentsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        for (var _i = 0, _a = this.fragmentPaths; _i < _a.length; _i++) {
            var fragmentPath = _a[_i];
            this.fragmentFactory.build(fragmentPath).then(function (fragment) {
                console.log(fragment);
                _this.fragments.push(fragment);
            });
        }
    };
    return ContentFragmentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Object)
], ContentFragmentsComponent.prototype, "fragmentPaths", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Object)
], ContentFragmentsComponent.prototype, "title", void 0);
ContentFragmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-content-fragments',
        template: __webpack_require__("../../../../../src/app/components/content-fragments/content-fragments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/content-fragments/content-fragments.component.less")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('contentFragmentFactory')),
    __metadata("design:paramtypes", [Object])
], ContentFragmentsComponent);

//# sourceMappingURL=content-fragments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/experience-fragments/experience-fragments.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"card-list__title stripe\">Experience Fragments</h3>\n\n<dl class=\"card-list\"\n    *ngIf=\"fragments\">\n  <dd class=\"card-list__card\"\n      *ngFor=\"let fragment of fragments\"\n      [innerHTML]=\"fragment.html | externalize : 'html'\">\n  </dd>\n</dl>\n"

/***/ }),

/***/ "../../../../../src/app/components/experience-fragments/experience-fragments.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/experience-fragments/experience-fragments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceFragmentsComponent; });
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

var ExperienceFragmentsComponent = (function () {
    function ExperienceFragmentsComponent(fragmentFactory) {
        this.fragmentFactory = fragmentFactory;
        this.fragmentPaths = [];
        this.fragments = [];
    }
    ExperienceFragmentsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        for (var _i = 0, _a = this.fragmentPaths; _i < _a.length; _i++) {
            var fragmentPath = _a[_i];
            this.fragmentFactory.build(fragmentPath).then(function (fragment) {
                _this.fragments.push(fragment);
            });
        }
    };
    return ExperienceFragmentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Object)
], ExperienceFragmentsComponent.prototype, "fragmentPaths", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Object)
], ExperienceFragmentsComponent.prototype, "title", void 0);
ExperienceFragmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-experience-fragments',
        template: __webpack_require__("../../../../../src/app/components/experience-fragments/experience-fragments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/experience-fragments/experience-fragments.component.less")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('experienceFragmentFactory')),
    __metadata("design:paramtypes", [Object])
], ExperienceFragmentsComponent);

//# sourceMappingURL=experience-fragments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/hero/hero.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero stripe\"\n     *ngIf=\"hero\"\n     [innerHTML]=\"hero.fragment.html | externalize : 'html'\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hero/hero.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hero/hero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
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

var HeroComponent = (function () {
    function HeroComponent(config, heroFactory) {
        this.config = config;
        this.heroFactory = heroFactory;
    }
    HeroComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.heroFactory.build(this.heroFragment).then(function (hero) {
            _this.hero = hero;
        });
    };
    return HeroComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Object)
], HeroComponent.prototype, "heroFragment", void 0);
HeroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-hero',
        template: __webpack_require__("../../../../../src/app/components/hero/hero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/hero/hero.component.less")],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('config')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('heroFactory')),
    __metadata("design:paramtypes", [Object, Object])
], HeroComponent);

//# sourceMappingURL=hero.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search__field-wrapper\">\n   <input class=\"search__field\" type=\"text\" placeholder=\"Search\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.less")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/core-data/content-fragment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentFragment; });
var ContentFragment = (function () {
    function ContentFragment(path, content) {
        this.path = path;
        this.content = content;
    }
    return ContentFragment;
}());

//# sourceMappingURL=content-fragment.js.map

/***/ }),

/***/ "../../../../../src/app/core-data/experience-fragment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceFragment; });
var ExperienceFragment = (function () {
    function ExperienceFragment(path, html) {
        this.path = path;
        this.html = html;
    }
    return ExperienceFragment;
}());

//# sourceMappingURL=experience-fragment.js.map

/***/ }),

/***/ "../../../../../src/app/core-data/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero(fragment) {
        this.fragment = fragment;
    }
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ "../../../../../src/app/factories/contentFragmentFactory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_content_fragment__ = __webpack_require__("../../../../../src/app/core-data/content-fragment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentFragmentFactoryService; });
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


var ContentFragmentFactoryService = (function () {
    function ContentFragmentFactoryService(content) {
        this.content = content;
    }
    ContentFragmentFactoryService.prototype.build = function (fragmentPath) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.content.getContentFragmentText(fragmentPath).subscribe(function (fragmentContent) {
                console.log(fragmentContent);
                var html = document.createElement('HTML');
                html.innerHTML = fragmentContent;
                resolve(new __WEBPACK_IMPORTED_MODULE_1__core_data_content_fragment__["a" /* ContentFragment */](fragmentPath, fragmentContent));
            });
        });
    };
    return ContentFragmentFactoryService;
}());
ContentFragmentFactoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('content')),
    __metadata("design:paramtypes", [Object])
], ContentFragmentFactoryService);

//# sourceMappingURL=contentFragmentFactory.service.js.map

/***/ }),

/***/ "../../../../../src/app/factories/experienceFragmentFactory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_experience_fragment__ = __webpack_require__("../../../../../src/app/core-data/experience-fragment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceFragmentFactoryService; });
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


var ExperienceFragmentFactoryService = (function () {
    function ExperienceFragmentFactoryService(content) {
        this.content = content;
    }
    ExperienceFragmentFactoryService.prototype.build = function (fragmentPath) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.content.getExperienceFragmentHTML(fragmentPath).subscribe(function (fragmentHTML) {
                var html = document.createElement('HTML');
                html.innerHTML = fragmentHTML;
                resolve(new __WEBPACK_IMPORTED_MODULE_1__core_data_experience_fragment__["a" /* ExperienceFragment */](fragmentPath, html.getElementsByTagName('body')[0].innerHTML || ''));
            });
        });
    };
    return ExperienceFragmentFactoryService;
}());
ExperienceFragmentFactoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('content')),
    __metadata("design:paramtypes", [Object])
], ExperienceFragmentFactoryService);

//# sourceMappingURL=experienceFragmentFactory.service.js.map

/***/ }),

/***/ "../../../../../src/app/factories/heroFactory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_hero__ = __webpack_require__("../../../../../src/app/core-data/hero.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroFactoryService; });
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


var HeroFactoryService = (function () {
    function HeroFactoryService(fragmentFactory) {
        this.fragmentFactory = fragmentFactory;
    }
    HeroFactoryService.prototype.build = function (fragmentPath, backgroundImagePath) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.fragmentFactory.build(fragmentPath).then(function (fragment) {
                resolve(new __WEBPACK_IMPORTED_MODULE_1__core_data_hero__["a" /* Hero */](fragment));
            });
        });
    };
    return HeroFactoryService;
}());
HeroFactoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('experienceFragmentFactory')),
    __metadata("design:paramtypes", [Object])
], HeroFactoryService);

//# sourceMappingURL=heroFactory.service.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/externalizer.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalizerPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExternalizerPipe = (function () {
    function ExternalizerPipe(config) {
        this.config = config;
    }
    ExternalizerPipe.prototype.transform = function (data, type) {
        if (!data) {
            return data || '';
        }
        else if (!this.config.isExternalize()) {
            return data || '';
        }
        type = type || 'url';
        if (type === 'html') {
            var tmp = data.replace(/src="\//m, 'src="' + this.config.getOrigin() + '/');
            tmp = tmp.replace(/href="\//m, 'href="' + this.config.getOrigin() + '/');
            return tmp;
        }
        else {
            return this.config.getOrigin() + data;
        }
    };
    return ExternalizerPipe;
}());
ExternalizerPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'externalize',
        pure: false
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], ExternalizerPipe);

var _a;
//# sourceMappingURL=externalizer.pipe.js.map

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
        // '/spa/angular.json'
        this.apiUrl = '';
        this.externalize = false;
        this.origin = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */]['origin'] || '';
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */]['apiUrl'] || '';
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
    ConfigService.prototype.getApiUrl = function () {
        return this.apiUrl;
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
    }
    ContentService.prototype.get = function (path) {
        return this.http.get(this.config.addOrigin(path));
    };
    ContentService.prototype.getJSON = function (path) {
        return this.http.get(this.config.addOrigin(path + '.json'));
    };
    ContentService.prototype.getExperienceFragmentHTML = function (path) {
        var url = this.config.addOrigin(path + '.html');
        return this.http.get(url, { responseType: 'text' });
    };
    ContentService.prototype.getFragmentJSON = function (path) {
        var url = this.config.addOrigin(path + '/../_jcr_content.json');
        return this.http.get(url);
    };
    ContentService.prototype.getContentFragmentText = function (path) {
        var url = this.config.addOrigin(path + '/_jcr_content/renditions/original');
        return this.http.get(url, { responseType: 'text' });
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
    apiUrl: '/spa/angular.json',
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