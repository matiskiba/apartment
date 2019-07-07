(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons\">\r\n    <ng-container *ngIf=\"(addressesWaiting|async) as __addressesWaiting\">\r\n    <ng-container *ngIf=\"__addressesWaiting && __addressesWaiting.length > 0\">\r\n        <button mat-raised-button (click)=\"processAddressesData()\">Process addresses data ({{__addressesWaiting.length}})</button>\r\n    </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"(yad2ApartmentsWaiting|async) as __yad2ApartmentsWaiting\">\r\n    <ng-container *ngIf=\"__yad2ApartmentsWaiting && __yad2ApartmentsWaiting.length > 0\">\r\n        <button mat-raised-button (click)=\"processYad2ApartmentsData()\">Process yad2 apartments data ({{__yad2ApartmentsWaiting.length}})</button>\r\n    </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"(yad2JsonsWaiting|async)?.length > 0\">\r\n        <button mat-raised-button (click)=\"processYad2JsonData()\">Process yad2 json data</button>\r\n    </ng-container>\r\n    <button mat-raised-button (click)=\"openDialog()\">get Yad2 JS code</button>\r\n</div>\r\n<ng-container *ngIf=\"(apartmentsWaiting|async) as __apartmentsWaiting\">\r\n<ng-container *ngIf=\"(doApartmentsFilter(__apartmentsWaiting,addressesById,maxWalkingMinutes,maxPrice)) as __apartmentsWaitingFiltered\">\r\n<ng-container *ngIf=\"(__apartmentsWaitingFiltered|slice:0:50) as __apartmentsWaitingSliced\">\r\n    <div class=\"content\">\r\n        <div class=\"map\">\r\n            <agm-map [latitude]=\"32.044318\" [longitude]=\"34.759277\" [minZoom]=\"13\">\r\n                <ng-container *ngFor=\"let wework of weWorks\">\r\n                    <agm-marker iconUrl=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupy_19i-39YLxk6WCmGF3sL65FjVAC5msNoNKMvKAO4MoTjd0\" [latitude]=\"wework.latitude\" [longitude]=\"wework.longitude\" [title]=\"wework.name\" [label]=\"wework.name\" [zIndex]=\"1000\"></agm-marker>\r\n                </ng-container>\r\n                <ng-container *ngFor=\"let apartment of (__apartmentsWaitingSliced)\">\r\n                    <ng-container *ngIf=\"apartment.location && apartment.location.coordinates\">\r\n                        <ng-container *ngIf=\"addressesById[apartment.addressId] as address\">\r\n                            <agm-marker [title]=\"\r\n                            Math.round(address.durationToWeWorkInSeconds/60) +\r\n                            ' דקות' +\r\n                            '\\n' +\r\n                             getFinalPrice(apartment)+apartment.currency\"\r\n                                        (markerClick)=\"setFocus(apartment.general_id)\"\r\n                                        [markerClickable]=\"true\"\r\n                                        [latitude]=\"apartment.location.coordinates.latitude\"\r\n                                        [longitude]=\"apartment.location.coordinates.longitude\"></agm-marker>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </agm-map>\r\n        </div>\r\n        <div class=\"apartments\">\r\n            <div class=\"summary\">\r\n                <div>\r\n                    מראה\r\n                    {{__apartmentsWaitingSliced.length}}\r\n                    דירות (מתוך\r\n                    {{__apartmentsWaiting.length}}\r\n                    סה\"כ ו\r\n                    {{__apartmentsWaitingFiltered.length}}\r\n                    אחרי סינון\r\n                    )\r\n                </div>\r\n                <div>\r\n                    <span>\r\n                        מרחק בדקות\r\n                    </span>\r\n                    <span>\r\n                    <mat-slider min=\"1\" max=\"50\" [value]=\"maxWalkingMinutes\" (change)=\"maxWalkingMinutes=$event.value\"></mat-slider>\r\n                    </span>\r\n                    <span>\r\n                    {{maxWalkingMinutes}}\r\n                    </span>\r\n                </div>\r\n                <div>\r\n                    <span>\r\n                        מחיר מקסימלי\r\n                    </span>\r\n                    <span>\r\n                    <mat-slider min=\"1\" max=\"50\" [value]=\"maxPrice\" (change)=\"maxPrice=$event.value\"></mat-slider>\r\n                    </span>\r\n                    <span>\r\n                    {{maxPrice}}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <ng-container *ngFor=\"let apartment of (__apartmentsWaitingSliced)\">\r\n                <div class=\"apartment\" [attr.general_id]=\"apartment.general_id\" (click)=\"setFocus(apartment.general_id)\">\r\n                    <div>\r\n                <span class=\"title\">\r\n                    כתובת\r\n                </span>\r\n                        <span>\r\n                    {{apartment.street}}\r\n                            {{isNaN(apartment.home_number)?\"\":apartment.home_number}}\r\n                </span>\r\n                    </div>\r\n                    <div>\r\n                <span class=\"title\">\r\n                    כתובת\r\n                </span>\r\n                        <span>\r\n                  {{apartment.neighborhood}}\r\n                </span>\r\n                    </div>\r\n                    <div>\r\n                <span class=\"title\">\r\n                    קומה\r\n                </span>\r\n                        <span>\r\n                    {{apartment.floor}}\r\n                </span>\r\n                        <span class=\"title\">\r\n                    חדרים\r\n                </span>\r\n                        <span>\r\n                    {{apartment.rooms}}\r\n                </span>\r\n                        <span class=\"title\">\r\n                    מ\"ר\r\n                </span>\r\n                        <span>\r\n                    {{apartment.square_meters}}\r\n                </span>\r\n                    </div>\r\n                    <div>\r\n                <span class=\"title\">\r\n                    מחיר\r\n                </span>\r\n                        <span>\r\n                    {{apartment.price}}{{apartment.currency}}\r\n                            <ng-container *ngIf=\"apartment.merchant\">\r\n                                (\r\n                                {{getFinalPrice(apartment)}}{{apartment.currency}}\r\n                                לאחר עמלת תיווך\r\n                                )\r\n                            </ng-container>\r\n                </span>\r\n                    </div>\r\n                    <div *ngIf=\"apartment.merchant\">\r\n                <span class=\"title\">\r\n                    תיווך\r\n                </span>\r\n                    </div>\r\n                    <div>\r\n                        <a target=_blank [href]=\"apartment.link\">\r\n                            קישור למודעה\r\n                        </a>\r\n                        <ng-container *ngIf=\"apartment.location && apartment.location.coordinates\">\r\n                            <a target=_blank [href]=\"'https://www.google.com/maps/place/'+apartment.location.coordinates.latitude+','+apartment.location.coordinates.longitude\">\r\n                                קישור למפה\r\n                            </a>\r\n                        </ng-container>\r\n                    </div>\r\n                    <ng-container *ngIf=\"addressesById[apartment.addressId] as address\">\r\n                        <div>\r\n                <span class=\"title\">\r\n                    מרחק ברגל\r\n                </span>\r\n                            <span>\r\n                    {{address.distanceToWeworkInMeters}}\r\n                                מטר\r\n                </span>\r\n                            <span class=\"title\">\r\n                    זמן ברגל\r\n                </span>\r\n                            <span>\r\n                                {{Math.round(address.durationToWeWorkInSeconds/60)}}\r\n                                דקות\r\n                </span>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n\r\n\r\n                <!--\r\n                    {{apartment|json}}\r\n                    contact_name:string,\r\n                    location:any,\r\n                    images:Array<string>,\r\n                    -->\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n</ng-container>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popups/process-yad2.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popups/process-yad2.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea #raw style=\"display:none\">\r\n    <script>\r\n        console.log(\"loading yad2 data retrieve script\");\r\n    </script>\r\n    <!-- The core Firebase JS SDK is always required and must be listed first -->\r\n    <script src=\"https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js\"></script>\r\n    <script src=\"https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js\"></script>\r\n\r\n    <!-- TODO: Add SDKs for Firebase products that you want to use\r\n         https://firebase.google.com/docs/web/setup#config-web-app -->\r\n\r\n    <script>\r\n        setTimeout(function() {\r\n            console.log(\"init firebase\");\r\n            // Your web app's Firebase configuration\r\n            var firebaseConfig = {\r\n                apiKey: \"AIzaSyCtE_gnXNYVC_V367vkHZG5KqW_r5nqbHQ\",\r\n                authDomain: \"apartments-5437d.firebaseapp.com\",\r\n                databaseURL: \"https://apartments-5437d.firebaseio.com\",\r\n                projectId: \"apartments-5437d\",\r\n                storageBucket: \"apartments-5437d.appspot.com\",\r\n                messagingSenderId: \"870793133013\",\r\n                appId: \"1:870793133013:web:b93b1bf3ccd97934\"\r\n            };\r\n            // Initialize Firebase\r\n            firebase.initializeApp(firebaseConfig);\r\n\r\n            console.log(\"reading json data\");\r\n            function readPage(page) {\r\n                setTimeout(function() {\r\n                    console.log(\"reading json data for page\",page);\r\n                    var iframe = $('<iframe src=\"https://www.yad2.co.il/api/pre-load/getFeedIndex/realestate/rent?city=5000&property=1&rooms=3--1&price=-1-7000&squaremeter=60--1&compact-req=1&page=' + page + '\"></iframe>');\r\n                    $(\"body\").append(iframe);\r\n                    var interval = setInterval(function() {\r\n                        var data = iframe.contents().find(\"body\").text().trim();\r\n                        if ( data )\r\n                        {\r\n                            clearInterval(interval);\r\n                            console.log(\"finished reading json data for page\",page,data.length);\r\n                            var db = firebase.firestore();\r\n                            db.collection(\"yad2_jsons\").doc().set({\r\n                                json:data,\r\n                                processed:0,\r\n                                page:page,\r\n                            })\r\n                                .then(function() {\r\n                                    console.log(\"Document successfully written!\",page);\r\n                                })\r\n                                .catch(function(error) {\r\n                                    console.error(\"Error writing document: \", error,page);\r\n                                });\r\n\r\n                        }\r\n                    },1000);\r\n                },page*5000);\r\n            }\r\n\r\n            for ( var _page = 1 ; _page <= 30 ; _page++ )\r\n            {\r\n                readPage(_page);\r\n            }\r\n        },1000);\r\n    </script>\r\n</textarea>\r\n\r\ncopy js from here\r\n<textarea>\r\n    {{processRaw(raw.value)}}\r\n</textarea>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">Done</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  width: 100vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: nowrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  align-content: stretch;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n\n.content {\n  overflow-y: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  align-content: stretch;\n}\n\n.apartments {\n  direction: rtl;\n  overflow-y: auto;\n  width: 50%;\n}\n\n.summary {\n  position: -webkit-sticky;\n  position: sticky;\n  padding: 10px;\n  background: white;\n  z-index: 1;\n  top: 0;\n  width: 100%;\n}\n\n.apartment {\n  direction: rtl;\n  padding: 10px;\n  border-bottom: 1px solid #bebebe;\n}\n\n.apartment.focus {\n  background: #e6e6e6;\n}\n\n.apartment .title {\n  font-weight: bold;\n}\n\n.apartment span, .apartment a {\n  pading-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n}\n\n.map {\n  background: red;\n  height: 100%;\n  width: 50%;\n}\n\n.map > * {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzpcXG9tcmkgd29ya1xcYXBhcnRtZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBR0Esb0JBQUE7RUFBQSxhQUFBO0VBR0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBR0EsaUJBQUE7RUFHQSx1QkFBQTtVQUFBLDJCQUFBO0VBR0Esc0JBQUE7RUFHQSwwQkFBQTtVQUFBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUlBLG9CQUFBO0VBQUEsYUFBQTtFQUdBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUdBLGlCQUFBO0VBR0EsdUJBQUE7VUFBQSwyQkFBQTtFQUdBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFJRSxjQUFBO0VBRUEsYUFBQTtFQUNBLGdDQUFBO0FDSkY7O0FERkU7RUFDRSxtQkFBQTtBQ0lKOztBREdFO0VBQ0UsaUJBQUE7QUNESjs7QURJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRE1BO0VBQ0UsZUFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0FDSkY7O0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICB3aWR0aDoxMDB2dztcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBvdmVyZmxvdy15OmhpZGRlbjtcclxuXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxufVxyXG5cclxuLmFwYXJ0bWVudHMge1xyXG4gIGRpcmVjdGlvbjpydGw7XHJcbiAgb3ZlcmZsb3cteTphdXRvO1xyXG4gIHdpZHRoOjUwJTtcclxufVxyXG5cclxuLnN1bW1hcnkge1xyXG4gIHBvc2l0aW9uOnN0aWNreTtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICB6LWluZGV4OjE7XHJcbiAgdG9wOjA7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmFwYXJ0bWVudCB7XHJcbiAgJi5mb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzAsMjMwLDIzMCk7XHJcbiAgfVxyXG4gIGRpcmVjdGlvbjpydGw7XHJcblxyXG4gIHBhZGRpbmc6MTBweDtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2IoMTkwLDE5MCwxOTApO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB9XHJcblxyXG4gIHNwYW4sIGEge1xyXG4gICAgcGFkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gIGJhY2tncm91bmQ6cmVkO1xyXG5cclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDo1MCU7XHJcblxyXG4gID4gKiB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbn1cblxuLmFwYXJ0bWVudHMge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnN1bW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwYXJ0bWVudCB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JlYmViZTtcbn1cbi5hcGFydG1lbnQuZm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuLmFwYXJ0bWVudCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hcGFydG1lbnQgc3BhbiwgLmFwYXJ0bWVudCBhIHtcbiAgcGFkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXAge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tYXAgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popups_process_yad2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popups/process-yad2.component */ "./src/app/popups/process-yad2.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");







var Apartment = /** @class */ (function () {
    function Apartment() {
    }
    return Apartment;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, http, db) {
        this.dialog = dialog;
        this.http = http;
        this.db = db;
        this.title = 'apartment';
        this.maxWalkingMinutes = 10;
        this.maxPrice = 7000;
        this.weWorks = [
            { "name": "Toha", "address": "Yigal Alon St 114", "latitude": 32.0727773, "longitude": 34.79492 },
            { "name": "Shoken", "address": "23 Shoken St", "latitude": 32.0515688, "longitude": 34.7723244 },
            { "name": "HaZerem", "address": "7 HaPelech Street", "latitude": 32.0503025, "longitude": 34.7666856 },
            { "name": "London Ministore", "address": "30 Ibn Gabirol", "latitude": 32.0907315, "longitude": 34.8300521 },
            { "name": "Dubnov", "address": "7 Dubnov", "latitude": 32.074925, "longitude": 34.783161 },
            { "name": "Menachem Begin", "address": "Derech Menachem Begin 144", "latitude": 32.0769741, "longitude": 34.7923559 },
            { "name": "Sarona", "address": "3 Aluf Kalman Magen", "latitude": 32.0713993, "longitude": 34.7865759 }
        ];
        this.currentAddresses = [];
        this.addressesById = {};
        this.currentApartments = [];
        this.currentYad2Jsons = [];
        this.currentYad2Apartments = [];
        this.isNaN = Number.isNaN;
        this.Math = Math;
        var self = this;
        var yad2JsonsCollections = this.db.collection('/yad2_jsons', function (ref) { return ref.where('processed', '<', 2); });
        this.yad2JsonsWaiting = yad2JsonsCollections.valueChanges();
        this.yad2Jsons = yad2JsonsCollections.snapshotChanges();
        this.yad2Jsons.subscribe(function (data) {
            //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
            self.currentYad2Jsons = data;
        });
        var yad2ApartmentsCollections = this.db.collection('/yad2_apartments', function (ref) { return ref.where('processed', '<', 10); });
        this.yad2ApartmentsWaiting = yad2ApartmentsCollections.valueChanges();
        this.yad2Apartments = yad2ApartmentsCollections.snapshotChanges();
        this.yad2Apartments.subscribe(function (data) {
            //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
            self.currentYad2Apartments = data;
        });
        var apartmentsCollections = this.db.collection('/apartments', function (ref) { return ref.where('processed', '<', 1); });
        this.apartmentsWaiting = apartmentsCollections.valueChanges();
        this.apartments = apartmentsCollections.snapshotChanges();
        this.apartments.subscribe(function (data) {
            //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
            self.currentApartments = data;
        });
        var addressesCollections = this.db.collection('/addresses', function (ref) { return ref.where('processed', '<', 1); });
        this.addressesWaiting = addressesCollections.valueChanges();
        this.addresses = addressesCollections.snapshotChanges();
        this.addresses.subscribe(function (data) {
            //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
            self.currentAddresses = data;
        });
        var alladdressesCollections = this.db.collection('/addresses', function (ref) { return ref.where('processed', '>=', 1); });
        alladdressesCollections.snapshotChanges().subscribe(function (data) {
            self.addressesById = {};
            for (var i = 0; i < data.length; i++) {
                var id = data[i].payload.doc.id;
                var _data = data[i].payload.doc.data();
                self.addressesById[id] = _data;
            }
        });
        /*
        function doIt(i)
        {
            var address = self.weWorks[i].address + ", tel aviv, israel";
            var config = self.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyAeHuyxXBY6fhmaSclMQ0pU8lWLRpxJUng");
            config.subscribe(function(data) {
                console.log(data);
                if ( data.status.toLowerCase() == "ok" )
                {
                    self.weWorks[i].latitude = data.results[0].geometry.location.lat;
                    self.weWorks[i].longitude = data.results[0].geometry.location.lng;
                    console.log(JSON.stringify(self.weWorks));
                }
            });
        }
    
        for ( var i = 0 ; i < this.weWorks.length ; i++ )
        {
            doIt(i);
        }
         */
    }
    AppComponent.prototype.setFocus = function (general_id) {
        jquery__WEBPACK_IMPORTED_MODULE_1__("*[general_id]").removeClass("focus");
        jquery__WEBPACK_IMPORTED_MODULE_1__("*[general_id='" + general_id + "']").addClass("focus").get(0).scrollIntoView(false);
    };
    AppComponent.prototype.getFinalPrice = function (apartment) {
        var price = apartment.price;
        if (apartment.merchant)
            price = price * (1 + 1 / 12);
        return price;
    };
    AppComponent.prototype.doApartmentsFilter = function (apartments, addressesById, maxWalkingMinutes, maxPrice) {
        var ret = [];
        for (var i = 0; i < apartments.length; i++) {
            if (apartments[i].addressId && addressesById[apartments[i].addressId]) {
                if (addressesById[apartments[i].addressId].durationToWeWorkInSeconds < maxWalkingMinutes * 60) {
                    if (apartments[i].price && !isNaN(apartments[i].price)) {
                        var price = this.getFinalPrice(apartments[i]);
                        if (price <= maxPrice) {
                            ret.push(apartments[i]);
                        }
                    }
                }
            }
        }
        return ret;
    };
    AppComponent.prototype.processAddressesData = function () {
        var self = this;
        function doIt(id, data) {
            setTimeout(function () {
                self.calculateAddressMeasurements(id, data.street, data.home_number, data.location.coordinates.latitude, data.location.coordinates.longitude);
            }, 10000 * i);
        }
        for (var i = 0; i < this.currentAddresses.length; i++) {
            var id = this.currentAddresses[i].payload.doc.id;
            var data = this.currentAddresses[i].payload.doc.data();
            doIt(id, Object.assign({}, data));
        }
    };
    AppComponent.prototype.calculateAddressMeasurements = function (id, street, home_number, lat, lng) {
        console.log("processing address", id);
        var self = this;
        function doIt() {
            //console.log("doIt",id);
            var origin = lat + "," + lng;
            var directionsService = new window["google"].maps.DirectionsService;
            var distsCount = 0;
            var dists = {};
            function processWeWork(index) {
                var wework = self.weWorks[index];
                directionsService.route({
                    origin: origin,
                    destination: wework.address + ", tel aviv, israel",
                    travelMode: 'WALKING'
                }, function (response, status) {
                    if (index < (self.weWorks.length - 1)) {
                        setTimeout(function () {
                            processWeWork(index + 1);
                        }, 250);
                    }
                    console.log(id, status, response);
                    if (status.toLowerCase() == "ok") {
                        var min = 1000000;
                        var distMin = null;
                        for (var i = 0; i < response.routes.length; i++) {
                            if (response.routes[i].legs.length == 1) {
                                if (response.routes[i].legs[0].duration.value < min) {
                                    min = response.routes[i].legs[0].duration.value;
                                    distMin = response.routes[i].legs[0].distance.value;
                                }
                            }
                            else {
                                console.log("error", response);
                            }
                        }
                        dists[wework.name] = [min, distMin];
                        distsCount++;
                        console.log(id, min, distMin, wework, distsCount, dists);
                        if (distsCount == self.weWorks.length) {
                            var min = 100000;
                            var distMin = null;
                            var weworkNameMin = null;
                            for (var i = 0; i < self.weWorks.length; i++) {
                                if (dists[self.weWorks[i].name][0] < min) {
                                    min = dists[self.weWorks[i].name][0];
                                    distMin = dists[self.weWorks[i].name][1];
                                    weworkNameMin = self.weWorks[i].name;
                                }
                            }
                            var addressesDoc = self.db.doc('/addresses/' + id);
                            addressesDoc.update({
                                weworkName: weworkNameMin,
                                distanceToWeworkInMeters: distMin,
                                durationToWeWorkInSeconds: min,
                                processed: 1
                            });
                            console.log("done with id - ", id);
                        }
                    }
                    //console.log("result",response,status);
                });
            }
            processWeWork(0);
        }
        if (lat === null) {
            var addressesDoc = self.db.doc('/addresses/' + id);
            addressesDoc.update({
                processed: 1
            });
            console.log("done with id (bad) - ", id);
        }
        else if (!isNaN(home_number)) {
            var address = street + " " + home_number + ", תל אביב, ישראל";
            var config = self.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAeHuyxXBY6fhmaSclMQ0pU8lWLRpxJUng");
            config.subscribe(function (data) {
                //console.log(data);
                if (data.status.toLowerCase() == "ok") {
                    lat = data.results[0].geometry.location.lat;
                    lng = data.results[0].geometry.location.lng;
                    doIt();
                }
            });
        }
        else
            doIt();
    };
    AppComponent.prototype.handleApartmentMapClick = function (apartment) {
        //this.calculateAddressMeasurements(apartment.street,apartment.home_number,apartment.location.coordinates.latitude,apartment.location.coordinates.longitude);
        /*
      if ( !isNaN(apartment.home_number) )
      {

          console.log("url",url,origin,destinations);

      }
        */
    };
    AppComponent.prototype.toDeg = function (num) {
        return Math.floor(num) + "°" + Math.floor(num % 1 * 100) + "'" + ((num % 1 * 100) % 1 * 100);
        //https://www.google.com/maps/place/41°24'12.2"N+2°10'26.5"E   https://www.google.com/maps/@32.044318,34.759277
    };
    AppComponent.prototype.processYad2ApartmentsData = function () {
        var self = this;
        for (var i = 0; i < this.currentYad2Apartments.length; i++) {
            var id = this.currentYad2Apartments[i].payload.doc.id;
            var data = this.currentYad2Apartments[i].payload.doc.data();
            var general_id = "yad2_" + id;
            var floor = parseInt(data.Floor_text);
            var rooms = parseInt(data.Rooms_text);
            var home_number = parseInt(data.address_home_number);
            var street = data.street;
            var contact_name = data.contact_name;
            var location = { coordinates: data.coordinates };
            var currency = typeof (data.currency) == "undefined" ? "?" : data.currency;
            var images = [];
            for (var key in data.images)
                images.push(data.images[key].src);
            var neighborhood = data.neighborhood;
            var link = "https://www.yad2.co.il/s/c/" + data.link_token;
            var merchant = data.merchant;
            var price = parseFloat(data.price.replace(",", ""));
            var square_meters = parseFloat(data.square_meters);
            var item = {
                general_id: general_id,
                square_meters: square_meters,
                floor: floor,
                home_number: home_number,
                street: street,
                rooms: rooms,
                contact_name: contact_name,
                location: location,
                currency: currency,
                images: images,
                neighborhood: neighborhood,
                link: link,
                merchant: merchant,
                price: price,
                processed: 0,
            };
            var addressId = item.street + "," + item.home_number + "," + item.location.coordinates.latitude + "," + item.location.coordinates.longitude;
            var setAddress = function (addressId, home_number, street, location) {
                var addressesDoc = self.db.doc('/addresses/' + addressId);
                addressesDoc.update({
                    home_number: home_number,
                    street: street,
                    location: location,
                }).then(function () {
                }).catch(function (error) {
                    addressesDoc.set({
                        home_number: home_number,
                        street: street,
                        location: location,
                        processed: 0,
                    });
                });
            };
            setAddress(addressId, home_number, street, Object.assign({}, location));
            item["addressId"] = addressId;
            var apartmentsDoc = this.db.doc('/apartments/' + general_id);
            apartmentsDoc.set(item, { merge: true });
            var yad2ApartmentsDoc = this.db.doc('/yad2_apartments/' + id);
            yad2ApartmentsDoc.update({ processed: 10 });
            console.log("done with id - ", id);
        }
    };
    AppComponent.prototype.processYad2JsonData = function () {
        for (var i = 0; i < this.currentYad2Jsons.length; i++) {
            var id = this.currentYad2Jsons[i].payload.doc.id;
            try {
                var data = JSON.parse(this.currentYad2Jsons[i].payload.doc.data().json);
                for (var j = 0; j < data.feed.feed_items.length; j++) {
                    var item = data.feed.feed_items[j];
                    if (item.ad_number) {
                        var yad2ApartmentsDoc = this.db.doc('/yad2_apartments/' + item.ad_number);
                        item.processed = 0;
                        yad2ApartmentsDoc.set(item);
                    }
                }
            }
            catch (e) {
                console.log("error with", id);
            }
            var yad2JsonsDoc = this.db.doc('/yad2_jsons/' + id);
            yad2JsonsDoc.update({ processed: 2 });
            console.log("done with id - ", id);
        }
    };
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_popups_process_yad2_component__WEBPACK_IMPORTED_MODULE_3__["ProcessYad2Component"], {
            width: '250px',
            data: null // {name: this.name, animal: this.animal}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _popups_process_yad2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popups/process-yad2.component */ "./src/app/popups/process-yad2.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _popups_process_yad2_component__WEBPACK_IMPORTED_MODULE_6__["ProcessYad2Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAeHuyxXBY6fhmaSclMQ0pU8lWLRpxJUng'
                })
            ],
            entryComponents: [
                _popups_process_yad2_component__WEBPACK_IMPORTED_MODULE_6__["ProcessYad2Component"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/popups/process-yad2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/popups/process-yad2.component.ts ***!
  \**************************************************/
/*! exports provided: ProcessYad2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessYad2Component", function() { return ProcessYad2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ProcessYad2Component = /** @class */ (function () {
    function ProcessYad2Component(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ProcessYad2Component.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ProcessYad2Component.prototype.process = function (data) {
        data = JSON.parse(data);
        console.log("data", data);
        this.dialogRef.close();
    };
    ProcessYad2Component.prototype.processRaw = function (script) {
        return "var s = document.createElement( 'script' );\n" +
            "s.setAttribute( 'src', 'https://code.jquery.com/jquery-3.4.1.min.js' );\n" +
            "document.body.appendChild( s );\n" +
            "setTimeout(function() {var a = $('body').append(" + JSON.stringify(script) + ");},1000);";
    };
    ProcessYad2Component.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    ProcessYad2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'process-yad2',
            template: __webpack_require__(/*! raw-loader!./process-yad2.component.html */ "./node_modules/raw-loader/index.js!./src/app/popups/process-yad2.component.html"),
        })
    ], ProcessYad2Component);
    return ProcessYad2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCtE_gnXNYVC_V367vkHZG5KqW_r5nqbHQ",
        authDomain: "apartments-5437d.firebaseapp.com",
        databaseURL: "https://apartments-5437d.firebaseio.com",
        projectId: "apartments-5437d",
        storageBucket: "",
        messagingSenderId: "870793133013",
        appId: "1:870793133013:web:b93b1bf3ccd97934"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\omri work\apartment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map