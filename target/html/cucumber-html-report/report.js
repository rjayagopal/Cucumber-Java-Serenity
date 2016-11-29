$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Raghul.Jayagopal@gmail.com"
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
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Login functionality for a social networking site (Scenario-1)",
  "description": "The user should be able to login into the social networking site if the username and the password are correct.",
  "id": "login-functionality-for-a-social-networking-site-(scenario-1)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Login functionality for a social networking site-1.1.",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-1);login-functionality-for-a-social-networking-site-1.1.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@LoginWithUI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "login should be \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-1);login-functionality-for-a-social-networking-site-1.1.;",
  "rows": [
    {
      "cells": [
        "URL",
        "userName",
        "passWord",
        "status"
      ],
      "line": 32,
      "id": "login-functionality-for-a-social-networking-site-(scenario-1);login-functionality-for-a-social-networking-site-1.1.;;1"
    },
    {
      "cells": [
        "https://www.facebook.com/",
        "Raghul.Jayagopal@gmail.com",
        "Face@226333",
        "Success"
      ],
      "line": 33,
      "id": "login-functionality-for-a-social-networking-site-(scenario-1);login-functionality-for-a-social-networking-site-1.1.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5082018145,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login functionality for a social networking site-1.1.",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-1);login-functionality-for-a-social-networking-site-1.1.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@login"
    },
    {
      "line": 24,
      "name": "@LoginWithUI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"https://www.facebook.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter username as \"Raghul.Jayagopal@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"Face@226333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "login should be \"Success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 15
    }
  ],
  "location": "Stepdefs.I_navigate_to(String)"
});
formatter.result({
  "duration": 7963058659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raghul.Jayagopal@gmail.com",
      "offset": 21
    }
  ],
  "location": "Stepdefs.I_enter_username_as(String)"
});
formatter.result({
  "duration": 360288789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Face@226333",
      "offset": 21
    }
  ],
  "location": "Stepdefs.I_enter_password_as(String)"
});
formatter.result({
  "duration": 218033248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "Stepdefs.login_should_be(String)"
});
formatter.result({
  "duration": 4929134912,
  "status": "passed"
});
formatter.after({
  "duration": 685792169,
  "status": "passed"
});
formatter.uri("Login2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Raghul.Jayagopal@gmail.com"
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
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Login functionality for a social networking site (Scenario-2)",
  "description": "The user should be able to login into the social networking site if the username and the password are correct.",
  "id": "login-functionality-for-a-social-networking-site-(scenario-2)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Login functionality for a social networking site-2.1.",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.1.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@LoginWithUI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "login should be \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.1.;",
  "rows": [
    {
      "cells": [
        "URL",
        "userName",
        "passWord",
        "status"
      ],
      "line": 32,
      "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.1.;;1"
    },
    {
      "cells": [
        "https://www.facebook.com/",
        "Raghul.Jayagopal@gmail.com",
        "Face@226333",
        "Success"
      ],
      "line": 33,
      "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.1.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4613850299,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login functionality for a social networking site-2.1.",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.1.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@login"
    },
    {
      "line": 24,
      "name": "@LoginWithUI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I navigate to \"https://www.facebook.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter username as \"Raghul.Jayagopal@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"Face@226333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "login should be \"Success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 15
    }
  ],
  "location": "Stepdefs.I_navigate_to(String)"
});
formatter.result({
  "duration": 7896729236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raghul.Jayagopal@gmail.com",
      "offset": 21
    }
  ],
  "location": "Stepdefs.I_enter_username_as(String)"
});
formatter.result({
  "duration": 351393895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Face@226333",
      "offset": 21
    }
  ],
  "location": "Stepdefs.I_enter_password_as(String)"
});
formatter.result({
  "duration": 140086979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "Stepdefs.login_should_be(String)"
});
formatter.result({
  "duration": 7292331958,
  "status": "passed"
});
formatter.after({
  "duration": 637865920,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Login functionality for a social networking site-2.2.",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.2.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@LoginWithUI"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I navigate to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter password as \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "login should be \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.2.;",
  "rows": [
    {
      "cells": [
        "URL",
        "userName",
        "passWord",
        "status"
      ],
      "line": 43,
      "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.2.;;1"
    },
    {
      "cells": [
        "https://www.facebook.com/",
        "Raghul.Jayagopal@gmail.com",
        "Face@226333",
        "Success"
      ],
      "line": 44,
      "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.2.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4941684863,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Login functionality for a social networking site-2.2.",
  "description": "",
  "id": "login-functionality-for-a-social-networking-site-(scenario-2);login-functionality-for-a-social-networking-site-2.2.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@login"
    },
    {
      "line": 35,
      "name": "@LoginWithUI"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I navigate to \"https://www.facebook.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I enter username as \"Raghul.Jayagopal@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter password as \"Face@226333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "login should be \"Success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 15
    }
  ],
  "location": "Stepdefs.I_navigate_to(String)"
});
formatter.result({
  "duration": 7593225671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raghul.Jayagopal@gmail.com",
      "offset": 21
    }
  ],
  "location": "Stepdefs.I_enter_username_as(String)"
});
formatter.result({
  "duration": 311867963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Face@226333",
      "offset": 21
    }
  ],
  "location": "Stepdefs.I_enter_password_as(String)"
});
formatter.result({
  "duration": 216348606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "Stepdefs.login_should_be(String)"
});
formatter.result({
  "duration": 6098076319,
  "status": "passed"
});
formatter.after({
  "duration": 1118938565,
  "status": "passed"
});
});