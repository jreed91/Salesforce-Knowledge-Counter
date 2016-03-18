elements = document.getElementsByClassName('TypeRICH_TEXT_AREA_editable');

var characterCount = 0;
var textareas = [];
var text_max = 131072;



for (var i = elements.length - 1; i >= 0; i--) {
	var element = {
		"element": elements[i].getElementsByTagName('textarea')[0].id,
		"characters": elements[i].getElementsByTagName('textarea')[0].value.length,
		"charactersRemaining": (text_max - elements[i].getElementsByTagName('textarea')[0].value.length)
	}
	textareas.push(element);
};


for (var i = textareas.length - 1; i >= 0; i--) {
	var element = textareas[i].element;
	var div = document.createElement("div");
	div.innerText = "Characters Remaining: " + textareas[i].charactersRemaining;
	var node = document.getElementById(element).parentNode;
	node.appendChild(div);
};




