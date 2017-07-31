var a = require("./moduleA.js");
var b = require("./moduleB.js");
require("../dist/page1.html");
require("../dist/page3.html");
require("../dist/page4.html");
require("../dist/page5.html");
require("../dist/page6.html");
require("../dist/page7.html");
require("../dist/page8.html");
require("../dist/page9.html");
require("../dist/page10.html");
require("../dist/seat.html");

/*require("../styles/fonts.css");
require("../styles/style.css");*/
require("../styles/seat.css");

/*
a.updateTitle();
b.updateContent();*/


function boeingData() {
    return [
		{id: 'S_M31'},{id: 'S_M30'},{id: 'S_M32'},{id: 'S_M33'},{id: 'S_M34'},
		{id: 'S_M35'},{id: 'S_M36'},{id: 'S_M37'},{id: 'S_M10'},{id: 'S_M9'},
		{id: 'S_M8'},{id: 'S_M7'},{id: 'S_M6'},{id: 'S_M5'},{id: 'S_M4'},
		{id: 'S_M3'},{id: 'S_M2'},{id: 'S_M1'},{id: 'S_M51'},{id: 'S_M50'},
		{id: 'S_M49'},{id: 'S_M48'},{id: 'S_M47'},{id: 'S_M46'},{id: 'S_M45'},
		{id: 'S_M44'},{id: 'S_M43'},{id: 'S_M42'},{id: 'S_M38'},{id: 'S_M39'},
		{id: 'S_M40'},{id: 'S_M41'},{id: 'S_M11'},{id: 'S_M12'},{id: 'S_M13'},
		{id: 'S_M14'},{id: 'S_M15'},{id: 'S_M16'},{id: 'S_M17'},{id: 'S_M18'},
		{id: 'S_M19'},{id: 'S_M20'},{id: 'S_M21'},{id: 'S_M22'},{id: 'S_M23'},
		{id: 'S_M24'},{id: 'S_M25'},{id: 'S_M26'},{id: 'S_M27'},{id: 'S_M28'},
		{id: 'S_M29'},{id: 'S_U32'},{id: 'S_U33'},{id: 'S_U34'},{id: 'S_U35'},
		{id: 'S_U36'},{id: 'S_U37'},{id: 'S_U31'},{id: 'S_U30'},{id: 'S_U29'},
		{id: 'S_U10'},{id: 'S_U9'},{id: 'S_U8'},{id: 'S_U7'},{id: 'S_U6'},
		{id: 'S_U5'},{id: 'S_U4'},{id: 'S_U3'},{id: 'S_U2'},{id: 'S_U1'},
		{id: 'S_U51'},{id: 'S_U50'},{id: 'S_U49'},{id: 'S_U48'},{id: 'S_U47'},
		{id: 'S_U46'},{id: 'S_U45'},{id: 'S_U44'},{id: 'S_U43'},{id: 'S_U42'},
		{id: 'S_U41'},{id: 'S_U40'},{id: 'S_U39'},{id: 'S_U38'},{id: 'S_U28'},
		{id: 'S_U28'},{id: 'S_U26'},{id: 'S_U25'},{id: 'S_U24'},{id: 'S_U23'},
		{id: 'S_U22'},{id: 'S_U21'},{id: 'S_U20'},{id: 'S_U19'},{id: 'S_U18'},
		{id: 'S_U17'},{id: 'S_U16'},{id: 'S_U15'},{id: 'S_U14'},{id: 'S_U13'},
		{id: 'S_U12'},{id: 'S_U11'},{id: 'S_SETerrace'},{id: 'S_SWTerrace'},{id: 'S_L24'},
		{id: 'S_L25'},{id: 'S_L23'},{id: 'S_L21'},{id: 'S_L26'},{id: 'S_L27'},
		{id: 'S_L28'},{id: 'S_L29'},{id: 'S_L30'},{id: 'S_L31'},{id: 'S_L32'}

		/*{id: 'S_M14'},{id: 'S_M15'},{id: 'S_M16'},{id: 'S_M17'},{id: 'S_M18'},
		{id: 'S_M19'},{id: 'S_M20'},{id: 'S_M21'},{id: 'S_M22'},{id: 'S_M23'},
		{id: 'S_M24'},{id: 'S_M25'},{id: 'S_M26'},{id: 'S_M27'},{id: 'S_M28'},
		{id: 'S_M29'},{id: 'S_U32'},{id: 'S_U33'},{id: 'S_U34'},{id: 'S_U35'},
		{id: 'S_U36'},{id: 'S_U37'},{id: 'S_U31'},{id: 'S_U30'},{id: 'S_U29'},
		{id: 'S_U10'},{id: 'S_U9'},{id: 'S_U8'},{id: 'S_U7'},{id: 'S_U6'},
		{id: 'S_U5'},{id: 'S_U4'},{id: 'S_U3'},{id: 'S_U2'},{id: 'S_U1'},
		{id: 'S_U51'},{id: 'S_U50'},{id: 'S_U49'},{id: 'S_U48'},{id: 'S_U47'},
		{id: 'S_U46'},{id: 'S_U45'},{id: 'S_U44'},{id: 'S_U43'},{id: 'S_U42'}*/


    ]
}



