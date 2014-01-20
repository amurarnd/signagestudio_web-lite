define(['underscore', 'jquery', 'backbone', 'bootstrap', 'Elements'], function (_, $, Backbone, Bootstrap, Elements) {
    var StudioLite = Backbone.Router.extend({


        routes: {
            "help": "help",    // #help
            "search/:query": "search",  // #search/kiwis
            "search/:query/p:page": "search"   // #search/kiwis/p7
        },

        help: function () {

        },

        search: function (query, page) {
            require(["menuitemdetails"], function (empModelFactory) {
                var employee = new (empModelFactory['Employee']);
                var employees = new (empModelFactory['EmployeeCollection']);
                employee.alertMe();
                employees.alertMe();
            });
        },

        initialize: function () {

            Backbone.View = (function (View) {
                return View.extend({
                    constructor: function (options) {
                        this.options = options || {};
                        View.apply(this, arguments);
                    }
                });
            })(Backbone.View);

            require(['AppEntryFaderView', 'LoginView', 'AppSliderView', 'CampaignSelectorView', 'CampaignView', 'ResolutionSelectorView', 'OrientationSelectorView', 'PropertyPanelView'],
                function (AppEntryFaderView, LoginView, AppSliderView, CampaignSelectorView, CampaignView, ResolutionSelectorView, OrientationSelectorView, PropertyPanelView) {

                    var appEntryFaderView = new AppEntryFaderView({el: Elements.APP_ENTRY});
                    var appSliderView = new AppSliderView({ el: Elements.APP_CONTENT});
                    var loginView = new LoginView({el: Elements.APP_LOGIN});

                    var propertyPanelView = new PropertyPanelView({el: Elements.PROP_PANEL});
                    var md1 = new Backbone.View({id: '#stackViewModal1'});
                    var md2 = new Backbone.View({id: '#stackViewModal2'});
                    var md3 = new Backbone.View({id: '#stackViewModal3'});
                    propertyPanelView.addView(md1);
                    propertyPanelView.addView(md2);
                    propertyPanelView.addView(md3);

                    var c = 0;
                    $('#someAction').on('click', function (e) {
                        if (c == 0)
                            propertyPanelView.selectView(md1)
                        if (c == 1)
                            propertyPanelView.selectView(md2)
                        if (c == 2)
                            propertyPanelView.selectView(md3)
                        c++;
                    });

                    appEntryFaderView.addView(loginView);
                    appEntryFaderView.addView(appSliderView);

                    appEntryFaderView.selectView(loginView);
                    setTimeout(function () {
                        appEntryFaderView.selectView(appSliderView);
                    }, 2000)


                    var campaignSelectorView = new CampaignSelectorView({
                        appCoreStackView: appSliderView,
                        from: '#campaign',
                        el: '#campaignSelector',
                        to: '#orientationSelector'
                    });

                    var resolutionSelectorView = new ResolutionSelectorView({
                        appCoreStackView: appSliderView,
                        from: '#campaignSelector',
                        el: '#orientationSelector',
                        to: '#resolutionSelector'
                    });

                    var orientationSelectorView = new OrientationSelectorView({
                        appCoreStackView: appSliderView,
                        from: '#orientationSelector',
                        el: '#resolutionSelector',
                        to: '#campaign'
                    });

                    var campaignView = new CampaignView({
                        appCoreStackView: appSliderView,
                        from: '#resolutionSelector',
                        el: '#campaign',
                        to: '#campaignSelector'
                    });

                    appSliderView.addView(campaignSelectorView);
                    appSliderView.addView(campaignView);
                    appSliderView.addView(resolutionSelectorView);
                    appSliderView.addView(orientationSelectorView);
                    appSliderView.selectView(campaignSelectorView);


                    return;
                    appCoreStackView.selectIndex(0);
                    // appCoreStackView.leanModal();

                    setTimeout(function () {
                        appCoreStackView.selectIndex(1);
                    }, 2000)

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p9',
                        el: '#p1',
                        to: '#p2'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p1',
                        el: '#p2',
                        to: '#p3'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p2',
                        el: '#p3',
                        to: '#p4'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p3',
                        el: '#p4',
                        to: '#p5'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p4',
                        el: '#p5',
                        to: '#p6'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p5',
                        el: '#p6',
                        to: '#p7'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p6',
                        el: '#p7',
                        to: '#p8'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p7',
                        el: '#p8',
                        to: '#p9'
                    });

                    new ApplicationView({
                        appCoreStackView: appCoreStackView,
                        from: '#p8',
                        el: '#p9',
                        to: '#p1'
                    });


                })

            setTimeout(function () {
                $(window).trigger('resize');
            }, 50);

            Backbone.history.start();

            // Test open bootstrap modal
            $('#openPanel').on('click', function () {
                var w = $('body').css('width').replace('px', '');
                if (w <= 768) {
                    $(Elements.BS_MODAL).modal('show');
                    return;
                }
            });


            $(Elements.TOGGLE_PANEL).on('click', function () {
                if ($(Elements.TOGGLE_PANEL).hasClass('buttonStateOn')) {
                    $(Elements.TOGGLE_PANEL).toggleClass('buttonStateOn');
                    $(Elements.PROP_PANEL_WRAP).fadeOut(function () {
                        $(Elements.TOGGLE_PANEL).html('<');
                        $(Elements.PROP_PANEL_WRAP).addClass('hidden-sm hidden-md');
                        $(Elements.MAIN_PANEL_WRAP).removeClass('col-sm-9 col-md-9');
                        $(Elements.MAIN_PANEL_WRAP).addClass('col-md-12');
                    });
                } else {
                    $(Elements.TOGGLE_PANEL).toggleClass('buttonStateOn');
                    $(Elements.TOGGLE_PANEL).html('>');
                    $(Elements.MAIN_PANEL_WRAP).addClass('col-sm-9 col-md-9');
                    setTimeout(function () {
                        $(Elements.MAIN_PANEL_WRAP).removeClass('col-md-12');
                        $(Elements.PROP_PANEL_WRAP).children().hide();
                        $(Elements.PROP_PANEL_WRAP).removeClass('hidden-sm hidden-md');
                        $(Elements.PROP_PANEL_WRAP).children().fadeIn();
                    }, 500)
                }
            });

            $(window).resize(function () {
                var h = $('body').css('height').replace('px', '');
                var w = $('body').css('width').replace('px', '');
                // reduce footer
                h = h - 115;
                if (w <= 768) {
                    $('#searcher').hide();
                } else {
                    $('#searcher').show();
                }
                $(Elements.PROP_PANEL_WRAP).height(h);
                $(Elements.MAIN_PANEL_WRAP).height(h);
                $(Elements.APP_NAVIGATOR).height(h);

            });
        }
    })
    return StudioLite;
})