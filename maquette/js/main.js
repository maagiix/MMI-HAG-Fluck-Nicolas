var selector, elems, makeActive;
selector='.menu li';
elems=document.querySelectorAll(selector);
makeActive=function (){
	for (var i=0; i < elems.length; i++)
	 elems[i].classList.remove('active');
	this.classList.add('active');
	};

	for (var i=0; i < elems.length; i++)
	 elems[i].addEventListener('mousedown', makeActive);

    
    
