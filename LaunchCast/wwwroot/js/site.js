// Populating KendoUI grid with SpaceX Launch Data

$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            dataType: "jsonp",
            transport: {
                read: "https://api.spacexdata.com/v2/launches"
            },
            pageSize: 20
        },
        height: 550,
        groupable: true,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            template: "<div class=''" +
            "style=''></div>" +
            "<div class='customer-name'>#: rocket.rocket_name #</div>",
            field: "rocket.rocket_name",
            title: "Rocket Name",
            width: 120
        }, {
            field: "launch_date_local",
            title: "Launch Date & Time"
        }, {
            field: "launch_success",
            title: "Launch Success",
            width: 150
        }, {
            field: "rocket.second_stage.payloads[0].cargo_manifest",
            title: "Cargo Manifest"
        }]
    });
});
