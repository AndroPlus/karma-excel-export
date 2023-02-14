# karma-excel-reporter

Reporter that export data from jasmine into excel

## Installation

The easiest way is to keep `karma-excel-export-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-excel-export-reporter": "~0.1"
  }
}
```

You can simply do it by:
```bash
npm install karma-karma-exce;-reporter --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'html'],

    // the default configuration
    excelExport: {
      outputDir: 'karma_excel_export', // where to put the reports 
      reportName: 'report-summary-filename', // report summary filename; browser info by default
    },
  });
};
```