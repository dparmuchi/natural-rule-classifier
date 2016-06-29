# natural-rule-classifier

# API Reference:
The application uses [The Natural Language Classifier API](https://watson-api-explorer.mybluemix.net/apis/natural-language-classifier-v1)

## Getting Started

This instructions will help you install the celebrities app in your local environment.

1. Clone the repository with:

    ```sh
    $ git clone https://github.com/francodimasi/natural-rule-classifier.git
    ```

1. Install [node][node] (use v4.3.0)

1. Install the npm modules:

    ```sh
    $ npm install
    ```
    **Note:** Make sure you are in the project directory, the `package.json` file should be visible.

1. You need some credentials to use NLC:
  * Get credentials to use NLC credentials, instructions [here][pi_cred].  
  
1. Update NLC's credentials in `config/config.js`

    ```js
        module.exports = {
          
          // NLC credentials
          natural_language_classifier: {
            url: '<url>',
            username: '<username>',
            password: '<password>',
            version: 'v1'
          }
        
        };
    ```

1. Start the app

    ```sh
    $ npm start
    ```

## License

  This sample code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

## Contributing

  See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM
  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

[bluemix]: https://console.ng.bluemix.net/
[node]: http://nodejs.org/download
[pi_cred]: https://github.com/watson-developer-cloud/um-ruby/blob/master/README.md
[vcap_environment]: https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/#VcapEnvVar
