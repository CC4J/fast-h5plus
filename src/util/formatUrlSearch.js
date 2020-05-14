export default() => {
	var result = {},
		hash = location.hash,
		search = location.search;
	result.docName = decodeURIComponent(location.pathname).match(/\/([^\/]+)\.html$/)[1]; //提取文件名
	if(hash) {
		result.hash = hash.replace(/^\#/, ''); //提取锚点
	}
	if(search) {
		var arr = search.replace(/^\?/, '').split(/\&/g); //提取所有search参数
		for(var i = 0, n = arr.length; i < n; i++) {
			var key = arr[i].split(/\=/)[0];
			result[key] = decodeURIComponent(arr[i].split(/\=/)[1]);
		}
	}
	return result;
}