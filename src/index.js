const express=require('express');
const connect=require('./config/database');

const app=express();

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');

app.listen(3000, async ()=>{
    console.log('Server started');
    await connect();
    console.log('mongo db connected');

    // const tweet=await Tweet.create({
    //     content:'third tweet',
    //     // userEmail:'a@b.com'
    // });
    // const tweets=await Tweet.find();
    // const tweet=await Tweet.findById('67b259d2b7861e3f92b11e49');
    // tweet.userEmail='b@c.com';
    // await tweet.save();

    const tweetRepo=new TweetRepository;
    await tweetRepo.create({content:'With hooks'});

    // const tweet=await tweetRepo.create({content:'tweet with comment schema'});
    // console.log(tweet);
    // const comment=await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    // const tweet=await tweetRepo.getAll(2,4)
    // await tweet.save();
    // console.log(tweet[0].contentWithEmail);
})