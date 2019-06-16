module.exports = {
    "extends": "eslint:recommended",

    "parserOptions": {						//es6
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },

    "env": {								//require
        "amd": true,
    },

    "globals": {							//global variables
    	"cc": true,
        "module": true,
        "sdkbox": true,
        "window": true,
        "XMLHttpRequest": true
    },

    "rules": {
        "no-mixed-spaces-and-tabs": 0,		//ignore errors
    },
};
