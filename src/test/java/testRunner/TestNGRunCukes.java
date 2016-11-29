package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.api.testng.CucumberFeatureWrapper;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

@CucumberOptions(
		strict = false, 
		monochrome = true, 
		features = "src/test/resources/feature", 
		glue = "stepDefinition",
		snippets = SnippetType.CAMELCASE, 
		plugin = {
		"html:target/html/cucumber-html-report",
		"json:target/json/cucumber.json",
		"pretty:target/pretty/cucumber-pretty.txt",
		"usage:target/usage/cucumber-usage.json",
		"junit:target/junit/cucumber-results.xml",
		"rerun:target/rerun/rerun.txt" }, 
		tags = { "~@Ignore" })

public class TestNGRunCukes {
    private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }
}
