
const ExcelJs = require('exceljs');
const path = require('path');

var ExcelExportReporter = function(baseReporterDecorator, config, emitter, logger, helper, formatError) {
    baseReporterDecorator(this);

	this.onRunStart = function() {
		allMessages = [];
	};

	this.onBrowserStart = function (browser) {
    }

    this.onBrowserComplete = function(browser, result) {
        if(result && result.type && result.type === 'excel') {
            const outputPath = generateOutputpath(config.basePath, config.excelExport.outputDir);
            helper.mkdirIfNotExists(outputPath, function(){
                const workbook = new ExcelJs.Workbook();
                createSheetOnExcel(result.excelData, workbook, 'ExcelData');
                workbook.xlsx
                .writeFile(config.excelExport.reportName)
                .then(() => {
                    console.log('file created');
                })
                .catch(err => {
                    console.log(err.message);
                });
            });
        }
    }

    this.onRunComplete = function(browser) {
    }

    this.specSuccess = this.specSkipped = this.specFailure = function(browser, result) {
    }

    function createSheetOnExcel(data, workbook, sheetName) {
        const header = Object.keys(data[0]);
        const worksheet = workbook.addWorksheet(sheetName)
        const headerRow = worksheet.addRow(header)
        headerRow.eachCell(cell=> {
            cell.font= {name: 'Saysettha OT', bold: true}
        })
        data.forEach(d=> {
            const row = worksheet.addRow(Object.values(d));
            row.font= {name: 'Saysettha OT', bold: true}
        })
    }

    function generateOutputpath(basepath, dir = 'excelReport') {
        let outputPath = path.join(dir)
        outputPath = path.resolve(basepath, outputPath)
        return helper.normalizeWinPath(outputPath)

    }
}

ExcelExportReporter.$inject = ['baseReporterDecorator', 'config', 'emitter', 'logger', 'helper', 'formatError'];

// PUBLISH DI MODULE
module.exports = {
	'reporter:excelExport' : ['type', ExcelExportReporter]
};