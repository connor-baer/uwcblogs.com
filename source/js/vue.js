/**
 * Vue Instance
 */
new Vue( {
  el: '#app',
  delimiters: [ '[[', ']]' ],
  data: {
    search: '',
    blogs: [],
  },
  mounted() {
    var self = this;

    this.$http.get( '/api/blogs.json' ).then( response => {
      self.$data.blogs = response.body.data;
      const loading = document.getElementById( 'js-loading' );
      loading.parentNode.removeChild( loading );
    }, response => {
      alertify
        .closeLogOnClick( true )
        .error( 'Couldn’t fetch data. ' + response.statusText );
    } );
  },
  computed: {
    filteredBlogs() {
      var self = this;

      let filterData = this.blogs.filter( function ( blog ) {
        return blog.firstName.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.college.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.year.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.countries.toLowerCase().indexOf( self.search.toLowerCase() ) > -1 || blog.languages.toLowerCase().indexOf( self.search.toLowerCase() ) > -1;
      } );

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

      return _.chain( filterData )
        .groupBy( 'college' )
        .toPairs()
        .map( function ( pair ) {
          return _.zipObject( [ 'college', 'blogs' ], pair );
        } )
        .value().sort( sortColleges );
    }
  }
} );
