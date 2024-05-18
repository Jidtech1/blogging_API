const express = require('express');
const router = express.Router();
const { createBlog, getBlogs, getBlog } = require('../controllers/blog');
const { list, setUserFilter, filterAndSort, filterByPublished } = require('../middleware/apiFeature');
const getUserFromToken = require('../middleware/verifyUser');
const pagination = require('../middleware/pagination');

router.get('/', filterAndSort, filterByPublished, pagination, list, getBlogs);

router.post('/', getUserFromToken, createBlog);

router.get('/p', getUserFromToken, filterAndSort, setUserFilter, pagination, list, getBlogs);

router.get('/:id', getBlog);

module.exports = router;
