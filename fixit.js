(function( $ ){

	var notEnabledMsg = "Fixit.js has not been given permission to fix this page. Stop being a coward, and allow access.";
	var fixedMsg = "This page has been fixed. You're welcome.";

	var methods = {	

		fixit: function(){

			if(options.doFix){
				
				$('html').html(fixedMsg);
			} else {
				if(window.console){

				    console.warn(notEnabledMsg);

				} else {

					alert(notEnabledMsg);
				}
			}
		}

	}; // end methods


	// the plugin function
	$.fixit = function( userOptions ) {

		/*
			Offer only a single option - which the user
			must manually set  to true so that he is fully
			aware that all issues are to be resolved in a timely manner.
		 */
		options = $.extend({
			doFix: false 

		}, userOptions);

		// assigning this to plugin's global scope.
		// This just tends to make my life easier
		_this = this;

		// fix your broken crap
		methods.fixit();

		// return this for chaining, which is admittedly silly,
		// since after everything is "fixed", chaining becomes obsolete
		return this
	};

})( jQuery );