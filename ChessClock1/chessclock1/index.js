var app = new Vue({
    el:'.main',
    data:{
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