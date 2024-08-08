var wms_layers = [];

var lyr_Basemap_0 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: "https://sgx.geodatenzentrum.de/wms_basemapde?VERSION%3D1.3.0",
        attributions: ' ',
        params: {
            "LAYERS": "de_basemapde_web_raster_grau",
            "TILED": "true",
            "VERSION": "1.3.0"
        },
    })),
    title: "Basemap",
    opacity: 1.000000,


});
wms_layers.push([lyr_Basemap_0, 0]);
var format_Untersuchungsgebiet_1 = new ol.format.GeoJSON();
var features_Untersuchungsgebiet_1 = format_Untersuchungsgebiet_1.readFeatures(json_Untersuchungsgebiet_1,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Untersuchungsgebiet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Untersuchungsgebiet_1.addFeatures(features_Untersuchungsgebiet_1);
var lyr_Untersuchungsgebiet_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Untersuchungsgebiet_1,
    style: style_Untersuchungsgebiet_1,
    popuplayertitle: "Untersuchungsgebiet",
    interactive: false,
    title: '<img src="styles/legend/Untersuchungsgebiet_1.png" /> Untersuchungsgebiet'
});
var format_HufigsterEnergietrger_2 = new ol.format.GeoJSON();
var features_HufigsterEnergietrger_2 = format_HufigsterEnergietrger_2.readFeatures(json_HufigsterEnergietrger_2,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_HufigsterEnergietrger_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HufigsterEnergietrger_2.addFeatures(features_HufigsterEnergietrger_2);
var lyr_HufigsterEnergietrger_2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_HufigsterEnergietrger_2,
    style: style_HufigsterEnergietrger_2,
    popuplayertitle: "Häufigster Energieträger",
    interactive: true,
    title: 'Häufigster Energieträger<br />\
    <img src="styles/legend/HufigsterEnergietrger_2_0.png" /> Gas<br />\
    <img src="styles/legend/HufigsterEnergietrger_2_1.png" /> Heizöl<br />'
});
var format_HufigsteHeizungsart_3 = new ol.format.GeoJSON();
var features_HufigsteHeizungsart_3 = format_HufigsteHeizungsart_3.readFeatures(json_HufigsteHeizungsart_3,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_HufigsteHeizungsart_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HufigsteHeizungsart_3.addFeatures(features_HufigsteHeizungsart_3);
var lyr_HufigsteHeizungsart_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_HufigsteHeizungsart_3,
    style: style_HufigsteHeizungsart_3,
    popuplayertitle: "Häufigste Heizungsart",
    interactive: true,
    title: 'Häufigste Heizungsart<br />\
    <img src="styles/legend/HufigsteHeizungsart_3_0.png" /> Einzel-/Mehrraumofen<br />\
    <img src="styles/legend/HufigsteHeizungsart_3_1.png" /> Etagenheizung<br />\
    <img src="styles/legend/HufigsteHeizungsart_3_2.png" /> Zentralheizung<br />'
});
var format_WrmebedarfkWha_4 = new ol.format.GeoJSON();
var features_WrmebedarfkWha_4 = format_WrmebedarfkWha_4.readFeatures(json_WrmebedarfkWha_4,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_WrmebedarfkWha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WrmebedarfkWha_4.addFeatures(features_WrmebedarfkWha_4);
var lyr_WrmebedarfkWha_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_WrmebedarfkWha_4,
    style: style_WrmebedarfkWha_4,
    popuplayertitle: "Wärmebedarf [kWh/a]",
    interactive: true,
    title: 'Wärmebedarf [kWh/a]<br />\
    <img src="styles/legend/WrmebedarfkWha_4_0.png" /> 0 - 10000<br />\
    <img src="styles/legend/WrmebedarfkWha_4_1.png" /> 10000 - 20000<br />\
    <img src="styles/legend/WrmebedarfkWha_4_2.png" /> 20000 - 30000<br />\
    <img src="styles/legend/WrmebedarfkWha_4_3.png" /> 30000 - 40000<br />\
    <img src="styles/legend/WrmebedarfkWha_4_4.png" /> 40000 - 100000<br />'
});
var format_Bruttogeschossflchem_5 = new ol.format.GeoJSON();
var features_Bruttogeschossflchem_5 = format_Bruttogeschossflchem_5.readFeatures(json_Bruttogeschossflchem_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Bruttogeschossflchem_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bruttogeschossflchem_5.addFeatures(features_Bruttogeschossflchem_5);
var lyr_Bruttogeschossflchem_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Bruttogeschossflchem_5,
    style: style_Bruttogeschossflchem_5,
    popuplayertitle: "Bruttogeschossfläche [m²]",
    interactive: true,
    title: 'Bruttogeschossfläche [m²]*<br />\
    <img src="styles/legend/Bruttogeschossflchem_5_0.png" /> 0 - 200<br />\
    <img src="styles/legend/Bruttogeschossflchem_5_1.png" /> 200 - 400<br />\
    <img src="styles/legend/Bruttogeschossflchem_5_2.png" /> 400 - 600<br />\
    <img src="styles/legend/Bruttogeschossflchem_5_3.png" /> 600 - 800<br />\
    <img src="styles/legend/Bruttogeschossflchem_5_4.png" /> 800 - 1000<br />\
    *Die Summe der Grund- <br /> flächen aller  Geschosse <br /> eines Gebäudes.<br />'
});
var format_Baualtersklassen_6 = new ol.format.GeoJSON();
var features_Baualtersklassen_6 = format_Baualtersklassen_6.readFeatures(json_Baualtersklassen_6,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Baualtersklassen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baualtersklassen_6.addFeatures(features_Baualtersklassen_6);
var lyr_Baualtersklassen_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Baualtersklassen_6,
    style: style_Baualtersklassen_6,
    popuplayertitle: "Baualtersklassen",
    interactive: true,
    title: 'Baualtersklassen<br />\
    <img src="styles/legend/Baualtersklassen_6_0.png" /> C (1919 - 1948)<br />\
    <img src="styles/legend/Baualtersklassen_6_1.png" /> D (1949 - 1957)<br />\
    <img src="styles/legend/Baualtersklassen_6_2.png" /> E (1958 - 1968)<br />\
    <img src="styles/legend/Baualtersklassen_6_3.png" /> F (1969 - 1978)<br />\
    <img src="styles/legend/Baualtersklassen_6_4.png" /> G (1979 - 1983)<br />\
    <img src="styles/legend/Baualtersklassen_6_5.png" /> H (1984 - 1994<br />\
    <img src="styles/legend/Baualtersklassen_6_6.png" /> J (2002 - 2009)<br />\
    <img src="styles/legend/Baualtersklassen_6_7.png" /> K (2010 - 2015)<br />\
    <img src="styles/legend/Baualtersklassen_6_8.png" /> L (ab 2016)<br />'
});

