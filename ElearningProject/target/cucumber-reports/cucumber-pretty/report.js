$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("excel.feature");
formatter.feature({
  "line": 2,
  "name": "To automate the Registration \u0026 To verify application allows teacher to add new course",
  "description": "I want to use this template for my feature file",
  "id": "to-automate-the-registration-\u0026-to-verify-application-allows-teacher-to-add-new-course",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@second"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "To verify whether application allows teacher to add new course",
  "description": "",
  "id": "to-automate-the-registration-\u0026-to-verify-application-allows-teacher-to-add-new-course;to-verify-whether-application-allows-teacher-to-add-new-course",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@testcase2"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I have launch the learning application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I have entered the teacher login \"teacher001\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I have entered the teacher password \"teacher001\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I have click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I have click on create a course",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I have enter the course name",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I have click on advanced setting",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I have entered category list",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I have entered the course code",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I have entered the language",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I have click on create a course button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I have click on add add a introduction icon",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I have entered the valid credential",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I have click save intro text",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I have verified message",
  "keyword": "Then "
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_launch_the_learning_application()"
});
formatter.result({
  "duration": 12492230201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teacher001",
      "offset": 34
    }
  ],
  "location": "Excel_stepdefinations.i_have_entered_the_teacher_login(String)"
});
formatter.result({
  "duration": 226448900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teacher001",
      "offset": 37
    }
  ],
  "location": "Excel_stepdefinations.i_have_entered_the_teacher_password(String)"
});
formatter.result({
  "duration": 170088000,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_click_submit_button()"
});
formatter.result({
  "duration": 4011850800,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_click_on_create_a_course()"
});
formatter.result({
  "duration": 922441700,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_enter_the_course_name()"
});
formatter.result({
  "duration": 1028889499,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_click_on_advanced_setting()"
});
formatter.result({
  "duration": 97219000,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_entered_category_list()"
});
formatter.result({
  "duration": 340768399,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_entered_the_course_code()"
});
formatter.result({
  "duration": 135465400,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_entered_the_language()"
});
formatter.result({
  "duration": 375065600,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_click_on_create_a_course_button()"
});
formatter.result({
  "duration": 3462398300,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_click_on_add_add_a_introduction_icon()"
});
formatter.result({
  "duration": 1702832201,
  "status": "passed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_entered_the_valid_credential()"
});
formatter.result({
  "duration": 40459300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//iframe[@class\u003d\u0027cke_wysiwyg_frame cke_reset\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.89)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-Q86PNQG\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\YOGITA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57965}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 84.0.4147.89, webStorageEnabled: true}\nSession ID: f44ea397b3e230b736caf2bf2d259d56\n*** Element info: {Using\u003dxpath, value\u003d//iframe[@class\u003d\u0027cke_wysiwyg_frame cke_reset\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinations.Excel_stepdefinations.i_have_entered_the_valid_credential(Excel_stepdefinations.java:171)\r\n\tat ✽.And I have entered the valid credential(excel.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_click_save_intro_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Excel_stepdefinations.i_have_verified_message()"
});
formatter.result({
  "status": "skipped"
});
});