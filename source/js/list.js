/**
 * Search all blogs
 */
function searchAll( searchInput ) {

  // Get search value.
  let searchValue = searchInput.value;

  // Search all lists.
  for ( var i = 0; i < lists.length; ++i ) {
    data[ i ].search( searchValue );
  }

  // Hide all year numbers without blogs.
  for ( var j = 0; j < years.length; ++j ) {
    if ( years[ j ].hasChildNodes() ) {
      years[ j ].parentNode.style.display = 'block';
    } else {
      years[ j ].parentNode.style.display = 'none';
    }
  }

  // Hide all college names with all years hidden.
  for ( var k = 0; k < colleges.length; ++k ) {
    let yearsInCollege = colleges[ k ].getElementsByClassName( 'js-list' );
    let empty = 0;

    for ( var m = 0; m < yearsInCollege.length; ++m ) {
      if ( yearsInCollege[ m ].style.display === 'none' ) {
        empty++;
      }
    }

    if ( empty === yearsInCollege.length ) {
      colleges[ k ].style.display = 'none';
    } else {
      colleges[ k ].style.display = 'block';
    }
  }
}
