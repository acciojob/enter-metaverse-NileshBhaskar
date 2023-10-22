//your JS code here. If required.
let btn = document.getElementById('enterBtn');
                    
btn.addEventListener('click',function(){
	let p = document.getElementById('status');
	if(p){
		// p.style.display = 'none';
		let h = document.createElement('h1');
		h.textContent = p.textContent;
		p.parentNode.replaceChild(h,p);
	}
})

