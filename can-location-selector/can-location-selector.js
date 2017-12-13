Polymer({
    is: 'can-location-selector',

    properties: {
        geocode: {
            type: Object,
            reflectToAttribute: true,
            notify: true,
            value: {
                lat: 52.0910391,
                lng: 5.132362199999989
            }
        },
        formattedAddress: {
            type: String
        },
        results: Array,
        
        searchMapsString: String
    },
    
    listeners: {
        'google-map-search-results': 'resizeModal'
    },

    _focusOnMarker: function(evt, data) {
        console.log(evt.model.marker);
        this.set('geocode', {
            lat: evt.model.marker.latitude,
            lng: evt.model.marker.longitude,
        });
        this.$$("google-map").fitToMarkers = true;
        this.set('formattedAddress', evt.model.marker.formatted_address)
    },
    _searchGoogleMaps: function() {
        this.$$("#searchselector").set('query', this.$$('#searchMapsString').value);
        this.$$("#searchselector").search();
    },
    resizeModal: function() {
        this.fire('resizeModal');
    }
});
