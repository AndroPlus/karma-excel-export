var ExcelExportReporter = function(baseReporterDecorator, config, emitter, logger, helper, formatError) {
    baseReporterDecorator(this);

	this.onRunStart = function() {
		allMessages = [];
	};

	this.onBrowserStart = function (browser){
    }

    this.onBrowserComplete = function(browser) {
    }

    this.onRunComplete = function(browser) {
    }

    this.specSuccess = this.specSkipped = this.specFailure = function(browser, result) {
    }
}

ExcelExportReporter.$inject = ['baseReporterDecorator', 'config', 'emitter', 'logger', 'helper', 'formatError'];

// PUBLISH DI MODULE
module.exports = {
	'reporter:excelExport' : ['type', ExcelExportReporter]
};