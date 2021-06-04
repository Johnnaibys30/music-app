const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'johnnnaibysnunez',
    host: 'localhost',
    database: 'music',
    password: 'postgres',
    port: 5432
});

const getAllSongs = (req, res) => {
    pool.query('SELECT * FROM songs', (error, result) => {
        if(error){
            throw error;
        }
        res.status(200).json(result.rows);
    })
}

const addSong = (req, res) => {
    const { title, artist, duration } = req.body;

    pool.query(
        `INSERT INTO songs (title, artist, duration) VALUES ($1, $2, $3) RETURNING *`,
        [title, artist, duration],
        (error, results) => {
            if (error) {
                throw error;
            }
            console.log(results, "<--- result!")
            res.status(200).json(results.rows)
        }
    );
};

const deleteSongById = (req, res) => {
    const song_id = parseInt(req.params.id);

    pool.query(`DELETE FROM songs WHERE id=${id}`, (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

const updateSongNameById = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    pool.query(
        `UPDATE songs SET title=$1 WHERE id=$2`,
        [title, id],
        (error, results) => {
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
}

module.exports = {
    addSong,
    getAllSongs,
    deleteSongById,
    updateSongNameById
}