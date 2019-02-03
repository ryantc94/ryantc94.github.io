

var timeElements = Array.from(document.getElementsByClassName('sc-bFADNz cmXRzz sc-fcdeBU gQwGlg'))
	.filter(function(element) {
		if(!element.childElementCount && element.textContent.indexOf('preorder') !== -1 && element.textContent.indexOf('pickup') !== -1)
			return element
	})
	.sort(function(first, second) {
		var firstNumber = parseInt(first.textContent.split(' ')[0])
		var secondNumber = parseInt(second.textContent.split(' ')[0])
		return firstNumber - secondNumber
	})
