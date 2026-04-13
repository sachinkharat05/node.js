class ProfileService {
  constructor(db) {
    this.db = db;
  }

  getAdminProfile(callback) {
    const query = "SELECT * FROM users LIMIT 1";
    this.db.query(query, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      if (result.length === 0) {
        return callback(null, null);
      }

      callback(null, result[0]);
    });
  }
}

module.exports = ProfileService;