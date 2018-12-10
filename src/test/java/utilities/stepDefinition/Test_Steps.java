package utilities.stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Test_Steps {
	
	public static WebDriver driver;
	
	
	@Given("^User is on Home Page$")
	public void User_is_on_Home_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:/Users/bhavik.p/Downloads/chromedriver_win32/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com");
		
	    
	}

	@When("^User Navigate to LogIn Page$")
	public void User_Navigate_to_LogIn_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a")).click();
	  
	}

	@When("^User enters \"(.*)\" and \"(.*)\"$")
	public void User_enters_UserName_and_Password(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='email']")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id='passwd']")).sendKeys(password);
		driver.findElement(By.xpath("//*[@id='SubmitLogin']/span/i")).click();
	   
	}

	@Then("^Message displayed Login Successfully$")
	public void Message_displayed_Login_Successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(driver.findElement(By.xpath("//*[@id='center_column']/p")).getText());
	   
	}

	@When("^User LogOut from the Application$")
	public void User_LogOut_from_the_Application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[2]/a")).click();
		
	   
	}

	@Then("^Message displayed LogOut Successfully$")
	public void Message_displayed_LogOut_Successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(driver.findElement(By.xpath("//*[@id='login_form']/h3")).getText());
		driver.close();
		driver.quit();
		
	}

}
