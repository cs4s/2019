$(document).ready(function() {

	var terms = $(".term");
	var term_ids = [];

	// Get all the metalanguage terms on the page and create empty template divs
	$.each(terms, function(index, term) {

		var term_id = term.innerText.toLowerCase().replace(/ /g, "-");
		$(this).prop("href", "../../glossary#" + term_id);

		term.id = "term-" + term_id 
		term_ids.push(term_id);

		var term_template_div = $("<div id='" + term_id + "-template' style='display: none'></div>");
		$('footer').before(term_template_div);
	});

	// Retrieves the glossary page and creates the templates for each of the terms from that content
	var temp_div = $('<div>');
	temp_div.load("../../glossary", function() {
		$.each(term_ids, function(index, term_id) {
			var glossary_term_elements = $("#" + term_id, temp_div).nextUntil('h2');
			var glossary_term_preview = glossary_term_elements[0];
			var term_template_div = $("#" + term_id + "-template");
			term_template_div.html(glossary_term_preview);
			tippy("#term-" + term_id, {
				html: "#" + term_id + "-template",
				size: "large",
				theme: "light"
			});
		});
	});
});