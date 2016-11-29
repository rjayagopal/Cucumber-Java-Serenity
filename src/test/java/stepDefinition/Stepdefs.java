package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	WebDriver driver = null;
	
	@Before
	public void setUp() {
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Given("^I navigate to \"([^\"]*)\"$")
	public void I_navigate_to(String url) throws Throwable {
		driver.navigate().to(url);
	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void I_enter_username_as(String userName) {
		driver.findElement(By.id("email")).sendKeys(userName);
	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void I_enter_password_as(String passWord) {
		driver.findElement(By.id("pass")).sendKeys(passWord);
	}

	@Then("^login should be \"([^\"]*)\"$")
	public void login_should_be(String status) {
		driver.findElement(By.id("loginbutton")).click();
		WebElement isPresent = driver.findElement(By
				.xpath("//div/a[.='Raghul Sriramaneni']"));
		if (status.equalsIgnoreCase("Success") & isPresent.isDisplayed()) {
			System.out.println("Test Pass");
		} else if (status.equalsIgnoreCase("Fail") & !isPresent.isDisplayed()) {
			System.out.println("Test Pass");
		} else {
			System.out.println("Test Failed");
		}

	}

	@After
	public void cleanUp() {
		driver.quit();
	}
}
