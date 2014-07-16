(function(){
  'use strict';

  searchengineApp.factory('$socket', function ($rootScope) {
    var socket = io();
    return {
      on: function (eventName, callback) {
        socket.on(eventName, function () {  
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
      }
    };
  });

  searchengineApp.factory('$typeahead', function ($socket) {
    var source = new Bloodhound({
      name: 'searchbar-typeahead',
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('word'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 10,
      remote: {
        url: '%QUERY',
        transport: function(url, o, onSuccess, onError) {
          var word = /(\b[^\s]+\b)$/.exec(decodeURIComponent(url))[1] || word;
          
          if(word.length < 3){
            return;
          }

          $socket.emit('words', {
            word: word
          }, function(words){
            onSuccess(words);
          });
        }
      }
    });

    return {
      DOMobject: '',

      initializeSource: function(){
        var promise = source.initialize();

        promise.done(function() { console.log('typeahead initialized'); })
               .fail(function() { console.log('typeahead initializing failed'); });

        return this;
      },

      typeahead: function(DOMobject, options, datasets) {
        this.DOMobject = DOMobject || '';

        options = options || {};
        datasets = datasets || {};

        datasets.source = source.ttAdapter();

        $(this.DOMobject).typeahead(options, datasets);
      },

      destroy: function() {
        $(this.DOMobject).typeahead('destroy');
      },

      open: function(){
        $(this.DOMobject).typeahead('open');
      },

      close: function(){
        $(this.DOMobject).typeahead('close');
      }
    };
  });
})();
