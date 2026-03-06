import Biodata from "../models/Biodata.js";

export const createBiodata = async (req, res) => {
  const biodata = await Biodata.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(biodata);
};

export const getBiodata = async (req, res) => {
  const biodata = await Biodata.find({ userId: req.user.id });

  res.json(biodata);
};

export const updateBiodata = async (req, res) => {
  const biodata = await Biodata.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(biodata);
};