anychart.onDocumentReady(function () {
    stage = acgraph.create('container');
    $('#container').append('<div class="seat-map-title">' +
            '<h1>Boeing 737</h1>' +
            '<p>Source <a href="https://cdn.anychart.com/svg-data/seat-map/boeing_737.svg"' +
            'target="_blank">SVG Image</a></p>' + '</div>');

    // get svg file
    $.ajax({
        type: 'GET',
        /*url: 'https://cdn.anychart.com/svg-data/seat-map/boeing_737.svg',*/
        url: 'stadium1.svg',
        // The data that have been used for this sample can be taken from the CDN
        // load SVG image using jQuery ajax
        success: function (svgData) {
            // data for creating a SeatMap
            // from the CDN https://cdn.anychart.com/csv-data/boeing_737.js to data file
            var data = boeingData();
            chart = anychart.seatMap(data);
            debugger;
            // set svg data,
            chart.geoData(svgData);
            chart.padding([105, 0, 20, 0])
                    // load svg-file how it looked(colors stroke/fill except
                    // for elements of series)
                    .unboundRegions('as-is');

            series = chart.getSeries(0);
            // sets fill series
            series.fill(function () {
                        var attrs = this.attributes;

                        return attrs ? attrs.fill : this.sourceColor;
                    })
                    // sets stroke series
                    .stroke(function () {
                        var attrs = this.attributes;

                        return attrs ? attrs.stroke : this.sourceColor;
                    });

            // sets fill on hover series and select series
            series.hoverFill(returnColorHoverAndSelect);
            series.selectFill(returnColorHoverAndSelect);

            // Create chart tooltip own title
            series.tooltip().titleFormat('Section');

            // Create chart tooltip own text
            series.tooltip().format('{%Id}');

            // create label zoom
            var zoomLabel = chart.label(0);
            zoomLabel.text("2x Zoom.")
                    .background('#9E9E9E')
                    .fontColor("#fff")
                    .padding(5)
                    .position('CenterTop')
                    .offsetX(5)
                    .offsetY(60);

            zoomLabel.listen("click", function () {
                // zoom map in 2 times
                chart.zoom(2);
            });

            // set color for label hover
            zoomLabel.listen('mouseOver', mouseOverLabel);
            zoomLabel.listen('mouseOut', mouseOutLabel);

            // create label zoom to
            var zoomToLabel = chart.label(1);
            zoomToLabel.text("1x Zoom.")
                    .background('#9E9E9E')
                    .fontColor("#fff")
                    .position('CenterTop')
                    .padding(5)
                    .offsetX(-75)
                    .offsetY(60);

            zoomToLabel.listen("click", function () {
                // zoomTo map
                chart.zoomTo(1);
            });

            // set color for label hover
            zoomToLabel.listen('mouseOver', mouseOverLabel);
            zoomToLabel.listen('mouseOut', mouseOutLabel);

            // label hover info
            var labelHoverPlaceInfo = chart.label(2);
            var labelHoverPlaceInfoFormat = "<span style='color: #545f69; font-size: 14px'>" +
                    "<b>Class</b>: %s<br/><b>Place</b>: %s<br/><b>Price</b>: %s</span>";
            labelHoverPlaceInfo.useHtml(true)
                    .padding(10)
                    .hAlign("left")
                    .position("topRight")
                    .anchor("topRight")
                    .offsetY(85)
                    .offsetX(20)
                    .width(250);
            labelHoverPlaceInfo.background({
                fill: '#FCFCFC',
                stroke: '#E1E1E1',
                corners: 3,
                cornerType: 'ROUND'
            });
            labelHoverPlaceInfo.text(anychart.format.subs(labelHoverPlaceInfoFormat, '-', '-', '0'));

            // label select info
            var labelSelectPlace = chart.label(3);
            var labelSelectPlaceFormat = "<span style='color: #545f69; font-size: 14px'>" +
                    "<b>Seat Reservation<br/></b><b>Places</b>: %s<br/><b>Total Price</b>: %s</span>";
            labelSelectPlace.useHtml(true)
                    .padding(10)
                    .hAlign("left")
                    .position("topRight")
                    .anchor("topRight")
                    .offsetY(160)
                    .offsetX(20)
                    .width(250);
            labelSelectPlace.background({
                fill: '#FCFCFC',
                stroke: '#E1E1E1',
                corners: 3,
                cornerType: 'ROUND'
            });
            labelSelectPlace.text(anychart.format.subs(labelSelectPlaceFormat, '-', '0'));

            // label info
            var labelInfo = chart.label(4);
            labelInfo.useHtml(true)
                    .padding(10)
                    .hAlign("left")
                    .position("topLeft")
                    .anchor("topLeft")
                    .offsetY(85)
                    .offsetX(20)
                    .width(270);
            labelInfo.background({
                fill: '#FCFCFC',
                stroke: '#E1E1E1',
                corners: 3,
                cornerType: 'ROUND'
            });
            labelInfo.text("<span style='color: #545f69; font-size: 14px'><b>Please select a location." +
                    "</b><br><br>You can do this by clicking on the<br>desired location , so you can select" +
                    "<br>multiple locations with the aid<br>of a combination of keys:<br><b><i>shift/ctrl" +
                    " + target place</i></b>.</span>").useHtml(true);

            // add pointsHover listener to get hovered place info
            chart.listen('pointsHover', function (point) {
                var placeInfo;
                if (point.seriesStatus[0].points[0] !== undefined) {
                    placeInfo = placeInfoFunc(point.seriesStatus[0].points[0].id);
                    labelHoverPlaceInfo.text(anychart.format.subs(labelHoverPlaceInfoFormat, placeInfo.class, placeInfo.place, placeInfo.price));
                }
            });

            // add pointsSelect listener to get select place info
            chart.listen('pointsSelect', function (points) {
                var placesInfo = points.seriesStatus[0].points;
                var placesId = [];
                var totalPrice = 0;

                if (chart.getSelectedPoints().length) {

                    for (var i = 0; i < placesInfo.length; i++) {
                        placesId.push(points.seriesStatus[0].points[i].id);
                        totalPrice += parseInt(placeInfoFunc(points.seriesStatus[0].points[i].id).price);
                    }

                    totalPrice += '$';

                    labelSelectPlace.text(anychart.format.subs(labelSelectPlaceFormat, placesId, totalPrice)).background({
                        fill: '#E5EEF5'
                    });
                }

            });

            // add chartClick listener to reset labelSelectPlace values
            chart.listen('click', function () {
                if (chart.getSelectedPoints().length == 0) {
                    labelSelectPlace.background({
                        fill: '#FCFCFC'
                    });
                    labelHoverPlaceInfo.text(anychart.format.subs(labelHoverPlaceInfoFormat, '-', '-', '0'));
                    labelSelectPlace.text(anychart.format.subs(labelSelectPlaceFormat, '-', '0'));
                }
            });

            // set container id for the chart
            chart.container(stage);
            // initiate chart drawing
            chart.draw();
        }
    });
});

