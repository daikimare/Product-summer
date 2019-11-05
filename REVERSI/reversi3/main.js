// 黒と白の石を表示するコンポーネント
var stonecomp={
    props:['type'],
    template: '<apan v-html="content"></span>',
    computed: {
        content(){
            if(this.type=='-1'){
                // 黑玉の表示
                return '&#x26AB;';
            }else if(this.type=='1'){
                //白玉の表示
                return '&#x26AA;';
            }
            return '&nbsp;';
        }
    }
};

new Vue({
    el:'#app',
    components:{
        stone: stonecomp
    },
    data:{
        size: 8,
        stone: []
    },
    methods:{

    },
    created:{

    },
});