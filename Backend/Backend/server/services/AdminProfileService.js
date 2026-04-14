const AdminProfileRepository = require('../repository/AdminProfileRepository');

class AdminProfileService {
  constructor(db) {
    this.repository = new AdminProfileRepository(db);
  }

  getAdminProfessionalInfo(userId, callback) {
    return this.repository.getAdminProfessionalInfo(userId, callback);
  }

  getAdminPersonalDetails(userId, callback) {
    return this.repository.getAdminPersonalDetails(userId, callback);
  }
}

module.exports = AdminProfileService;