if (Meteor.isClient) {

	Meteor.startup(function () {
		var svg = dimple.newSvg("#chartContainer", 590, 400);
		d3.tsv("/data/example_data.tsv", function (data) {
			var chart = new dimple.chart(svg, data);
			chart.setBounds(60, 30, 510, 330);
			chart.addCategoryAxis("x", ["Price Tier", "Channel"]);
			chart.addMeasureAxis("y", "Unit Sales");
			chart.addSeries("Channel", dimple.plot.bar);
			chart.addLegend(65, 10, 510, 20, "right");
			chart.draw();
		});
	});
}
