class ProfileController {
  constructor(profileService) {
    this.profileService = profileService;
  }

  getProfile(req, res) {
    this.profileService.getAdminProfile((err, data) => {

      // ✅ ERROR CASE
      if (err) {
        console.log("DB ERROR:", err);
        return res.status(500).json({ error: err.message });
      }

      // ✅ NO DATA
      if (!data) {
        return res.status(404).json({ message: "No admin found" });
      }

      // ✅ SUCCESS
      res.json(data);
    });
  }
}

module.exports = ProfileController;