const { File } = require('../models');

exports.createFile = async (req, res) => {
  const { userId, name, size, type, path } = req.body;
  const file = await File.create({ userId, name, size, type, path });
  res.status(201).json(file);
};

exports.getFiles = async (req, res) => {
  const files = await File.findAll();
  res.status(200).json(files);
};

exports.getFileById = async (req, res) => {
  const id = Number(req.params.id);
  const file = await File.findByPk(id);
  if (!file) return res.status(404).json({ message: 'File not found' });
  res.status(200).json(file);
};

exports.updateFile = async (req, res) => {
  const id = Number(req.params.id);
  const { name, size, type, path } = req.body;
  const file = await File.findByPk(id);
  if (!file) return res.status(404).json({ message: 'File not found' });
  file.name = name;
  file.size = size;
  file.type = type;
  file.path = path;
  await file.save();
  res.status(200).json(file);
};

exports.deleteFile = async (req, res) => {
  const id = Number(req.params.id);
  const file = await File.findByPk(id);
  if (!file) return res.status(404).json({ message: 'File not found' });
  await file.destroy();
  res.status(204).send();
};
