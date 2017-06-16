
function updateContentFn(){
	console.log("updated content from jquery");
}


var moduleB = {
	updateContent : updateContentFn
}


module.exports = moduleB;