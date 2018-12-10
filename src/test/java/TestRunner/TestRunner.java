package TestRunner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Feature/LogIn_Test.feature"
		,glue={"utilities"}
		,tags={"@tag1,@tag2"}
		,dryRun = false
		,monochrome = true
		,plugin = {"com.cucumber.listener.ExtentCucumberFormatter:C:/Users/bhavik.p.IDC/workspace/OnlineStoreWaven/Reports/Report.html"}
		)
public class TestRunner {
	 @AfterClass
	    public static void setup() {
	        Reporter.loadXMLConfig(new File("Feature/extent-config.xml"));
	        Reporter.setSystemInfo("user", System.getProperty("user.name"));
	        Reporter.setTestRunnerOutput("Sample test runner output message");
	    }
}
