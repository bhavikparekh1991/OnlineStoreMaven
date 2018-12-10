Feature: Test Cucumber Feature File
  I want to use this template for my feature file

  	@tag1
  	Scenario Outline: Successful Login with Valid Credentials
		Given User is on Home Page
		When User Navigate to LogIn Page
		And User enters "<userName>" and "<password>"
		Then Message displayed Login Successfully
		When User LogOut from the Application
		Then Message displayed LogOut Successfully
		
  		Examples:
   	 	| userName   | password |
    	| QATest@Test.com | Qwer@123 |
    

	@tag2
	Scenario: Successful LogOut
		Given User is on Home Page
		When User Navigate to LogIn Page
		And User enters "QATest@Test.com" and "Qwer@123"
		Then Message displayed Login Successfully
		When User LogOut from the Application
		Then Message displayed LogOut Successfully
		
