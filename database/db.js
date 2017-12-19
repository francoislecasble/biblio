const {Client} = require('pg');

var state={
    db :null,
}

exports.connect = function(done){
    if (state.db) return done();
    const client = new Client({
        connectionString : 'postgres://lecasble:lecasble@192.168.222.86/biblio'
    });

    client.connect(function(err, db){
        if (err) return done(err);
        state.db = db;
        done();
    });
};

exports.get = function(){
    return (state.db);
}

exports.close = function(done){
    if (state.db){
        state.db.close(function (err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}