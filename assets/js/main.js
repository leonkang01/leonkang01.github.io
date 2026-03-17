/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt '); }
				});

			});

		}

})(jQuery);


const leons = [
    { text: "Only you and you alone can change your situation. Don’t blame it on anything or anyone.", author: "Leonardo DiCaprio" },
    { text: "Take time to deliberate, but when the time for action has arrived, stop thinking and go.", author: "Napoleon Bonaparte" },
    { text: "Learning never exhausts the mind.", author: "Leonardo Da Vinci" },
    { text: "Do the math, save the world.", author: "Mark Leon" },
    { text: "I'm gonna make him an offer he can't refuse.", author: "Victor Corleone" }
];

let currentIndex = 0;
let rotateTimer;

// 2. Update Function
function showQuote(index) {
    const textTarget = document.getElementById('quote-text');
    const authorTarget = document.getElementById('quote-author');
    
    // Smooth fade out
    textTarget.style.opacity = 0;
    authorTarget.style.opacity = 0;

    setTimeout(() => {
        textTarget.textContent = `"${leons[index].text}"`;
        authorTarget.textContent = `— ${leons[index].author}`;
        
        // Smooth fade in
        textTarget.style.opacity = 1;
        authorTarget.style.opacity = 1;
    }, 300);
}

// 3. Navigation Logic
function nextLeon() {
    currentIndex = (currentIndex + 1) % leons.length;
    showQuote(currentIndex);
    startAutoRotate(); // Reset timer on click
}

function prevLeon() {
    currentIndex = (currentIndex - 1 + leons.length) % leons.length;
    showQuote(currentIndex);
    startAutoRotate(); // Reset timer on click
}

function startAutoRotate() {
    clearInterval(rotateTimer);
    rotateTimer = setInterval(nextLeon, 10000); // 10 second rotation
}

// 4. Initialize
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextQuote');
    const prevBtn = document.getElementById('prevQuote');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextLeon);
        prevBtn.addEventListener('click', prevLeon);
        showQuote(0);
        startAutoRotate();
    }
});

