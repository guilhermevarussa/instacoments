const instaTouch = require ('instatouch');
require ('dotenv').config();

// Scrape comments from a post
(async () => {
    try {
        const options = { 
            count: 100,
            session:process.env.INSTAGRAM_SESSION_ID
        };
        const comments = await instaTouch.comments('B7wOyffArc5', options);
        console.log(comments);
    } catch (error) {
        console.log(error);
    }
})();