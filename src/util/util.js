export const formatDate = dataStr => {
  if (!dataStr || dataStr == '') {
		return '';
	}
	var dateObj = new Date(dataStr);
	
	var year = dateObj.getFullYear();
	var month = (dateObj.getMonth() + 1);
	var date = dateObj.getDate();
	
	month = (month < 10) ? ('0' + month) : month;
	date = (date < 10) ? ('0' + date) : date;
	
	return year + '-' + month + '-' + date;
}