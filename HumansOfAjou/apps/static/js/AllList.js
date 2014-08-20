

var msnry = new Masonry( '#container', {
  // options
});

var $container = $('#container');
// initialize
$container.masonry({
  columnWidth: 200,
  itemSelector: '.item'
});

var msnry = $container.data('masonry');

var container = document.querySelector('#layout-demo .masonry');
var msnry = new Masonry( container, {
  columnWidth: 60
});

eventie.bind( container, 'click', function( event ) {
  // don't proceed if item was not clicked on
  if ( !classie.has( event.target, 'item' ) ) {
    return;
  }
  // change size of item via class
  classie.toggle( event.target, 'gigante' );
  // trigger layout
  msnry.layout();
});