function returnColorHoverAndSelect() {
    return '#64b5f6';
}

function mouseOverLabel() {
    this.background(anychart.color.darken('#9E9E9E', 0.35));
}

function mouseOutLabel() {
    this.background('#9E9E9E');
}

function placeInfoFunc(id) {
    const ECONOM_PLUS_ROW_MIN = 21;
    var regBusinessClass = /[1-3]{1}-(A|B|E|F)/;
    var regeconomClass = /([7-9]{1}|[0-9]{2})-(A|B|C|D|E|F)/;

    var businessClass = id.match(regBusinessClass) ? id.match(regBusinessClass)[0] : false;
    var economPlusClass = id.match(regeconomClass) && id.match(regeconomClass)[1] <= ECONOM_PLUS_ROW_MIN ? id.match(regeconomClass)[0] : false;
    var economClass = id.match(regeconomClass) && id.match(regeconomClass)[1] > ECONOM_PLUS_ROW_MIN ? id.match(regeconomClass)[0] : false;

    switch (id) {
        case businessClass :
            return {
                place: id,
                class: 'Business Class',
                price: '350$'
            };
        case economPlusClass :
            return {
                place: id,
                class: 'Econom-Plus Class',
                price: '250$'
            };
        case economClass :
            return {
                place: id,
                class: 'Econom Class',
                price: '150$'
            };
    }
}

