// Morris.js Charts sample data for SB Admin template

$(function() {

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Accepted spells",
            value: 1
        }, {
            label: "Submitted spells",
            value: 2
        }],
        resize: true
    });
});