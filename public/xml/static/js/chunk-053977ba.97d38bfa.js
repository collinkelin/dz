(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-053977ba"], {
    "39e3": function(t, e, s) {},
    "4c73": function(t, e, s) {
        "use strict";
        var o = s("39e3"),
            a = s.n(o);
        a.a
    },
    "4f41": function(t, e, s) {
        "use strict";
        s.r(e);
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                        staticClass: "Site PageBox"
                    },
                    [s("van-nav-bar", {
                        attrs: {
                            fixed: "",
                            border: !1,
                            "left-arrow": "",
                            "right-text": t.$t("language")
                        },
                        on: {
                            "click-left": function(e) {
                                return t.$router.go( - 1)
                            },
                            "click-right": function(e) {
                                return t.$router.push("/language")
                            }
                        }
                    }), s("div", {
                            staticClass: "Login ScrollBox"
                        },
                        [s("h1", [t._v(t._s(t.$t("register.text[0]")))]), s("div", {
                                staticStyle: {
                                    "margin-top": "5px",
                                    width: "50%",
                                    float: "left",
                                    color: "#fff",
                                    height: "30px",
                                    "line-height": "30px"
                                }
                            },
                            [s("router-link", {
                                    staticStyle: {
                                        color: "#fff",
                                        "font-size": "16px"
                                    },
                                    attrs: {
                                        slot: "line",
                                        to: "/register"
                                    },
                                    slot: "line"
                                },
                                [t._v(t._s(t.$t("register.text[6]")))])], 1), s("div", {
                                staticStyle: {
                                    "margin-top": "5px",
                                    width: "50%",
                                    float: "left",
                                    color: "#fff",
                                    height: "30px",
                                    "line-height": "30px",
                                    "border-bottom": "1px solid #fff"
                                }
                            },
                            [s("router-link", {
                                    staticStyle: {
                                        color: "#fff",
                                        "font-size": "16px"
                                    },
                                    attrs: {
                                        slot: "line",
                                        to: "/registeremail"
                                    },
                                    slot: "line"
                                },
                                [t._v(t._s(t.$t("register.text[7]")))])], 1), s("van-form", {
                                on: {
                                    submit: t.onSubmit
                                }
                            },
                            [s("van-field", {
                                staticStyle: {
                                    height: "0",
                                    width: "0",
                                    padding: "0",
                                    position: "absolute"
                                },
                                attrs: {
                                    type: "text",
                                    autocomplete: "off"
                                }
                            }), s("van-field", {
                                staticStyle: {
                                    height: "0",
                                    width: "0",
                                    padding: "0",
                                    position: "absolute"
                                },
                                attrs: {
                                    type: "password",
                                    autocomplete: "off"
                                }
                            }), s("van-field", {
                                attrs: {
                                    "left-icon": "manager",
                                    clearable: "",
                                    border: !1
                                },
                                scopedSlots: t._u([{
                                    key: "input",
                                    fn: function() {
                                        return [s("input", {
                                            directives: [{
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value: t.postData.username,
                                                expression: "postData.username",
                                                modifiers: {
                                                    trim: !0
                                                }
                                            }],
                                            staticStyle: {
                                                border: "0",
                                                flex: "1",
                                                width: "100px",
                                                background: "transparent"
                                            },
                                            attrs: {
                                                type: "tel",
                                                placeholder: t.$t("register.placeholder[7]")
                                            },
                                            domProps: {
                                                value: t.postData.username
                                            },
                                            on: {
                                                input: function(e) {
                                                    e.target.composing || t.$set(t.postData, "username", e.target.value.trim())
                                                },
                                                blur: function(e) {
                                                    return t.$forceUpdate()
                                                }
                                            }
                                        })]
                                    },
                                    proxy: !0
                                }])
                            }), s("van-field", {
                                attrs: {
                                    "left-icon": "coupon",
                                    autocomplete: "off",
                                    type: "digit",
                                    placeholder: t.$t("register.placeholder[6]"),
                                    clearable: "",
                                    border: !1
                                },
                                scopedSlots: t._u([{
                                    key: "button",
                                    fn: function() {
                                        return [s("van-image", {
                                            staticStyle: {
                                                display: "block",
                                                cursor: "pointer"
                                            },
                                            attrs: {
                                                width: "100",
                                                height: "34",
                                                src: t.codeImg
                                            },
                                            on: {
                                                click: t.getCode
                                            }
                                        })]
                                    },
                                    proxy: !0
                                }]),
                                model: {
                                    value: t.postData.code,
                                    callback: function(e) {
                                        t.$set(t.postData, "code", "string" === typeof e ? e.trim() : e)
                                    },
                                    expression: "postData.code"
                                }
                            }), 1 == t.InitData.setting.is_sms ? s("van-field", {
                                attrs: {
                                    "left-icon": "coupon",
                                    autocomplete: "off",
                                    type: "digit",
                                    placeholder: t.$t("register.placeholder[1]"),
                                    clearable: "",
                                    border: !1
                                },
                                scopedSlots: t._u([{
                                    key: "button",
                                    fn: function() {
                                        return [s("van-button", {
                                                attrs: {
                                                    size: "mini",
                                                    type: "info",
                                                    round: "",
                                                    "native-type": "button",
                                                    loading: t.isSendCode,
                                                    "loading-text": t.$t("register.text[1]")
                                                },
                                                on: {
                                                    click: t.getSmsCode
                                                }
                                            },
                                            [t._v(t._s(t.$t("register.text[2]")))])]
                                    },
                                    proxy: !0
                                }], null, !1, 3549898226),
                                model: {
                                    value: t.postData.smscode,
                                    callback: function(e) {
                                        t.$set(t.postData, "smscode", "string" === typeof e ? e.trim() : e)
                                    },
                                    expression: "postData.smscode"
                                }
                            }) : t._e(), s("van-field", {
                                attrs: {
                                    "left-icon": "lock",
                                    type: "password",
                                    placeholder: t.$t("register.placeholder[2]"),
                                    clearable: "",
                                    autocomplete: "off",
                                    border: !1
                                },
                                model: {
                                    value: t.postData.password,
                                    callback: function(e) {
                                        t.$set(t.postData, "password", "string" === typeof e ? e.trim() : e)
                                    },
                                    expression: "postData.password"
                                }
                            }), s("van-field", {
                                attrs: {
                                    "left-icon": "lock",
                                    type: "password",
                                    placeholder: t.$t("register.placeholder[3]"),
                                    clearable: "",
                                    autocomplete: "off",
                                    border: !1
                                },
                                model: {
                                    value: t.postData.re_password,
                                    callback: function(e) {
                                        t.$set(t.postData, "re_password", "string" === typeof e ? e.trim() : e)
                                    },
                                    expression: "postData.re_password"
                                }
                            }), s("van-field", {
                                attrs: {
                                    "left-icon": "invition",
                                    readonly: t.recommendDis,
                                    placeholder: t.$t("register.placeholder[4]"),
                                    clearable: "",
                                    autocomplete: "off",
                                    border: !1
                                },
                                model: {
                                    value: t.postData.recommend,
                                    callback: function(e) {
                                        t.$set(t.postData, "recommend", "string" === typeof e ? e.trim() : e)
                                    },
                                    expression: "postData.recommend"
                                }
                            }), s("div", {
                                    staticStyle: {
                                        padding: "20px 16px"
                                    }
                                },
                                [s("van-button", {
                                        staticStyle: {
                                            "font-size": "18px"
                                        },
                                        attrs: {
                                            size: "large",
                                            block: "",
                                            type: "danger",
                                            round: "",
                                            loading: t.isSubmit,
                                            "loading-text": t.$t("register.text[3]")
                                        }
                                    },
                                    [t._v(t._s(t.$t("register.text[4]")))]), t.isPlus ? t._e() : s("van-button", {
                                        staticStyle: {
                                            "font-size": "18px",
                                            "margin-top": "10px",
                                            background: "transparent"
                                        },
                                        attrs: {
                                            size: "large",
                                            block: "",
                                            plain: "",
                                            type: "info",
                                            round: ""
                                        },
                                        on: {
                                            click: t.goDown
                                        }
                                    },
                                    [t._v(t._s(t.$t("register.text[5]")))]), t.isPlus ? s("i18n", {
                                        staticStyle: {
                                            "text-align": "left",
                                            color: "#fff",
                                            "margin-top": "30px"
                                        },
                                        attrs: {
                                            path: "register.i18n[0]",
                                            tag: "div"
                                        }
                                    },
                                    [s("router-link", {
                                            staticClass: "href",
                                            attrs: {
                                                slot: "a",
                                                to: "/login"
                                            },
                                            slot: "a"
                                        },
                                        [t._v(t._s(t.$t("register.i18n[1]")))]), s("router-link", {
                                            staticClass: "href fr",
                                            attrs: {
                                                slot: "line",
                                                to: "/line"
                                            },
                                            slot: "line"
                                        },
                                        [t._v(t._s(t.$t("line")))])], 1) : s("div", {
                                        staticStyle: {
                                            "margin-top": "20px"
                                        }
                                    },
                                    [s("router-link", {
                                            staticClass: "href",
                                            attrs: {
                                                slot: "line",
                                                to: "/line"
                                            },
                                            slot: "line"
                                        },
                                        [t._v(t._s(t.$t("line")))])], 1)], 1)], 1)], 1), s("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.showBrowserTips,
                                expression: "showBrowserTips"
                            }],
                            staticClass: "BrowserTips"
                        },
                        [s("img", {
                            attrs: {
                                src: "./static/images/down-zy.png",
                                width: "80%"
                            }
                        })])], 1)
            },
            a = [],
            i = {
                name: "Register",
                components: {},
                props: ["recommendId"],
                data() {
                    return {
                        postData: {
                            dest: 86,
                            username: "",
                            password: "",
                            re_password: "",
                            smscode: "",
                            code: "",
                            code_rand: "",
                            recommend: this.recommendId || ""
                        },
                        recommendDis: !!this.recommendId,
                        areaList: [{
                            id: "86",
                            name: "CHINA(中国)"
                        }],
                        isSendCode: !1,
                        isSubmit: !1,
                        codeImg: "",
                        showBrowserTips: !1,
                        downUrl: "",
                        isPlus: !1
                    }
                },
                computed: {},
                watch: {},
                created() {
                    this.$Model.SmsCode(t = >{
                        this.areaList = t,
                        this.postData.dest = t[0].id
                    }),
                    this.getCode(),
                        this.checkUserAgent()
                },
                mounted() {
                    window.plus && (this.isPlus = !0)
                },
                activated() {},
                destroyed() {},
                methods: {
                    goDown() {
                        window.plus ? this.$router.push("/AppDown") : this.$Util.OpenUrl(AppDown)
                    },
                    getCode() {
                        this.postData.code_rand = (new Date).getTime(),
                            this.codeImg = this.ApiUrl + "/api/Account/code?code_rand=" + this.postData.code_rand
                    },
                    onSubmit() {
                        this.postData.username ? this.postData.smscode || 1 != this.InitData.setting.is_sms ? this.postData.code || 2 != this.InitData.setting.is_sms ? this.postData.password ? this.postData.re_password ? this.postData.password == this.postData.re_password ? (this.isSubmit = !0, this.$Model.UserRegister(this.postData, t = >{
                            this.isSubmit = !1,
                            this.getCode()
                        })) : this.$Dialog.Toast(this.$t("register.placeholder[5]")) : this.$Dialog.Toast(this.$t("register.placeholder[3]")) : this.$Dialog.Toast(this.$t("register.placeholder[2]")) : this.$Dialog.Toast(this.$t("register.placeholder[6]")) : this.$Dialog.Toast(this.$t("register.placeholder[1]")) : this.$Dialog.Toast(this.$t("register.placeholder[0]"))
                    },
                    getSmsCode() {
                        this.postData.username ? this.postData.code ? (this.isSendCode = !0, this.$Model.GetSMSCode({
                                phone: this.postData.username,
                                dest: this.postData.dest,
                                code: this.postData.code,
                                recommend: this.postData.recommend,
                                code_rand: this.postData.code_rand
                            },
                            t = >{
                            this.isSendCode = !1
                        })) : this.$Dialog.Toast(this.$t("register.placeholder[6]")) : this.$Dialog.Toast(this.$t("register.placeholder[0]"))
                    },
                    checkUserAgent(t) {
                        var e = navigator.userAgent,
                            s = () = >!!/(MicroMessenger)/.test(e),
                            o = () = >!!/(iPod|iPhone|iPad)/.test(e);
                        s() && (this.showBrowserTips = !0),
                            o() ? t && t("IOS") : t && t("Android")
                    }
                }
            },
            r = i,
            n = (s("4c73"), s("2877")),
            l = Object(n["a"])(r, o, a, !1, null, "0f2ae95f", null);
        e["default"] = l.exports
    }
}]);