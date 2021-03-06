package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Elearning.Selenium.Selenium;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Excel_stepdefinitions {

	static WebDriver driver;
	String url = "http://elearningm1.upskills.in/";

	@Given("^I launch application$")
	public void i_launch_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\AbhishekMishra\\Desktop\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
	}

	@Then("^I entered username \"([^\"]*)\"$")
	public void i_entered_username(String username) throws Throwable {
		driver.findElement(By.xpath("//*[@placeholder=\"Username\"]")).sendKeys(username);

	}

	@Then("^I entered password \"([^\"]*)\"$")
	public void i_entered_password(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);

	}

	@Then("^I click submit button$")
	public void i_click_submit_button() throws Throwable {
		driver.findElement(By.cssSelector("button[name=submitAuth]")).click();
	}

	@When("^I click add user link$")
	public void i_click_add_user_link() throws Throwable {
		driver.findElement(By.partialLinkText("Add")).click();
	}

	@Then("^I enter first name$")
	public void i_enter_first_name() throws Throwable {
		driver.findElement(By.id("firstname")).sendKeys(Selenium.getDataFromExcel(1, 0));
	}

	@Then("^I entered last name$")
	public void i_entered_last_name() throws Throwable {
		driver.findElement(By.name("lastname")).sendKeys(Selenium.getDataFromExcel(1, 1));
	}

	@Then("^I entered email id$")
	public void i_entered_email_id() throws Throwable {
		driver.findElement(By.name("email")).sendKeys(Selenium.getDataFromExcel(1, 2));
	}

	@Then("^I entered phone number$")
	public void i_entered_phone_number() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"phone\"]")).sendKeys(Selenium.getDataFromExcel(1, 3));
	}

	@Then("^I entered the Login credential textbox$")
	public void i_entered_the_Login_credential_textbox() throws Throwable {
		driver.findElement(By.cssSelector("input[name=username]")).sendKeys(Selenium.getDataFromExcel(1, 4));
	}

	@Then("^I select password radio button$")
	public void i_select_password_radio_button() throws Throwable {
		driver.findElement(By.xpath("(//*[@type=\"radio\"])[1]")).click();
	}

	@Then("^I entered password for user$")
	public void i_entered_password_for_user() throws Throwable {
		driver.findElement(By.xpath("//*[@name=\"password[password]\"]")).sendKeys(Selenium.getDataFromExcel(1, 5));
	}

	@Then("^I  select profile trainer$")
	public void i_select_profile_trainer() throws Throwable {
		driver.findElement(By.xpath("(//*[@class=\"filter-option\"])[1]")).click();
		driver.findElement(By.xpath("(//input[@class='form-control'])[8]")).sendKeys(Selenium.getDataFromExcel(1, 6));
	}

	@When("^I click add button$")
	public void i_click_add_button() throws Throwable {
		driver.findElement(By.xpath("//*[@name=\"submit\"]")).click();
	}

	@Then("^Verify the message$")
	public void verify_the_message() throws Throwable {
		driver.findElement(By.xpath("//*[contains(text(),'The user has been added: ')] ")).isDisplayed();
	}

	@Then("^Delete user$")
	public void delete_user() throws Throwable {
		driver.findElement(By.xpath("//*[@name='keyword']")).sendKeys(Selenium.getDataFromExcel(1, 7));
		driver.findElement(By.xpath("(//*[@name='submit'])[1]")).click();
		driver.findElement(By.xpath("//*[@alt='Delete']")).click();
		driver.switchTo().alert().accept();
	}

	@Given("^I have launch the learning application$")
	public void i_have_launch_the_learning_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\AbhishekMishra\\Desktop\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
	}

	@Then("^I have entered the teacher login \"([^\"]*)\"$")
	public void i_have_entered_the_teacher_login(String username) throws Throwable {
		driver.findElement(By.xpath("//*[@placeholder=\"Username\"]")).sendKeys(username);
	}

	@Then("^I have entered the teacher password \"([^\"]*)\"$")
	public void i_have_entered_the_teacher_password(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@Then("^I have click submit button$")
	public void i_have_click_submit_button() throws Throwable {
		driver.findElement(By.cssSelector("button[name=submitAuth]")).click();
	}

	@When("^I have click on create a course$")
	public void i_have_click_on_create_a_course() throws Throwable {
		driver.findElement(By.xpath("//*[@href='main/create_course/add_course.php']")).click();
	}

	@Then("^I have enter the course name$")
	public void i_have_enter_the_course_name() throws Throwable {
		driver.findElement(By.id("title")).sendKeys(Selenium.getDataFromExcel(2, 0));
	}

	@Then("^I have click on advanced setting$")
	public void i_have_click_on_advanced_setting() throws Throwable {
		driver.findElement(By.id("advanced_params")).click();
	}

	@Then("^I have entered category list$")
	public void i_have_entered_category_list() throws Throwable {
		driver.findElement(By.xpath("(//*[@class=\"filter-option\"])[1]")).click();
		driver.findElement(By.xpath("(//input[@class='form-control'])[2]")).sendKeys(Selenium.getDataFromExcel(2, 1));
	}

	@Then("^I have entered the course code$")
	public void i_have_entered_the_course_code() throws Throwable {
		driver.findElement(By.id("add_course_wanted_code")).sendKeys(Selenium.getDataFromExcel(2, 2));
	}

	@Then("^I have entered the language$")
	public void i_have_entered_the_language() throws Throwable {
		driver.findElement(By.xpath("(//*[@class=\"filter-option\"])[2]")).click();
		driver.findElement(By.xpath("(//input[@class='form-control'])[4]")).sendKeys(Selenium.getDataFromExcel(2, 3));
	}

	@Then("^I have click on create a course button$")
	public void i_have_click_on_create_a_course_button() throws Throwable {
		driver.findElement(By.id("add_course_submit")).click();
	}

	@Then("^I have click on add add a introduction icon$")
	public void i_have_click_on_add_add_a_introduction_icon() throws Throwable {
		driver.findElement(By.xpath("(//*[@class=\"fa fa-file-text\"])[2]")).click();
	}

	@Then("^I have entered the valid credential$")
	public void i_have_entered_the_valid_credential() throws Throwable {
		driver.switchTo().frame(driver.findElement(By.xpath("//iframe[@class='cke_wysiwyg_frame cke_reset']")));

		driver.switchTo().defaultContent();
		driver.findElement(
				By.xpath("//*[@class=\"cke_editable cke_editable_themed cke_contents_ltr cke_show_borders\"]")).click();

		driver.findElement(
				By.xpath("//*[@class=\"cke_editable cke_editable_themed cke_contents_ltr cke_show_borders\"]"))
				.sendKeys("This is new course");

	}

	@Then("^I have click save intro text$")
	public void i_have_click_save_intro_text() throws Throwable {
		driver.findElement(By.id("introduction_text_intro_cmdUpdate")).click();
	}

	@Then("^I have verified message$")
	public void i_have_verified_message() throws Throwable {
		driver.findElement(By.xpath("//*[contains(text(),'Intro was updated')] ")).isDisplayed();
	}

}