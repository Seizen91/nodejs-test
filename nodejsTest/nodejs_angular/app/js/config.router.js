'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        [          '$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider,   $urlRouterProvider, $locationProvider) {

                $urlRouterProvider
                    .otherwise('/app/system/systemInfo');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpl/app.html'
                    })


                    // 校园管理
                    .state('app.campus', {
                        url: '/campus',
                        template: '<div ui-view></div>'
                    })
                    //教师管理
                    .state('app.campus.teacher', {
                        url: '/teacher',
                        templateUrl: 'views/campus/teacher.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/campus/teacher.js']);
                                }]
                        }
                    })
                    //学生管理
                    .state('app.campus.student', {
                        url: '/student',
                        templateUrl: 'tpl/campus/student.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/campus/student.js',
                                        'vendor/layer/layer.js']);
                                }]
                        }
                    })
                    //班级管理
                    .state('app.campus.class', {
                        url: '/class',
                        templateUrl: 'tpl/campus/class.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/campus/class.js',
                                        'vendor/layer/layer.js']);
                                }]
                        }
                    })
                    //年级管理
                    .state('app.campus.grade', {
                        url: '/grade',
                        templateUrl: 'tpl/campus/grade.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/campus/grade.js',
                                        'vendor/layer/layer.js']);
                                }]
                        }
                    })
                    //司机管理
                    .state('app.campus.driver', {
                        url: '/driver',
                        templateUrl: 'tpl/campus/driver.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/campus/driver.js',
                                        'vendor/layer/layer.js']);
                                }]
                        }
                    })
                    //校车管理
                    .state('app.campus.schoolBus', {
                        url: '/schoolBus',
                        templateUrl: 'tpl/campus/schoolBus.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/campus/schoolBus.js',
                                        'vendor/layer/layer.js']);
                                }]
                        }
                    })
                    //家长管理
                    .state('app.campus.parent', {
                        url: '/parent',
                        templateUrl: 'tpl/campus/parent.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/campus/parent.js',
                                        'vendor/layer/layer.js']);
                                }]
                        }
                    })
                    // 园务管理
                    .state('app.school', {
                        url: '/school',
                        template: '<div ui-view></div>'
                    })
                    //校园简介
                    .state('app.school.schoolIntroduction', {
                        url: '/schoolIntroduction',
                        templateUrl: 'tpl/school/schoolIntroduction.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/school/schoolIntroduction.js',
                                        'vendor/jquery/uploadify/uploadify.css',
                                        'vendor/jquery/uploadify/jquery.uploadify.min.js',
                                        'vendor/layer/layer.js'
                                        // 'vendor/jquery/zyUpload/control/css/zyUpload.css',
                                        // 'vendor/jquery/zyUpload/control/js/zyUpload.js',
                                    ]);
                                }]
                        }
                    })
                    //校园新闻
                    .state('app.school.schoolNews', {
                        url: '/schoolNews',
                        templateUrl: 'tpl/school/schoolNews.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/school/schoolNews.js',
                                        'vendor/layer/layer.js'
                                    ]);
                                }]
                        }
                    })
                    //校园通知
                    .state('app.school.schoolNotice', {
                        url: '/schoolNotice',
                        templateUrl: 'tpl/school/schoolNotice.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/school/schoolNotice.js',
                                        'vendor/layer/layer.js'
                                    ]);
                                }]
                        }
                    })
                    //教学计划
                    .state('app.school.teachingPlan', {
                        url: '/teachingPlan',
                        templateUrl: 'tpl/school/teachingPlan.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/school/teachingPlan.js',
                                        'vendor/layer/layer.js'
                                    ]);
                                }]
                        }
                    })
                    //膳食管理
                    .state('app.school.mealManagement', {
                        url: '/mealManagement',
                        templateUrl: 'tpl/school/mealManagement.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/school/mealManagement.js',
                                        'vendor/layer/layer.js'
                                    ]);
                                }]
                        }
                    })
                    //幼儿活动
                    .state('app.school.childActivities', {
                        url: '/childActivities',
                        templateUrl: 'tpl/school/childActivities.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/school/childActivities.js',
                                        'vendor/layer/layer.js'
                                    ]);
                                }]
                        }
                    })
                    //考勤计划
                    .state('app.school.attendancePlan', {
                        url: '/attendancePlan',
                        templateUrl: 'tpl/school/attendancePlan.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/school/attendancePlan.js',
                                        'vendor/layer/layer.js'
                                    ]);
                                }]
                        }
                    })
                    // 系统管理
                    .state('app.system', {
                        url: '/system',
                        template: '<div ui-view></div>'
                    })
                    //系统说明
                    .state('app.system.systemInfo', {
                        url: '/systemInfo',
                        templateUrl: 'views/system/systemInfo.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(['js/controllers/system/systemInfo.js']);
                                }]
                        }
                    })
                    .state('app.ui', {
                        url: '/ui',
                        template: '<div ui-view class="fade-in-up"></div>'
                    })
                    .state('app.ui.buttons', {
                        url: '/buttons',
                        templateUrl: 'tpl/ui_buttons.html'
                    })
                    .state('app.ui.icons', {
                        url: '/icons',
                        templateUrl: 'tpl/ui_icons.html'
                    })
                    .state('app.ui.grid', {
                        url: '/grid',
                        templateUrl: 'tpl/ui_grid.html'
                    })
                    .state('app.ui.widgets', {
                        url: '/widgets',
                        templateUrl: 'tpl/ui_widgets.html'
                    })
                    .state('app.ui.bootstrap', {
                        url: '/bootstrap',
                        templateUrl: 'tpl/ui_bootstrap.html'
                    })
                    .state('app.ui.sortable', {
                        url: '/sortable',
                        templateUrl: 'tpl/ui_sortable.html'
                    })
                    .state('app.ui.portlet', {
                        url: '/portlet',
                        templateUrl: 'tpl/ui_portlet.html'
                    })
                    .state('app.ui.timeline', {
                        url: '/timeline',
                        templateUrl: 'tpl/ui_timeline.html'
                    })
                    .state('app.ui.tree', {
                        url: '/tree',
                        templateUrl: 'tpl/ui_tree.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load('angularBootstrapNavTree').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/tree.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.ui.toaster', {
                        url: '/toaster',
                        templateUrl: 'tpl/ui_toaster.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad){
                                    return $ocLazyLoad.load('toaster').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/toaster.js');
                                        }
                                    );
                                }]
                        }
                    })
                    .state('app.ui.jvectormap', {
                        url: '/jvectormap',
                        templateUrl: 'tpl/ui_jvectormap.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad){
                                    return $ocLazyLoad.load('js/controllers/vectormap.js');
                                }]
                        }
                    })
                    .state('app.ui.googlemap', {
                        url: '/googlemap',
                        templateUrl: 'tpl/ui_googlemap.html',
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( [
                                        'js/app/map/load-google-maps.js',
                                        'js/app/map/ui-map.js',
                                        'js/app/map/map.js'] ).then(
                                        function(){
                                            return loadGoogleMaps();
                                        }
                                    );
                                }]
                        }
                    })
                    .state('app.chart', {
                        url: '/chart',
                        templateUrl: 'tpl/ui_chart.html',
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad){
                                    return uiLoad.load('js/controllers/chart.js');
                                }]
                        }
                    })
                    // table
                    .state('app.table', {
                        url: '/table',
                        template: '<div ui-view></div>'
                    })
                    .state('app.table.static', {
                        url: '/static',
                        templateUrl: 'tpl/table_static.html'
                    })
                    .state('app.table.datatable', {
                        url: '/datatable',
                        templateUrl: 'tpl/table_datatable.html'
                    })
                    .state('app.table.footable', {
                        url: '/footable',
                        templateUrl: 'tpl/table_footable.html'
                    })
                    .state('app.table.grid', {
                        url: '/grid',
                        templateUrl: 'tpl/table_grid.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load('ngGrid').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/grid.js');
                                        }
                                    );
                                }]
                        }
                    })
                    // form
                    .state('app.form', {
                        url: '/form',
                        template: '<div ui-view class="fade-in"></div>',
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad){
                                    return uiLoad.load('js/controllers/form.js');
                                }]
                        }
                    })
                    .state('app.form.elements', {
                        url: '/elements',
                        templateUrl: 'tpl/form_elements.html'
                    })
                    .state('app.form.validation', {
                        url: '/validation',
                        templateUrl: 'tpl/form_validation.html'
                    })
                    .state('app.form.wizard', {
                        url: '/wizard',
                        templateUrl: 'tpl/form_wizard.html'
                    })
                    .state('app.form.fileupload', {
                        url: '/fileupload',
                        templateUrl: 'tpl/form_fileupload.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad){
                                    return $ocLazyLoad.load('angularFileUpload').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/file-upload.js');
                                        }
                                    );
                                }]
                        }
                    })
                    .state('app.form.imagecrop', {
                        url: '/imagecrop',
                        templateUrl: 'tpl/form_imagecrop.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad){
                                    return $ocLazyLoad.load('ngImgCrop').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/imgcrop.js');
                                        }
                                    );
                                }]
                        }
                    })
                    .state('app.form.select', {
                        url: '/select',
                        templateUrl: 'tpl/form_select.html',
                        controller: 'SelectCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load('ui.select').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/select.js');
                                        }
                                    );
                                }]
                        }
                    })
                    .state('app.form.slider', {
                        url: '/slider',
                        templateUrl: 'tpl/form_slider.html',
                        controller: 'SliderCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load('vr.directives.slider').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/slider.js');
                                        }
                                    );
                                }]
                        }
                    })
                    .state('app.form.editor', {
                        url: '/editor',
                        templateUrl: 'tpl/form_editor.html',
                        controller: 'EditorCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load('textAngular').then(
                                        function(){
                                            return $ocLazyLoad.load('js/controllers/editor.js');
                                        }
                                    );
                                }]
                        }
                    })
                    // pages
                    .state('app.page', {
                        url: '/page',
                        template: '<div ui-view class="fade-in-down"></div>'
                    })
                    .state('app.page.profile', {
                        url: '/profile',
                        templateUrl: 'tpl/page_profile.html'
                    })
                    .state('app.page.post', {
                        url: '/post',
                        templateUrl: 'tpl/page_post.html'
                    })
                    .state('app.page.search', {
                        url: '/search',
                        templateUrl: 'tpl/page_search.html'
                    })
                    .state('app.page.invoice', {
                        url: '/invoice',
                        templateUrl: 'tpl/page_invoice.html'
                    })
                    .state('app.page.price', {
                        url: '/price',
                        templateUrl: 'tpl/page_price.html'
                    })
                    .state('app.docs', {
                        url: '/docs',
                        templateUrl: 'tpl/docs.html'
                    })
                    // others
                    .state('lockme', {
                        url: '/lockme',
                        templateUrl: 'tpl/page_lockme.html'
                    })
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class="fade-in-right-big smooth"></div>'
                    })
                    .state('access.signin', {
                        url: '/signin',
                        templateUrl: 'tpl/page_signin.html',
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( ['js/controllers/signin.js'] );
                                }]
                        }
                    })
                    .state('access.signup', {
                        url: '/signup',
                        templateUrl: 'tpl/page_signup.html',
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( ['js/controllers/signup.js'] );
                                }]
                        }
                    })
                    .state('access.forgotpwd', {
                        url: '/forgotpwd',
                        templateUrl: 'tpl/page_forgotpwd.html'
                    })
                    .state('access.404', {
                        url: '/404',
                        templateUrl: 'tpl/page_404.html'
                    })

                    // fullCalendar
                    .state('app.calendar', {
                        url: '/calendar',
                        templateUrl: 'tpl/app_calendar.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function( $ocLazyLoad, uiLoad ){
                                    return uiLoad.load(
                                        ['vendor/jquery/fullcalendar/fullcalendar.css',
                                            'vendor/jquery/fullcalendar/theme.css',
                                            'vendor/jquery/jquery-ui-1.10.3.custom.min.js',
                                            'vendor/libs/moment.min.js',
                                            'vendor/jquery/fullcalendar/fullcalendar.min.js',
                                            'js/app/calendar/calendar.js']
                                    ).then(
                                        function(){
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }]
                        }
                    })

                    // mail
                    .state('app.mail', {
                        abstract: true,
                        url: '/mail',
                        templateUrl: 'tpl/mail.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( ['js/app/mail/mail.js',
                                        'js/app/mail/mail-service.js',
                                        'vendor/libs/moment.min.js'] );
                                }]
                        }
                    })
                    .state('app.mail.list', {
                        url: '/inbox/{fold}',
                        templateUrl: 'tpl/mail.list.html'
                    })
                    .state('app.mail.detail', {
                        url: '/{mailId:[0-9]{1,4}}',
                        templateUrl: 'tpl/mail.detail.html'
                    })
                    .state('app.mail.compose', {
                        url: '/compose',
                        templateUrl: 'tpl/mail.new.html'
                    })

                    .state('layout', {
                        abstract: true,
                        url: '/layout',
                        templateUrl: 'tpl/layout.html'
                    })
                    .state('layout.fullwidth', {
                        url: '/fullwidth',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_fullwidth.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_fullwidth.html'
                            }
                        },
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( ['js/controllers/vectormap.js'] );
                                }]
                        }
                    })
                    .state('layout.mobile', {
                        url: '/mobile',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_mobile.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_mobile.html'
                            }
                        }
                    })
                    .state('layout.app', {
                        url: '/app',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_app.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_fullwidth.html'
                            }
                        },
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( ['js/controllers/tab.js'] );
                                }]
                        }
                    })
                    .state('apps', {
                        abstract: true,
                        url: '/apps',
                        templateUrl: 'tpl/layout.html'
                    })
                    .state('apps.note', {
                        url: '/note',
                        templateUrl: 'tpl/apps_note.html',
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( ['js/app/note/note.js',
                                        'vendor/libs/moment.min.js'] );
                                }]
                        }
                    })
                    .state('apps.contact', {
                        url: '/contact',
                        templateUrl: 'tpl/apps_contact.html',
                        resolve: {
                            deps: ['uiLoad',
                                function( uiLoad ){
                                    return uiLoad.load( ['js/app/contact/contact.js'] );
                                }]
                        }
                    })
                    .state('app.weather', {
                        url: '/weather',
                        templateUrl: 'tpl/apps_weather.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load(
                                        {
                                            name: 'angular-skycons',
                                            files: ['js/app/weather/skycons.js',
                                                'vendor/libs/moment.min.js',
                                                'js/app/weather/angular-skycons.js',
                                                'js/app/weather/ctrl.js' ]
                                        }
                                    );
                                }]
                        }
                    })
                    .state('music', {
                        url: '/music',
                        templateUrl: 'tpl/music.html',
                        controller: 'MusicCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                    return $ocLazyLoad.load([
                                        'com.2fdevs.videogular',
                                        'com.2fdevs.videogular.plugins.controls',
                                        'com.2fdevs.videogular.plugins.overlayplay',
                                        'com.2fdevs.videogular.plugins.poster',
                                        'com.2fdevs.videogular.plugins.buffering',
                                        'js/app/music/ctrl.js',
                                        'js/app/music/theme.css'
                                    ]);
                                }]
                        }
                    })
                    .state('music.home', {
                        url: '/home',
                        templateUrl: 'tpl/music.home.html'
                    })
                    .state('music.genres', {
                        url: '/genres',
                        templateUrl: 'tpl/music.genres.html'
                    })
                    .state('music.detail', {
                        url: '/detail',
                        templateUrl: 'tpl/music.detail.html'
                    })
                    .state('music.mtv', {
                        url: '/mtv',
                        templateUrl: 'tpl/music.mtv.html'
                    })
                    .state('music.mtvdetail', {
                        url: '/mtvdetail',
                        templateUrl: 'tpl/music.mtv.detail.html'
                    })
                    .state('music.playlist', {
                        url: '/playlist/{fold}',
                        templateUrl: 'tpl/music.playlist.html'
                    })
               /* $locationProvider.html5Mode(true);*/
            }
        ]
    );