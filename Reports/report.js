$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "title-of-your-feature;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12980559394,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1977592063,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 1725525065,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 71448471,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Successful LogOut",
  "description": "",
  "id": "title-of-your-feature;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 1707173262,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 2245197126,
  "status": "passed"
});
});