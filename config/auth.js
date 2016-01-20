// expose our config directly to our application using module.exports
module.exports = {
	
	'facebookAuth' : {
		'clientID' : '540348416146442', // App ID
		'clientSecret' : 'c167b15752c9732d23717e6860e717e0', // App Secret
		'callbackURL' : 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};