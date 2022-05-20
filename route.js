const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
   res.sendFile(__dirname +'/HTML/home.html');
});
router.get('/home.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/home.html');
 });
router.get('/build.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/build.html');
});
router.get('/faq.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/faq.html');
});
router.get('/reviews.html', (req, res)=>{
    res.sendFile(__dirname +'/HTML/reviews.html');
});
module.exports = router;