const express = require('express');
const router = express.Router();
const postModel = require('../model/post');
const timeSetDate = require('../model/timecount');

router.post('/commu', async (req, res) => {
    const {postName, postTopic, postMessage} = req.body;

    if(!postName || !postTopic || !postMessage){                         
        res.redirect('/commu');        
    }
    else if(postName && postTopic && postMessage){        
        const newPost = new postModel({
            postName,
            postTopic,
            postMessage,
        });
        await newPost.save();            
        res.redirect('/commu');               
    } 
    else {        
        res.redirect('/commu');        
    }   

});

router.post('/calendar', async (req, res) => {
    const {userName, dateSet} = req.body

    if(!dateSet || !userName){
        res.redirect('/calendar');
    }
    else if(dateSet && userName){
        const newTimeSet = new timeSetDate({
            userName,
            dateSet,
        });
        await newTimeSet.save();
        res.redirect('/calendar')
    }
    else {        
        res.redirect('/calendar');        
    }
})

module.exports = router;