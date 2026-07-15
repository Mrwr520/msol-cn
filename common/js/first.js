'use strict';

window.onload = function() {
  /**
   * <body>から'-preload'クラスを削除する.
   * -> chromeで読み込み時にtransition指定要素が動くのを防ぐ処置
   */
  document.body.classList.remove('-preload');

  /**
   * 内部の文字を1字ずつ<span>で括る処理
   */
  var separateText = function(array) {
    for (var i = 0; i < array.length; i++) {
      var separateTextHTML = '';
      var separateTextArray = array[i].textContent.split('');
      for (var j = 0; j < separateTextArray.length; j++) {
        separateTextHTML += '<span>' + separateTextArray[j] + '</span>';
      }
      array[i].innerHTML = separateTextHTML;
    }
  };
  // 特定のクラス付与した要素でseparateText()を実行
  separateText(document.getElementsByClassName('js-text-separate'));
  // // ページのH1要素に対してseparateText()を実行
  // separateText(document.getElementsByClassName('p-page-visual__main'));

  /**
   * ループスライドで画像を2枚に複製する.
   */
  var loopSlideElm = document.querySelectorAll('.js-loop-slide');
  for (var i = 0; i < loopSlideElm.length; i++) {
    var _me = loopSlideElm[i];
    _me.appendChild(_me.getElementsByClassName('js-loop-slide-img')[0].cloneNode(true));
  }

  /**
   * マルチタブ
   */
  var MultiTabObj = {
    TRANSITION_CLASS_NAME: '-transition',
    MOVE_CLASS_NAME: '-move',
    ACTIVE_CLASS_NAME: '-active',
    VISIBLE_CLASS_NAME: '-visible',
    tabName: 'js-multi-tab',
    labelName: 'js-multi-tab-label',
    contentName: 'js-multi-tab-content',
    bgName: 'js-multi-tab-bg'
  };

  var MultiTab = function(elm, obj) {
    var scope = this;

    var TRANSITION_CLASS = obj.TRANSITION_CLASS_NAME;
    var MOVE_CLASS = obj.MOVE_CLASS_NAME;
    var ACTIVE_CLASS = obj.ACTIVE_CLASS_NAME;
    var VISIBLE_CLASS = obj.VISIBLE_CLASS_NAME;

    this.tabContainer = elm;
    this.tabLabels = this.tabContainer.getElementsByClassName(obj.labelName);
    this.tabContents = this.tabContainer.getElementsByClassName(obj.contentName);
    this.tabBGs = this.tabContainer.getElementsByClassName(obj.bgName);
    this.tabBG = this.tabBGs[0];
    this.slideOrigin = this.tabBGs.length > 0 ? true : false;
    this.slided = false;

    // ラベルとコンテンツの切り替え
    this.updateTab = function(index) {
      var targetLabel = this.tabLabels[index];
      var targetPanel = this.tabContents[index];
      var targetID = targetPanel.getAttribute('id');
      // ラベル切替
      for (var i = 0, len = this.tabLabels.length; i < len; i++) {
        this.tabLabels[i].classList.remove(ACTIVE_CLASS);
        this.tabContents[i].classList.remove(ACTIVE_CLASS);
      }
      targetLabel.classList.add(ACTIVE_CLASS);
      // BGのスライド
      if (this.slideOrigin) {
        if (this.slided) {
          this.tabBG.classList.add(TRANSITION_CLASS);
        } else {
          this.tabBG.classList.remove(TRANSITION_CLASS);
        }
        var moveValue = 100 * index;
        this.tabContainer.classList.add(MOVE_CLASS);
        this.tabBG.style.transform = 'translateX(' + moveValue + '%)';
      }
      // パネル切替
      targetPanel.classList.add(ACTIVE_CLASS);
      if (this.slideOrigin) this.tabContainer.classList.remove(MOVE_CLASS);
      // パネル切り替え後にURLを書き換える
      var parm = '?=' + targetID;
      history.replaceState('', '', parm);
    };

    // 可視化する
    this.visualize = function() {
      this.tabContainer.classList.add(VISIBLE_CLASS);
      this.slided = true;
    };

    // パラメータを取得する
    this.getParams = function() {
      var id = location.search.replace(/\?=/g, '');
      if (id === '') return false;
      // タブの配列化
      var tabElements = [].slice.call(this.tabContents);
      var target = document.getElementById(id);
      if (target) {
        // ターゲットタブのindex取得
        var index = tabElements.indexOf(target);
        this.updateTab(index);
      }
    };

    this.getParams();
    this.visualize();

    for (var i = 0; i < this.tabLabels.length; i++) {
      this.tabLabels[i].addEventListener(
        'click',
        function(e) {
          var tabLabelsArray = [].slice.call(scope.tabLabels);
          var index = tabLabelsArray.indexOf(e.currentTarget);
          scope.updateTab(index);
        },
        false
      );
    }
  };

  var tabs = document.getElementsByClassName(MultiTabObj.tabName);
  for (var i = 0; i < tabs.length; i++) {
    var tab = new MultiTab(tabs[i], MultiTabObj);
  }
};

!(function() {})();
