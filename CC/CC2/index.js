var app = new Vue({
    el:'#flat',
    data:{
        timeAddToMove: 5,
        timePlayer1: 5 * 60,
        timePlayer2: 5 * 60,
        primaryPlayer: "player1",
        active: false,
        count: 0,

        list:['使用するルールは『Fisher Rule』を採用します。','手番の終了時に持ち時間に5秒を追加します','持ち時間が０になった場合０になった対局者の負けとなります。']
    },    
    methods:{
        increment: function(){
            this.count += 1
        },
        pressTimer: function(event){
        if(this.active){
            switch(this.primaryPlayer){
            case "player1":
            this.primaryPlayer = "player2";
            this.timePlayer1 += this.timeAddToMove;
            break;
            case "player2":
            this.primaryPlayer = "player1";
            this.timePlayer2 += this.timeAddToMove;
            break;
            default:
            alert("what!?\n"+this.primaryPlayer)
            }   
        }else{
            this.active = true;
        }
        this.setTimer();

        },
        setTimer: function(){
        clearInterval(this.interval);
        this.interval = setInterval(()=>{
            switch(this.primaryPlayer){
            case "player1":
                this.timePlayer1 --;
                if(this.timePlayer1 <= 0){
                alert("Player1の時間切れ負け");
                clearInterval(this.interval);
                }
                break;
            case "player2":
                this.timePlayer2 --;
                if(this.timePlayer2 <= 0){
                    alert("Player2の時間切れ負け");
                    clearInterval(this.interval);
                }
                break;
            default:
            }
        },1000)
        }
    },
    filters:{
        time:function(value){
        if(!value)return ''
        const minutes = Math.floor(value /60) > 0 ? Math.floor(value / 60)+"分" : "";
        const second = value % 60 + "秒";
        return minutes + second;
    }
    }
    
})
    