# cypress-browserstack

Run your Cypress tests
A quickstart guide to running your Cypress tests across 30+ desktop browsers.

Quickstart 
Running your first Cypress test suite on BrowserStack is super easy - just install our CLI, configure the test run settings and start testing. Here’s a quick start guide to help you get started.

Step 1: Install the CLI
First, install the BrowserStack - Cypress CLI via npm:

Command Line
# Install the BrowserStack Cypress CLI
npm install -g browserstack-cypress-cli

Step 2: Configure
Next, set up your BrowserStack credentials and configure the browsers that you want to run your tests on. Use the init command to generate a sample browserstack.json file, or alternatively create one from scratch.

Command Line
# Create a sample configuration file for configurations and capabilities
browserstack-cypress init

Fill in the following details in the browserstack.json file:

 auth - specify your username and access key. Learn about different auth options.
 browsers - change the list of browsers and OS if you want to. Learn more supported browsers and OS.
 run_settings - specify the cypress_config_file, parallels, npm_dependencies and any other options that you want to change.
After you are done with the above changes, you should have something like this:

browserstack.json
{
  "auth": {
    "username": "XXXX",
    "access_key": "XXXX"
  },
  "browsers": [{
      "browser": "chrome",
      "os": "Windows 10",
      "versions": ["latest", "latest - 1"]
    },
    {
      "browser": "firefox",
      "os": "OS X Mojave",
      "versions": ["latest", "latest - 1"]
    },
    {
      "browser": "edge",
      "os": "OS X Catalina",
      "versions": ["latest"]
    }
  ],
  "run_settings": {
    "cypress_config_file": "./cypress.json",
    "cypress_version": "7",
    "project_name": "My sandbox project",
    "build_name": "Build no. 1",
    "parallels": "5"
  }
}

Refer to the configuration options to learn more about all the options (in the navigation pane on the left) you can use in browserstack.json and the possible values that you can mention.

Step 3: Run your tests
After you specify the required run settings, you can run your tests on BrowserStack:

Command Line
browserstack-cypress run --sync
