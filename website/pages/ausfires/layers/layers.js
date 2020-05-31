var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRITerrain_1 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Upcoming_Prescribed_Burns_GDA2020_2 = new ol.format.GeoJSON();
var features_Upcoming_Prescribed_Burns_GDA2020_2 = format_Upcoming_Prescribed_Burns_GDA2020_2.readFeatures(json_Upcoming_Prescribed_Burns_GDA2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Upcoming_Prescribed_Burns_GDA2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Upcoming_Prescribed_Burns_GDA2020_2.addFeatures(features_Upcoming_Prescribed_Burns_GDA2020_2);
var lyr_Upcoming_Prescribed_Burns_GDA2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Upcoming_Prescribed_Burns_GDA2020_2, 
                style: style_Upcoming_Prescribed_Burns_GDA2020_2,
                interactive: true,
                title: '<img src="styles/legend/Upcoming_Prescribed_Burns_GDA2020_2.png" /> Upcoming_Prescribed_Burns_GDA2020'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRITerrain_1.setVisible(true);lyr_Upcoming_Prescribed_Burns_GDA2020_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRITerrain_1,lyr_Upcoming_Prescribed_Burns_GDA2020_2];
lyr_Upcoming_Prescribed_Burns_GDA2020_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'FID': 'FID', 'OPS_PLAN_I': 'OPS_PLAN_I', 'INCIDENT_N': 'INCIDENT_N', 'PLAN_NAME': 'PLAN_NAME', 'INCIDENTNU': 'INCIDENTNU', 'INCIDENTNA': 'INCIDENTNA', 'REGION': 'REGION', 'DISTRICT': 'DISTRICT', 'RESERVE': 'RESERVE', 'FINANCIALY': 'FINANCIALY', 'SEASON': 'SEASON', 'OBJECTIVE_': 'OBJECTIVE_', 'TREATED_AR': 'TREATED_AR', 'AREA_DRAWN': 'AREA_DRAWN', 'UNBOUNDED': 'UNBOUNDED', 'OPERATIONS': 'OPERATIONS', 'OPS_STATUS': 'OPS_STATUS', 'PUBLIC_INF': 'PUBLIC_INF', 'INCIDENT_C': 'INCIDENT_C', 'FIREYEAR': 'FIREYEAR', 'GLOBALID': 'GLOBALID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Upcoming_Prescribed_Burns_GDA2020_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'FID': 'Range', 'OPS_PLAN_I': 'Range', 'INCIDENT_N': 'Range', 'PLAN_NAME': 'TextEdit', 'INCIDENTNU': 'Range', 'INCIDENTNA': 'TextEdit', 'REGION': 'TextEdit', 'DISTRICT': 'TextEdit', 'RESERVE': 'TextEdit', 'FINANCIALY': 'TextEdit', 'SEASON': 'TextEdit', 'OBJECTIVE_': 'TextEdit', 'TREATED_AR': 'TextEdit', 'AREA_DRAWN': 'TextEdit', 'UNBOUNDED': 'Range', 'OPERATIONS': 'TextEdit', 'OPS_STATUS': 'TextEdit', 'PUBLIC_INF': 'TextEdit', 'INCIDENT_C': 'TextEdit', 'FIREYEAR': 'Range', 'GLOBALID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Upcoming_Prescribed_Burns_GDA2020_2.set('fieldLabels', {'X': 'inline label', 'Y': 'inline label', 'FID': 'inline label', 'OPS_PLAN_I': 'no label', 'INCIDENT_N': 'inline label', 'PLAN_NAME': 'inline label', 'INCIDENTNU': 'no label', 'INCIDENTNA': 'no label', 'REGION': 'inline label', 'DISTRICT': 'inline label', 'RESERVE': 'inline label', 'FINANCIALY': 'no label', 'SEASON': 'inline label', 'OBJECTIVE_': 'inline label', 'TREATED_AR': 'no label', 'AREA_DRAWN': 'no label', 'UNBOUNDED': 'no label', 'OPERATIONS': 'inline label', 'OPS_STATUS': 'inline label', 'PUBLIC_INF': 'inline label', 'INCIDENT_C': 'no label', 'FIREYEAR': 'inline label', 'GLOBALID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label', });
lyr_Upcoming_Prescribed_Burns_GDA2020_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});