lyr_Basemap_0.setVisible(true); lyr_Untersuchungsgebiet_1.setVisible(true); lyr_HufigsterEnergietrger_2.setVisible(false); lyr_HufigsteHeizungsart_3.setVisible(false); lyr_WrmebedarfkWha_4.setVisible(false); lyr_Bruttogeschossflchem_5.setVisible(false); lyr_Baualtersklassen_6.setVisible(true);
var layersList = [lyr_Basemap_0, lyr_Untersuchungsgebiet_1, lyr_HufigsterEnergietrger_2, lyr_HufigsteHeizungsart_3, lyr_WrmebedarfkWha_4, lyr_Bruttogeschossflchem_5, lyr_Baualtersklassen_6];
lyr_Untersuchungsgebiet_1.set('fieldAliases', { 'id': 'id', 'name': 'name', 'default_bu': 'default_bu', 'default_ro': 'default_ro', 'area': 'area', 'population': 'population', 'study_area': 'study_area', });
lyr_HufigsterEnergietrger_2.set('fieldAliases', { 'gitter_id_100m': 'gitter_id_100m', 'x_mp_100m': 'x_mp_100m', 'y_mp_100m': 'y_mp_100m', 'insgesamt_energietraeger': 'insgesamt_energietraeger', 'gas': 'gas', 'heizoel': 'heizoel', 'holz_holzpellets': 'holz_holzpellets', 'biomasse_biogas': 'biomasse_biogas', 'solar_geothermie_waermepumpen': 'solar_geothermie_waermepumpen', 'strom': 'strom', 'kohle': 'kohle', 'fernwaerme': 'fernwaerme', 'kein_energietraeger': 'kein_energietraeger', 'dominierender_energieträger': 'dominierender_energieträger', });
lyr_HufigsteHeizungsart_3.set('fieldAliases', { 'gitter_id_100m': 'gitter_id_100m', 'x_mp_100m': 'x_mp_100m', 'y_mp_100m': 'y_mp_100m', 'insgesamt_heizungsart': 'insgesamt_heizungsart', 'fernheizung': 'fernheizung', 'etagenheizung': 'etagenheizung', 'blockheizung': 'blockheizung', 'zentralheizung': 'zentralheizung', 'einzel_mehrraumoefen': 'einzel_mehrraumoefen', 'keine_heizung': 'keine_heizung', 'dominierende_heizungsart': 'dominierende_heizungsart', });
lyr_WrmebedarfkWha_4.set('fieldAliases', { 'id': 'id', 'hausnummer': 'hausnummer', 'strasse': 'strasse', 'building_levels': 'building_levels', 'roof_levels': 'roof_levels', 'height': 'height', 'area': 'area', 'gross_floor_area': 'gross_floor_area', 'building_type': 'building_type', 'baualtersklassen': 'baualtersklassen', 'wärmebedarf': 'wärmebedarf', });
lyr_Bruttogeschossflchem_5.set('fieldAliases', { 'id': 'id', 'hausnummer': 'hausnummer', 'strasse': 'strasse', 'building_levels': 'building_levels', 'roof_levels': 'roof_levels', 'height': 'height', 'area': 'area', 'gross_floor_area': 'gross_floor_area', 'building_type': 'building_type', 'baualtersklassen': 'baualtersklassen', 'wärmebedarf': 'wärmebedarf', });
lyr_Baualtersklassen_6.set('fieldAliases', { 'id': 'id', 'hausnummer': 'hausnummer', 'strasse': 'strasse', 'building_levels': 'building_levels', 'roof_levels': 'roof_levels', 'height': 'height', 'area': 'area', 'gross_floor_area': 'gross_floor_area', 'building_type': 'building_type', 'baualtersklassen': 'baualtersklassen', 'wärmebedarf': 'wärmebedarf', });
lyr_Untersuchungsgebiet_1.set('fieldImages', { 'id': 'TextEdit', 'name': 'TextEdit', 'default_bu': 'TextEdit', 'default_ro': 'TextEdit', 'area': 'TextEdit', 'population': 'TextEdit', 'study_area': 'TextEdit', });
lyr_HufigsterEnergietrger_2.set('fieldImages', { 'gitter_id_100m': 'TextEdit', 'x_mp_100m': 'Range', 'y_mp_100m': 'Range', 'insgesamt_energietraeger': 'Range', 'gas': 'TextEdit', 'heizoel': 'TextEdit', 'holz_holzpellets': 'TextEdit', 'biomasse_biogas': 'TextEdit', 'solar_geothermie_waermepumpen': 'TextEdit', 'strom': 'TextEdit', 'kohle': 'TextEdit', 'fernwaerme': 'TextEdit', 'kein_energietraeger': 'TextEdit', 'dominierender_energieträger': 'TextEdit', });
lyr_HufigsteHeizungsart_3.set('fieldImages', { 'gitter_id_100m': 'TextEdit', 'x_mp_100m': 'Range', 'y_mp_100m': 'Range', 'insgesamt_heizungsart': 'Range', 'fernheizung': 'TextEdit', 'etagenheizung': 'TextEdit', 'blockheizung': 'TextEdit', 'zentralheizung': 'TextEdit', 'einzel_mehrraumoefen': 'TextEdit', 'keine_heizung': 'TextEdit', 'dominierende_heizungsart': 'TextEdit', });
lyr_WrmebedarfkWha_4.set('fieldImages', { 'id': 'TextEdit', 'hausnummer': 'TextEdit', 'strasse': 'TextEdit', 'building_levels': 'TextEdit', 'roof_levels': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'gross_floor_area': 'TextEdit', 'building_type': 'TextEdit', 'baualtersklassen': 'TextEdit', 'wärmebedarf': 'TextEdit', });
lyr_Bruttogeschossflchem_5.set('fieldImages', { 'id': 'TextEdit', 'hausnummer': 'TextEdit', 'strasse': 'TextEdit', 'building_levels': 'TextEdit', 'roof_levels': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'gross_floor_area': 'TextEdit', 'building_type': 'TextEdit', 'baualtersklassen': 'TextEdit', 'wärmebedarf': 'TextEdit', });
lyr_Baualtersklassen_6.set('fieldImages', { 'id': 'TextEdit', 'hausnummer': 'TextEdit', 'strasse': 'TextEdit', 'building_levels': 'TextEdit', 'roof_levels': 'TextEdit', 'height': 'TextEdit', 'area': 'TextEdit', 'gross_floor_area': 'TextEdit', 'building_type': 'TextEdit', 'baualtersklassen': 'TextEdit', 'wärmebedarf': 'TextEdit', });
lyr_Untersuchungsgebiet_1.set('fieldLabels', { 'id': 'no label', 'name': 'no label', 'default_bu': 'no label', 'default_ro': 'no label', 'area': 'no label', 'population': 'no label', 'study_area': 'no label', });
lyr_HufigsterEnergietrger_2.set('fieldLabels', { 'gitter_id_100m': 'no label', 'x_mp_100m': 'no label', 'y_mp_100m': 'no label', 'insgesamt_energietraeger': 'no label', 'gas': 'no label', 'heizoel': 'no label', 'holz_holzpellets': 'no label', 'biomasse_biogas': 'no label', 'solar_geothermie_waermepumpen': 'no label', 'strom': 'no label', 'kohle': 'no label', 'fernwaerme': 'no label', 'kein_energietraeger': 'no label', 'dominierender_energieträger': 'no label', });
lyr_HufigsteHeizungsart_3.set('fieldLabels', { 'gitter_id_100m': 'no label', 'x_mp_100m': 'no label', 'y_mp_100m': 'no label', 'insgesamt_heizungsart': 'no label', 'fernheizung': 'no label', 'etagenheizung': 'no label', 'blockheizung': 'no label', 'zentralheizung': 'no label', 'einzel_mehrraumoefen': 'no label', 'keine_heizung': 'no label', 'dominierende_heizungsart': 'no label', });
lyr_WrmebedarfkWha_4.set('fieldLabels', { 'id': 'no label', 'hausnummer': 'no label', 'strasse': 'no label', 'building_levels': 'no label', 'roof_levels': 'no label', 'height': 'no label', 'area': 'no label', 'gross_floor_area': 'no label', 'building_type': 'no label', 'baualtersklassen': 'no label', 'wärmebedarf': 'no label', });
lyr_Bruttogeschossflchem_5.set('fieldLabels', { 'id': 'no label', 'hausnummer': 'no label', 'strasse': 'no label', 'building_levels': 'no label', 'roof_levels': 'no label', 'height': 'no label', 'area': 'no label', 'gross_floor_area': 'no label', 'building_type': 'no label', 'baualtersklassen': 'no label', 'wärmebedarf': 'no label', });
lyr_Baualtersklassen_6.set('fieldLabels', { 'id': 'no label', 'hausnummer': 'no label', 'strasse': 'no label', 'building_levels': 'no label', 'roof_levels': 'no label', 'height': 'no label', 'area': 'no label', 'gross_floor_area': 'no label', 'building_type': 'no label', 'baualtersklassen': 'no label', 'wärmebedarf': 'no label', });
lyr_Baualtersklassen_6.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});