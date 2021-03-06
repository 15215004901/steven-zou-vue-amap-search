"use strict";
var amap_1 = require("../../mixins/amap.js");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'amapSearch',
    data: function () {
        return {
            // 高德地图相关的 amapmixin 中使用的
            autocomplateInput: '',
        };
    },
    watch: {
        autocomplateInput: function (val, oldVal) {
            this.$emit('userInput', val);
        },
        'selectedPoi.location': function selectedPoiLocation(newVal, oldVal) {
            /**
             * 如果不显示确定按钮, 拖到那里是哪里的话,
             * searchCount 默认为1
             */
            console.log(1)
            console.log(this.autoConfirm)
            if (this.autoConfirm) {
                console.log(2)
                this.selectedPoi.isMoved = false;
                var loc = JSON.stringify(this.selectedPoi);
                this.$emit('pickedLocation', JSON.parse(loc));
            }
        }
    },
    props: {
        defaultLng: {
            type: Number,
            default: 22.550058,
            required: false
        },
        defaultLat: {
            type: Number,
            default: 114.065702,
            required: false
        },
        defaultCity: {
            type: String,
            default: '深圳',
            required: false
        },
        searchCount: {
            type: Number,
            default: 1,
            required: false
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        autoConfirm: {
            type: Boolean,
            default: false,
            required: false
        },
        useClick: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    methods: {
        setMarkerLocation: function () {
            console.log(3)
            if (this.autoConfirm == false) {
                console.log(4)
                this.selectedPoi.isMoved = false;
                var loc = JSON.stringify(this.selectedPoi);
                console.log("loc")
                console.log(loc)
                this.$emit('pickedLocation', JSON.parse(loc));
            }
        }
    },
    mounted: function () {
        // 初始化 domId
        this.initAmap('amap-container', [this.defaultLat, this.defaultLng]);
        /**
         * 如果不显示确定按钮, 拖到那里是哪里的话,
         * searchCount 默认为1
         */
        var searchCount = this.autoConfirm ? 1 : this.searchCount;
        /**
         * 如果支持用户点击, 点在哪里是哪里
         * searchCount 默认为1
         */
        if (this.useClick) {
            this.initMouseTools();
            searchCount = 1;
        }
        // 初始化 自动完成 domId ''代表默认全国
        this.initAutocomplate("autocomplate-input", searchCount, this.defaultCity);
    },
    mixins: [amap_1.amapmixinApp],
};
