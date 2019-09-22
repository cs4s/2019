$(document).ready(function () {
    
    // A custom formatter for the Resources, that includes the link and puts the title in an <a> tag
    function resourceLinkFormatter(cellvalue, options, rowObject) {
        var title = cellvalue;
        var link = rowObject.Link;
        var formattedLink = "<a href='" + link + "' class='text-info' target='_blank'>" + title + "</a>";
        return formattedLink
    }

    // Create the grid on the page and load all of the resource data
    $("#jqGrid").jqGrid({
        url: 'resources.json',
        datatype: "json",
        colModel: [
            { label: 'Resource', name: 'Title', width: 250, formatter: resourceLinkFormatter },
            { label: 'Creator', name: 'Creator', width: 90 },
            { label: 'Type', name: 'Type', width: 100 },
            { label: 'Target Audience', name: 'TargetAudience', width: 80 }    
        ],
        viewrecords: true, // show the current page, data rang and total records on the toolbar
        autowidth: true,
        loadonce: true,
        height: 400,
        rowNum: 30,
        pager: "#jqGridPager",
        emptyrecords: "There are no resources for selected resource type/s."
    });

    // The jqrid uses glyphicons but we have used font-awesome icons instead (could be done in a better way)
    $('#first_jqGridPager').removeClass('ui-pg-button').addClass('fas fa-angle-double-left');
    $('#prev_jqGridPager').removeClass('ui-pg-button').addClass('fas fa-angle-left');
    $('#next_jqGridPager').removeClass('ui-pg-button').addClass('fas fa-angle-right');
    $('#last_jqGridPager').removeClass('ui-pg-button').addClass('fas fa-angle-double-right');


    // A click event for the checkboxes that are used to filter the grid of resources
    $('.grid-filter-checkbox').click(function() {

        // Start with an ajax call to get all of the resources
        $.get('resources.json', function(allResources) {


            var allFilters = $('.grid-filter-checkbox');
            var checkedFilters = $('.grid-filter-checkbox:checked');

            if (checkedFilters.length == 0 || checkedFilters.length == allFilters.length) {    
                // If there are no filters selected or all of the filters selected, simply show all resources
                $('#jqGrid').clearGridData();
                $('#jqGrid').jqGrid('setGridParam', { 'data': allResources });
                $('#jqGrid').trigger('reloadGrid');
            } else {

                // If there are one or more filters selected, then we have to filter to relevant resources
                var filteredResources = [];
                $.each(checkedFilters, function(index, filterCheckbox) {

                    // The label should have the same text as the 'Type' field on the Resource object
                    var label = $("label[for='" + $(filterCheckbox).attr('id') + "']");

                    // Iterate through all of the resources from the get request and add relevant ones to an array
                    for (var i = 0; i < allResources.length; i++) {
                        var resource = allResources[i];
                        if (resource.Type == label.text()) {
                            console.log(label.text())
                            filteredResources.push(resource);
                        }
                    }
                });
                // After adding all of the relevant resources, change the data for the grid to that array
                //var resourcesData = { 'rows': filteredResources };
                $('#jqGrid').clearGridData();
                $('#jqGrid').jqGrid('setGridParam', { 'data': filteredResources });
                $('#jqGrid').trigger('reloadGrid');
            }
        });
    });

    // A click event for the button that clears all the filters that the user has selected
    $('#clear-filters-button').click(function(){

        // Change all of the checkboxes that are checked to be unchecked
        var checkedFilters = $('.grid-filter-checkbox:checked');
        $.each(checkedFilters, function(index, filterCheckbox) {
            checkedFilters.prop('checked', false);
        });

        // Do an ajax request to get all of the resources, set the grid's data to this and reload the grid
        $.get('data.json', function(allResources) {
            $('#jqGrid').jqGrid('setGridParam', { 'data': allResources });
            $('#jqGrid').trigger('reloadGrid');
        });
    });
});