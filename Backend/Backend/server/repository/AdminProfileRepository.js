class AdminProfileRepository {
  constructor(db) {
    this.db = db;
  }

  getAdminProfessionalInfo(userId, callback) {
    const query = `
      SELECT pi.id, pi.user_id, pi.company_name, pi.job_title,
             pi.employment_type, pi.start_date, pi.end_date,
             pi.is_current_job, pi.experience_years,
             pi.location, pi.skills,
             pinfo.first_name, pinfo.last_name, pinfo.gender,
             pinfo.date_of_birth, pinfo.email, pinfo.address, pinfo.pincode
      FROM professional_informations pi
      JOIN personal_informations pinfo
        ON pi.user_id = pinfo.user_id
      WHERE pi.user_id =?
      ORDER BY pi.start_date DESC;`

    this.db.query(query, [userId], (error, data) => {
      if (error) return callback(error, null);
      callback(null, data);
    });
  }

  getAdminPersonalDetails(userId, callback) {
    const query = `
      SELECT *
      FROM personal_informations
      WHERE user_id = ?
    `;

    this.db.query(query, [userId], (error, personalData) => {
      if (error) return callback(error, null);
      callback(null, personalData);
    });
  }
}

module.exports = AdminProfileRepository;
