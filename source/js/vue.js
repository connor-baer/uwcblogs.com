/**
 * Vue Instance
 *
 * Vue loads, renders and filters the blogs.
 */
new Vue( {
  el: '#app',
  delimiters: [ '[[', ']]' ],
  data: {
    // Get search value from URL hash
    search: ( window.location.hash ? window.location.hash.substring( 1 ) : '' ),
    blogs: [],
  },
  mounted() {
    var self = this;

    /**
     * Fetch the blogs
     *
     * @param  {url} url  URL to fetch
     * @param  {function} callback  Callback function
     */
    function getData( url, callback ) {

      Vue.http.get( url ).then( response => {
        // Push the paginated json packets onto the data object
        self.$data.blogs = response.body.data.reduce( function ( coll, item ) {
          coll.push( item );
          return coll;
        }, self.$data.blogs );

        // Get the page URL to fetch
        let nextUrl = response.body.meta.pagination.links.next;

        if ( nextUrl ) {
          getData( nextUrl, callback );
        } else {
          callback();
        }
      }, response => {
        alertify
          .closeLogOnClick( true )
          .error( 'Couldn’t fetch data. ' + response.statusText );
      } );
    }

    // Set API URL according to the page path
    const path = ( window.location.pathname !== '/' ? window.location.pathname : '' );
    let url = '/api/blogs' + path + '.json';

    getData( url, function () {
      console.log( 'All blogs loaded.' );
    } );
  },
  computed: {
    /**
     * Filter and sort the data
     *
     * @return  {object} filteredBlogs  The filtered and sorted data
     */
    filteredBlogs() {
      var self = this;

      // Use search input to filter the data across all properties
      let filterData = this.blogs.filter( function ( blog ) {
        return blog.firstName.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.college.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.year.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.countries.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.languages.toLowerCase().indexOf( self.search.toLowerCase() ) > -1;
      } );

      // Sort the colleges alphabetically
      function sortColleges( a, b ) {
        const criterionA = a.college.toUpperCase();
        const criterionB = b.college.toUpperCase();

        let comparison = 0;

        if ( criterionA > criterionB ) {
          comparison = 1;
        } else if ( criterionA < criterionB ) {
          comparison = -1;
        }
        return comparison;
      }

      // Group the blogs by college
      return _.chain( filterData )
        .groupBy( 'college' )
        .toPairs()
        .map( function ( pair ) {
          return _.zipObject( [ 'college', 'blogs' ], pair );
        } )
        .value().sort( sortColleges );
    }
  },
  watch: {
    /**
     * Save search string to hash
     *
     * @param  {string} value  The search input value
     */
    search: function ( value ) {
      var hash = encodeURIComponent( value );

      if ( hash !== '' ) {
        // Set the hash to the search input value
        window.location.hash = hash;
      } else {
        // Remove trailing # to prevent scrolling
        history.replaceState( '', document.title, window.location.pathname + window.location.search );
      }
    }
  },
  methods: {
    /**
     * Slugify string
     *
     * @param  {string} string  String to be slugified
     */
    slugify: function ( string ) {
      return string
        .toString()
        .trim()
        .toLowerCase()
        .replace( /\s+/g, '-' )
        .replace( /[^\w\-]+/g, '' )
        .replace( /\-\-+/g, '-' )
        .replace( /^-+/, '' )
        .replace( /-+$/, '' );
    }
  }
} );
