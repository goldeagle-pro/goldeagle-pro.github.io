function myFunction() {
	const sheet = SpreadsheetApp.getActiveSheet();
	const range = sheet.getRange('A3:C3');
	console.log(range.getValues());
}
