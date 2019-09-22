---
layout: default
title: CS4S @ UON 2019 - VR Schedule
---

## VR Workshop Schedule

<table class="table table-striped table-bordered">
	<thead>
		<tr>
			<th>Time</th>
			<th>Session</th>
		</tr>
	</thead>
	<tbody>
	{% for session in site.data.vr.sessions %}

		<tr>
			<td>{{ session.time }}</td>
			<td>
			{% if session.active == "Yes" %}
				<a href="{{ session.link }}" class="text-info">{{ session.title }}</a>
			{% else %}
				{{ session.title }}
			{% endif %}
			</td>
		</tr>
	{% endfor %}
	</tbody>
</table>
