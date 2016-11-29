package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
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
public class SerenityRunCukes {

}
