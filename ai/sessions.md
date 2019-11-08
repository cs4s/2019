---
layout: default
title: CS4S @ UON 2019 - AI Schedule
---

# AI Sessions

## Schedule

<table class="table table-striped table-bordered">
	<thead>
		<tr>
			<th>Time</th>
			<th>Session</th>
		</tr>
	</thead>
	<tbody>
	{% for session in site.data.ai.sessions %}
		<tr>
			<td>{{ session.time }}</td>
			<td>
			{% if session.active == "Yes" %}
				<a href="{{ site.baseurl | append: '/ai/sessions/' | append: session.link }}" class="text-info">{{ session.title }}</a>
			{% elsif session.external == "Yes" %}
				<a href="{{ session.link }}" class="text-info" target="_blank">{{ session.title }}</a>
			{% else %}
				{{ session.title }}
			{% endif %}
			</td>
		</tr>
	{% endfor %}
	</tbody>
</table>
