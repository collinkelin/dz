(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-bcb30a34"], {
    "63d8": function(t, n, i) {
        "use strict";
        var a = i("d2e1"),
            e = i.n(a);
        e.a
    },
    d2e1: function(t, n, i) {},
    f475: function(t, n, i) {
        "use strict";
        i.r(n);
        var a = function() {
                var t = this,
                    n = t.$createElement,
                    i = t._self._c || n;
                return i("div", {
                        staticClass: "Site PageBox"
                    },
                    [i("van-nav-bar", {
                        attrs: {
                            fixed: "",
                            border: !1,
                            title: t.$t("language"),
                            "left-arrow": ""
                        },
                        on: {
                            "click-left": function(n) {
                                return t.$router.go( - 1)
                            }
                        }
                    }), i("div", {
                            staticClass: "ScrollBox"
                        },
                        [1 == t.InitData.setting.ft ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/zh-FT.png",
                                title: "繁体中文",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("zh-TW")
                                }
                            }
                        }) : t._e(), 1 == t.InitData.setting.en ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/en-US.png",
                                title: "English",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("en-US")
                                }
                            }
                        }) :t._e(), 1 == t.InitData.setting.yd ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/zh-YD.png",
                                title: "हिंदी",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("en-US")
                                }
                            }
                        }) : t._e(), 1 == t.InitData.setting.cn ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/zh-CN.png",
                                title: "简体中文",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("zh-CN")
                                }
                            }
                        }) : t._e(), 1 == t.InitData.setting.yny ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/id-ID.png",
                                title: "IndonesiaName",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("id-ID")
                                }
                            }
                        }) : t._e(), 1 == t.InitData.setting.vi ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/zh-YN.png",
                                title: "ViệtName",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("vi-VN")
                                }
                            }
                        }) : t._e(), 1 == t.InitData.setting.es ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/zh-XBY.png",
                                title: "Español",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("es-ES")
                                }
                            }
                        }) : t._e(), 1 == t.InitData.setting.jp ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/zh-RY.png",
                                title: "日本語",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("ja-JP")
                                }
                            }
                        }) : t._e(), 1 == t.InitData.setting.ty ? i("van-cell", {
                            attrs: {
                                icon: "./static/icon/th-TH.png",
                                title: "ภาษาไทย",
                                "is-link": ""
                            },
                            on: {
                                click: function(n) {
                                    return t.changeLanguage("th-TH")
                                }
                            }
                        }) : t._e()], 1)], 1)
            },
            e = [],
            c = {
                name: "Language",
                components: {},
                props: {},
                data() {
                    return {}
                },
                computed: {},
                watch: {},
                created() {},
                mounted() {},
                activated() {},
                destroyed() {},
                methods: {
                    changeLanguage(t) {
                        this.$SetLanguage(t),
                            this.$Model.GetBackData(),
                            this.$router.go( - 1)
                    }
                }
            },
            o = c,
            s = (i("63d8"), i("2877")),
            l = Object(s["a"])(o, a, e, !1, null, "116f8b2b", null);
        n["default"] = l.exports
    }
}]);