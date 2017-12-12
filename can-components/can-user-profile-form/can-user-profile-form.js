Polymer({
    is: 'can-user-profile-form',
    properties: {
        role: {
            type: String,
            value: 'investor',
            notify: true
        },
        ondernemer: {
            type: Boolean,
            computed: '_getIsOndernemer(role)'
        },
        investor: {
            type: Boolean,
            computed: '_getIsInvestor(role)'
        },
        userId: {
            type: String
        },
        valid: {
            type: Boolean,
            notify: true
        },
        data: {
            type: Object,
            notify: true
        },
        readonly: {
            type: Boolean,
            value: false,
            notify: true
        },
        APIRoute: {
            type: String,
            computed: '_getAPIRoute(role, userId)'
        },
        businessEntities: {
            type: Object,
            value: [
                { name : 'Kies een rechtsvorm',  value: ''},
                { name : 'Eenmanszaak',  value: 'Eenmanszaak'},
                { name : 'Besloten vennootschap (BV)',   value: 'BV'},
                { name : 'Commanditaire vennootschap (CV)',   value: 'CV'},
                { name : 'Coöperatie',   value: 'Cooperatie'},
                { name : 'Natuurlijk persoon',   value: 'NP'},
                { name : 'Maatschap',   value: 'Maatschap'},
                { name : 'Naamloze vennootschap (NV)',   value: 'NV'},
                { name : 'Stichting',   value: 'Stichting'},
                { name : 'Vennootschap onder firma (VOF)',  value: 'VOF'},
                { name : 'Vereniging',  value: 'Vereniging'},
                { name : 'Kerkgenootschap',  value: 'Kerkgenootschap'}
            ],
        },
        isStocksCampaign: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false,
            notify: true
        },
        disabledWarning: {
            type: String,
            value: 'Je kunt deze informatie niet wijzigen omdat je campagne is gestart.',
            notify: true
        }
    },

    _saveSuccess: function(evt, data) {
        this.fire('saved', data);
    },

    _saveFailed: function(evt, error) {
        this.fire('save-error', error);
    },

    _getAPIRoute: function(role, userId) {
        switch(role) {
        case 'investor':
            return 'investors/' + userId;
        case 'ondernemer':
            return 'entrepreneurs/' + userId + '/profile';
        }
    },
    _getIsOndernemer: function(role) {
        return (role == 'ondernemer');
    },

    _getIsInvestor: function(role) {
        return (role == 'investor');
    }

});
