let panorama;
function initialize() {
    panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), {
        position: { lat: 41.03631319580200, lng: -83.65027618408203},
        pov: { heading: 265, pitch: 0 },
        zoom: 1,
    });
}
window.initialize = initialize;
export {};
