ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([76.635991, 8.689253, 76.810818, 8.804292]);
var wms_layers = [];

var format_varkala_0 = new ol.format.GeoJSON();
var features_varkala_0 = format_varkala_0.readFeatures(json_varkala_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_varkala_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_varkala_0.addFeatures(features_varkala_0);
var lyr_varkala_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_varkala_0, 
                style: style_varkala_0,
                popuplayertitle: "varkala",
                interactive: false,
                title: '<img src="styles/legend/varkala_0.png" /> varkala'
            });
var format_clip_DRAINAGE_1 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_1 = format_clip_DRAINAGE_1.readFeatures(json_clip_DRAINAGE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_clip_DRAINAGE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_1.addFeatures(features_clip_DRAINAGE_1);
var lyr_clip_DRAINAGE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_1, 
                style: style_clip_DRAINAGE_1,
                popuplayertitle: "clip_DRAINAGE",
                interactive: false,
    title: 'clip_DRAINAGE<br />\
    <img src="styles/legend/clip_DRAINAGE_1_0.png" /> 0<br />\
    <img src="styles/legend/clip_DRAINAGE_1_1.png" /> 1<br />\
    <img src="styles/legend/clip_DRAINAGE_1_2.png" /> 2<br />\
    <img src="styles/legend/clip_DRAINAGE_1_3.png" /> 3<br />\
    <img src="styles/legend/clip_DRAINAGE_1_4.png" /> 4<br />\
    <img src="styles/legend/clip_DRAINAGE_1_5.png" /> <br />'
        });
var format_clip_GEOMORPHOLOGY_2 = new ol.format.GeoJSON();
var features_clip_GEOMORPHOLOGY_2 = format_clip_GEOMORPHOLOGY_2.readFeatures(json_clip_GEOMORPHOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_clip_GEOMORPHOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_GEOMORPHOLOGY_2.addFeatures(features_clip_GEOMORPHOLOGY_2);
var lyr_clip_GEOMORPHOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_GEOMORPHOLOGY_2, 
                style: style_clip_GEOMORPHOLOGY_2,
                popuplayertitle: "clip_GEOMORPHOLOGY",
                interactive: false,
    title: 'clip_GEOMORPHOLOGY<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_1.png" /> Pediplain<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_2.png" /> Plateau<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_3.png" /> Water Body<br />\
    <img src="styles/legend/clip_GEOMORPHOLOGY_2_4.png" /> <br />'
        });
var format_clip_Road_3 = new ol.format.GeoJSON();
var features_clip_Road_3 = format_clip_Road_3.readFeatures(json_clip_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_clip_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_3.addFeatures(features_clip_Road_3);
var lyr_clip_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_3, 
                style: style_clip_Road_3,
                popuplayertitle: "clip_Road",
                interactive: false,
                title: '<img src="styles/legend/clip_Road_3.png" /> clip_Road'
            });
var format_clip_Junctions_4 = new ol.format.GeoJSON();
var features_clip_Junctions_4 = format_clip_Junctions_4.readFeatures(json_clip_Junctions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_clip_Junctions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Junctions_4.addFeatures(features_clip_Junctions_4);
var lyr_clip_Junctions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Junctions_4, 
                style: style_clip_Junctions_4,
                popuplayertitle: "clip_Junctions",
                interactive: true,
                title: '<img src="styles/legend/clip_Junctions_4.png" /> clip_Junctions'
            });
var format_railway_5 = new ol.format.GeoJSON();
var features_railway_5 = format_railway_5.readFeatures(json_railway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_railway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_5.addFeatures(features_railway_5);
var lyr_railway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_5, 
                style: style_railway_5,
                popuplayertitle: "railway",
                interactive: false,
                title: '<img src="styles/legend/railway_5.png" /> railway'
            });
var format_shapefile_6 = new ol.format.GeoJSON();
var features_shapefile_6 = format_shapefile_6.readFeatures(json_shapefile_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_shapefile_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shapefile_6.addFeatures(features_shapefile_6);
var lyr_shapefile_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shapefile_6, 
                style: style_shapefile_6,
                popuplayertitle: "shapefile",
                interactive: true,
                title: '<img src="styles/legend/shapefile_6.png" /> shapefile'
            });

lyr_varkala_0.setVisible(true);lyr_clip_DRAINAGE_1.setVisible(true);lyr_clip_GEOMORPHOLOGY_2.setVisible(true);lyr_clip_Road_3.setVisible(true);lyr_clip_Junctions_4.setVisible(true);lyr_railway_5.setVisible(true);lyr_shapefile_6.setVisible(true);
var layersList = [lyr_varkala_0,lyr_clip_DRAINAGE_1,lyr_clip_GEOMORPHOLOGY_2,lyr_clip_Road_3,lyr_clip_Junctions_4,lyr_railway_5,lyr_shapefile_6];
lyr_varkala_0.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'type': 'type', });
lyr_clip_DRAINAGE_1.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_clip_GEOMORPHOLOGY_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_clip_Road_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_clip_Junctions_4.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_railway_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_shapefile_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'image': 'image', 'varkala_data_x': 'varkala_data_x', 'varkala_data_y': 'varkala_data_y', });
lyr_varkala_0.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'local_auth': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_clip_DRAINAGE_1.set('fieldImages', {'ORDER1': 'Range', });
lyr_clip_GEOMORPHOLOGY_2.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_clip_Road_3.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_clip_Junctions_4.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_railway_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_shapefile_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'image': 'ExternalResource', 'varkala_data_x': 'TextEdit', 'varkala_data_y': 'TextEdit', });
lyr_varkala_0.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_clip_DRAINAGE_1.set('fieldLabels', {'ORDER1': 'no label', });
lyr_clip_GEOMORPHOLOGY_2.set('fieldLabels', {'NAME': 'inline label - always visible', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_clip_Road_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_clip_Junctions_4.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'inline label - always visible', 'District': 'no label', 'Name': 'no label', });
lyr_railway_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_shapefile_6.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'image': 'no label', 'varkala_data_x': 'no label', 'varkala_data_y': 'no label', });
lyr_shapefile_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});