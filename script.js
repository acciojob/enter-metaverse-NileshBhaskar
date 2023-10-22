let btn = document.getElementById('enterBtn');

btn.addEventListener('click', function() {
  let p = document.getElementById('status');
  if (p) {
    let h = document.createElement('h1');
	// h.setAttribute('id','status');
    h.textContent = "Entered Metaverse";
    // p.parentNode.replaceChild(h, p);
	p.textContent = "";
	p.appendChild(h);
  }
});
