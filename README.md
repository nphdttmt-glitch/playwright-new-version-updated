## Generate a single result file to Allure Report
allure generate --single-file allure-results\report-07-20-23-27-47 --clean 
allure open index.html

## Report
Generate Allure report
npm run report:generate

Open Allure report
npm run report:open

Remove old result (allure-results + allure-report)
npm run report:clean

## Run test
Run all test
npm run test

Run login.test.ts
npm run test:login
 
# Chrome 
Run test with Chrome (ENV=qa) - default
npm run test:chrome

Run test with Chrome(ENV=dev)
npm run test:dev-chrome

# Firefox
Run test with Firefox (ENV=qa) - default
npm run test:firefox

Run test with Firefox (ENV=dev)
npm run test:dev-firefox

# Webkit
Run test with Webkit (ENV=qa) - default
npm run test:webkit

Run test with Webkit (ENV=dev)
npm run test:dev-webkit