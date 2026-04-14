class AdminProfileController {
  constructor(service) {
    this.service = service;
  }

  getAdminProfessionalInfo(req, res) {
    const userId = parseInt(req.params.userId);

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    this.service.getAdminProfessionalInfo(userId, (error, data) => {
      if (error) return res.status(500).json(error);

      res.status(200).json({
        success: true,
        data: data,
      });
    });
  }
}

module.exports = AdminProfileController;