// HEADROOM //

// Grab an element.
var hrBody = document.body;

// Construct an instance of Headroom, passing the element.
var headroom  = new Headroom( hrBody, {

    // Vertical offset in px before element is first unpinned.
    offset: 64,

    // Scroll tolerance in px before state changes for up/down scroll.
    tolerance: {
        up: 10,
        down: 5
    }
});

// Initialise.
headroom.init();

// SMOOTHSCROLL //

smoothScroll.init({

	// Easing pattern to use.
	easing: 'easeInOutCubic',

	// How far to offset the scrolling anchor location in pixels.
	offset: 70
});

// LISTJS //

var searchOptions = {
  valueNames: [
    'name',
    'country',
    'language',
    { data: [ 'year' ] }
    ]
};

var lists = document.getElementsByClassName( 'js-list' );
var colleges = document.getElementsByClassName( 'list' );
var data = [];
for ( var i = 0; i < lists.length; ++i ) {
    var listId = lists[i].id;
    data[i] = new List( listId, searchOptions );
}

var searchInput = document.getElementById( 'js-search' );

function searchAll() {
    var searchValue = searchInput.value;
    for ( var i = 0; i < lists.length; ++i ) {
        data[i].search( searchValue );
    }
    for ( var j = 0; j < colleges.length; ++j ) {
        if ( colleges[j].hasChildNodes() ) {
            colleges[j].parentNode.style.display = 'block';
        } else {
            colleges[j].parentNode.style.display = 'none';
        }
    }
}

searchInput.addEventListener( 'keyup', searchAll );
