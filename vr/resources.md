---
layout: resources
title: CS4S @ UON 2019 - VR Resources
---
## VR Resources

### About 

### Resources

<fieldset class='border px-5 py-3'>
	<strong>Filter by Resource Type:</strong>
	<form class='px-4 py-2'>
		{% for filter in site.data.resource_filters %}
			{% capture mod_index %}{{ forloop.index0 | modulo :6 }}{% endcapture %}
			{% if mod_index == '0' or forloop.first %}
    		<div class="row py-2">
  			{% endif %}
				<div class='form-check form-check-inline'>
					<input class='form-check-input grid-filter-checkbox' type='checkbox' id='{{ filter.id }}'>
					<label class='form-check-label' for='{{ filter.id }}'>{{ filter.label }}</label>
				</div>
			{% if mod_index == '5' or forloop.last %}
			</div>
			{% endif %}
		{% endfor %}
		<div class='row py-2'>
			<button id='clear-filters-button' class='btn btn-primary' type='button'>
				Clear Filters
			</button>
		</div>
	</form>
</fieldset>

<div class='row py-2 px-3'>
	<table id='jqGrid'></table>
	<div id='jqGridPager'></div>
</div>

