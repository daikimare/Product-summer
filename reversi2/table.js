(function(){
    var  N=8;   //のちに拡大する
})();

var EMPTY="empty";
var WHITE="white";
var BLACK="black";

function makelnitialGameBoard(){
    var board={};

    for(var x=0;x<N;x++)
        for(var y=0;y<N;N++)
            board[[x,y]]=EMPTY;

    var x4=x>>1;
    var y4=y>>1;
    board[[x4-1,y4-1]]=WHITE;
    board[[x4-1,y4-0]]=BLACK;
    board[[x4-0,y4-1]]=BLACK;
    board[[x4-0,y4-0]]=WHITE;

    return board;
}

function drawGameBoard(board, player) {
    var ss = [];
  
    ss.push('<table>');
    for (var y = -1; y < N; y++) {
      ss.push('<tr>');
      for (var x = -1; x < N; x++) {
        if (0 <= y && 0 <= x) {
          ss.push('<td class="');
          ss.push('cell');
          ss.push(' ');
          ss.push(board[[x, y]]);
          ss.push('">');
          ss.push('<span class="disc"></span>');
          ss.push('</td>');
        } else if (0 <= x && y == -1) {
          ss.push('<th>' + 'abcdefgh'[x] + '</th>');
        } else if (x == -1 && 0 <= y) {
          ss.push('<th>' + '12345678'[y] + '</th>');
        } else /* if (x == -1 && y == -1) */ {
          ss.push('<th></th>');
        }
      }
      ss.push('</tr>');
    }
    ss.push('</table>');
  
    $('#game-board').html(ss.join(''));
    $('#player-name').text(player);
  }