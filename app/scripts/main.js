var canvas = d3.select("body").append("svg")
	.attr("width", 1300)
	.attr("height", 700)

d3.json("../data/nyc_council_districts.geojson", function (data) {

	var group = canvas.selectAll ("g")

		.data(data.features)
		.enter()
		.append("g")

	// var projection = d3.geo.mercator();
	var projection = d3.geo.albers()
	.scale(34000)
	.translate([-9000,2500])
  // .translate([width / 2, height / 2])

	;
	var path = d3.geo.path().projection(projection);

	var areas = group.append("path")
		.attr("d", path)	
		.attr("class", "area")
		.attr("fill", "steelblue")

})