#Author: Raghul.Jayagopal@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
@login
Feature: Login functionality for a social networking site (Scenario-1)
The user should be able to login into the social networking site if the username and the password are correct.

@LoginWithUI
Scenario Outline: Login functionality for a social networking site-1.1.
Given I navigate to "<URL>"
When I enter username as "<userName>"
And I enter password as "<passWord>"
Then login should be "<status>"

Examples:
 | URL  										  |	userName 										 | passWord 		| status  |
 | https://www.facebook.com/  | Raghul.Jayagopal@gmail.com   | Face@226333 	| Success |
 
@Ignore
Scenario Outline: Login functionality for a social networking site-1.2.
Given I navigate to "<URL>"
When I enter username as "<userName>"
And I enter password as "<passWord>"
Then login should be "<status>"

Examples:
 | URL  										  |	userName 										 | passWord 		| status  |
 | https://www.facebook.com/  | Raghul.Jayagopal@gmail.com   | Face@226333 	| Success |