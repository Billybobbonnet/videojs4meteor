Package.describe({
  name: 'billybobbonnet:videojs4meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Integrates videojs in meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'video-js/video.js',
    'video-js/video.novtt.js',
   	'video-js/video-js.css',
   	'video-js/video-js.min.css',

   	 'video-js/video-js.swf',

     'video-js/font/vjs.eot',
     'video-js/font/vjs.svg',
     'video-js/font/vjs.ttf',
     'video-js/font/vjs.woff',

     'video-js/lang/ar.js',
     'video-js/lang/bg.js',
     'video-js/lang/ca.js',
     'video-js/lang/cs.js',
     'video-js/lang/de.js',
     'video-js/lang/es.js',
     'video-js/lang/fr.js',
     'video-js/lang/hu.js',
     'video-js/lang/it.js',
     'video-js/lang/ja.js',
     'video-js/lang/ko.js',
     'video-js/lang/nl.js',
     'video-js/lang/pt-BR.js',
     'video-js/lang/ru.js',
     'video-js/lang/tr.js',
     'video-js/lang/uk.js',
     'video-js/lang/vi.js',
     'video-js/lang/zh-CN.js',
     'video-js/lang/zh-TW.js'
  ],'client',{isAsset: true});

api.addFiles([

  'billybobbonnet:videojs4meteor.js'
],'client');
});
Package.onTest(function(api) {

});
