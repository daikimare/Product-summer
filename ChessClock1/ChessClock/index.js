var app = new Vue({
    el:'#flat',
    data:{
        timeAddToMove: 5,
        timePlayer: 5 * 60,
        timePlayer2: 5 * 60,
        primaryPlayer: "Player1",
        active: false,
        
        methods:
            pressTimer: function(event){
                if(this.active){
                    switch(this.primaryPlayer){
                    case "Player1":
                        this.primaryPlayer = "Player2";
                        this.timePlayer += this.timeAddToMove;
                        break;
                    case "Player2":
                        this.primaryPlayer = "Player1";
                        this.timePlayer += this.timeAddToMove;
                        break;
                    //default:
                    }   
                }
            },
        
        message:{
            value:'Hello Vue.js!'
        },

        list:['使用するルールは『Fisher Rule』を採用します。','手番の終了時に持ち時間に5秒を追加します','持ち時間が０になった場合０になった対局者の負けとなります。'],

        num: 1
    }
})
/*app = new Vue({
    el:'.rule',
    data:{
        list:['使用するルールは『Fisher Rule』を採用します。','手番の終了時に持ち時間に5秒を追加します','持ち時間が０になった場合０になった対局者の負けとなります。']
    }
})
var app = new Vue({
    el:'controle-button',
    methods:{
        handleClick: function(event){
            alert(event.target)
        }
    }
})*/