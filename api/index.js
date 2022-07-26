const { Router, json } = require('express');

const router = Router({
  mergeParams: true,
});

router.use(json());

router.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = router;
