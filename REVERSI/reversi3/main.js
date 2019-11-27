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
        initStone(){
            var stone=[];
            var size=this.size;

            for(var x=0;x<size;x++){
                var stoneLine=[];
                for(var y=0;y<size;y++){
                    stoneLine.push=(0); //0は空白
                }
                stones.push(stoneLine);
            }
            this.stones=stones;
        }
    },
    created(){
        this.initStone();
    }
});