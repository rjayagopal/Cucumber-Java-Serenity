package testRunner;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;

@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(
		jsonReport = "target/json/cucumber.json", 
		jsonUsageReport = "target/usage/cucumber-usage.json",
		detailedAggregatedReport = true, 
	    detailedReport = true, 
	    overviewReport = true, 
	    usageReport = true,		
	    featureOverviewChart = true,
		overviewChartsReport = true,
	    pdfPageSize = "auto",
		toPDF = true, 
		outputFolder = "target/custom-reports/mkolisnyk/cucumber-html-reports",
		retryCount = 3)
@CucumberOptions(strict = false, 
		monochrome = true, 
		features = "src/test/resources/feature", 
		glue = "stepDefinition", 
		snippets = SnippetType.CAMELCASE, 
		tags = { "~@Ignore" },
		plugin = {
		"html:target/html/cucumber-html-report",
		"json:target/json/cucumber.json",
		"pretty:target/pretty/cucumber-pretty.txt",
		"usage:target/usage/cucumber-usage.json",
		"junit:target/junit/cucumber-results.xml",
		"rerun:target/rerun/rerun.txt" })
public class CustomRunCukes {

}
