const router = require('express').Router();
const { Gardens } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const gardens = await Gardens.findAll({});

    res.status(200).json(gardens);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const gardens = await Gardens.findByPk(req.params.id);

    res.status(200).json(gardens);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newGarden = await Gardens.create({
      ...req.body,
      host_id: req.session.user_id,
    });

    res.status(200).json(newGarden);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Gardens.destroy({
      where: {
        id: req.params.id,
        host_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
