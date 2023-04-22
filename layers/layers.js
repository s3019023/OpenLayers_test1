var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_road_segment_1 = new ol.format.GeoJSON();
var features_road_segment_1 = format_road_segment_1.readFeatures(json_road_segment_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_segment_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_segment_1.addFeatures(features_road_segment_1);
var lyr_road_segment_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_segment_1, 
                style: style_road_segment_1,
                interactive: true,
                title: 'road_segment'
            });

lyr_OSMStandard_0.setVisible(true);lyr_road_segment_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_road_segment_1];
lyr_road_segment_1.set('fieldAliases', {'gid': 'gid', 'seg_descr': 'seg_descr', '1 Hour': '1 Hour', '2 Hour': '2 Hour', '3 Hour': '3 Hour', '4 Hour': '4 Hour', 'Unrestricted': 'Unrestricted', });
lyr_road_segment_1.set('fieldImages', {'gid': 'Hidden', 'seg_descr': 'TextEdit', '1 Hour': 'CheckBox', '2 Hour': 'CheckBox', '3 Hour': 'CheckBox', '4 Hour': 'CheckBox', 'Unrestricted': 'CheckBox', });
lyr_road_segment_1.set('fieldLabels', {'seg_descr': 'inline label', '1 Hour': 'inline label', '2 Hour': 'inline label', '3 Hour': 'inline label', '4 Hour': 'inline label', 'Unrestricted': 'inline label', });
lyr_road_segment_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});