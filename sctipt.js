// Script utilities: redirect via data-redirect and optional button toggle
document.addEventListener('DOMContentLoaded', () => {
	// Global handler: any element with data-redirect will navigate on click
	document.body.addEventListener('click', (e) => {
		const el = e.target.closest('[data-redirect]');
		if (!el) return;
		const url = el.getAttribute('data-redirect');
		if (!url) return;
		// If data-target="_blank" open in new tab
		const target = el.getAttribute('data-target');
		if (target === '_blank') {
			window.open(url, '_blank', 'noopener');
		} else {
			// default: same tab
			window.location.href = url;
		}
	});

	// Backwards-compatible: if there is an <input> button used by older code,
	// toggle its value like before. Prefer using an id (#startBtn) for reliability.
	const btn = document.querySelector('#startBtn') || document.querySelector('input[type="button"]');
	if (btn) {
		btn.addEventListener('click', updateBtn);
	}

	function updateBtn() {
		try {
			if (btn.value === "Démarrer la machine") {
				btn.value = "Menu OK";
			} else {
				btn.value = "Démarrer la machine";
			}
		} catch (err) {
			// ignore if btn has no value property (e.g. a <button>)
		}
	}
});

// Expose helper if other scripts want to redirect programmatically
function redirectTo(url, target) {
	if (!url) return;
	if (target === '_blank') window.open(url, '_blank', 'noopener');
	else window.location.href = url;
}

/* Usage:
	- Add attribute to any element: <div data-redirect="Page/trollGta.html">Go</div>
	- Optionally open in new tab: <a data-redirect="https://example.com" data-target="_blank">Open</a>
	- Or call programmatically: redirectTo('Page/trollGta.html')
*/

