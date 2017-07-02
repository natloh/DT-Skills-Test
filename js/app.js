var feed = new Instafeed({
    get: 'user',
    //userId: '439020677',
    userId: '30962692',
    clientId: '52c40a879ac04a708b80203110d4a5a5',
    target: 'dt-instagram-feed',
    accessToken: '30962692.52c40a8.b3d4e04507a14a4ebe4fccefd6623621',
    resolution: 'low_resolution',
    links: false,
    template: '<div><img src="{{image}}" /></div>'
});
feed.run();
