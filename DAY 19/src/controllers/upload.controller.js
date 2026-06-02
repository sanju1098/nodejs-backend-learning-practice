const uploadSingle = async (req, res) => {
  res.status(201).json({
    success: true,

    file: req.file,
  });
};

const uploadMultiple = async (req, res) => {
  res.status(201).json({
    success: true,

    files: req.files,
  });
};

module.exports = {
  uploadSingle,

  uploadMultiple,
};
