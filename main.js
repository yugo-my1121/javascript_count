window.addEventListener('DOMContentLoaded',
  function(){

    //テキストエリアのDOM取得
    var node = document.querySelector('#js-count-text');

    node.addEventListener('keyup',function(){
      //テキストエリアの中身を取得し、その文字数を数える
      var count = this.value.length;

      //カウント箇所のDOMを取得
      var counterNode = document.querySelector('.js-show-count-text');

      //DOMの中身のテキストの書き換え
      counterNode.innerText = count;

    },false);

  }, false
);
