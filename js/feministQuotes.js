$(document).ready(function() {
    // '&ldquo;Quote.&rdquo; <br /> &mdash;Attribution',
    // https://www.w3schools.com/charsets/ref_html_8859.asp
    let feministArray = [
		// Feminist Quotes
        '&ldquo;There are two ways of spreading light: to be the candle or the mirror that reflects it.&rdquo; <br /> &mdash;Edith Wharton',
        '&ldquo;No one can make you feel inferior without your consent.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;One child, one teacher, one pen and one book can change the world.&rdquo; <br /> &mdash;Malala Yousafzai',
        '&ldquo;I don&rsquo;t want other people to decide who I am. I want to decide that for myself.&rdquo; <br /> &mdash;Emma Watson',
        '&ldquo;Gentle ladies, you will remember till old age what we did together in our brilliant youth!&rdquo; <br /> &mdash;Sappho',
        '&ldquo;We all have our imperfections. But I&rsquo;m human, and you know, it&rsquo;s important to concentrate on other qualities besides outer beauty.&rdquo; <br /> &mdash;Beyonc&eacute;',
        '&ldquo;Try to be a rainbow in someone&rsquo;s cloud.&rdquo; <br /> &mdash;Maya Angelou',
        '&ldquo;Use each interaction to be the best, most powerful version of yourself.&rdquo; <br /> &mdash;Marianne Williamson',
        '&ldquo;You have to believe in yourself when no one else does &ndash; that make you a winner right there.&rdquo; <br /> &mdash;Venus Williams',
        '&ldquo;The control and understanding of our personal fears is one of the most important undertakings of our lives.&rdquo; <br /> &mdash;Helen Mirren',
        '&ldquo;If I waited for perfection&hellip;I would never write a word.&rdquo; <br /> &mdash;Margaret Atwood',
        '&ldquo;Women are the largest untapped reservoir of talent in the world.&rdquo; <br /> &mdash;Hillary Clinton',
        '&ldquo;Life appears to me too short to be spent in nursing animosity, or registering wrongs.&rdquo; <br /> &mdash;Charlotte Bront&euml;',
        '&ldquo;Never regret. If it&rsquo;s good, it&rsquo;s wonderful. If it&rsquo;s bad, it&rsquo;s experience.&rdquo; <br /> &mdash;Eleanor Hibbert',
        '&ldquo;I think you should take your job seriously, but not yourself &ndash; that is the best combination.&rdquo; <br /> &mdash;Judi Dench',
        '&ldquo;The important thing is not what they think of me, but what I think of them.&rdquo; <br /> &mdash;Queen Victoria',
        '&ldquo;I want to tell any young girl out there who&rsquo;s a geek, I was a really serious geek in high school. It works out.&rdquo; <br /> &mdash;Sheryl Sandberg',
        '&ldquo;Life is a succession of lessons which must be lived to be understood.&rdquo; <br /> &mdash;Helen Keller',
        '&ldquo;Everyone&rsquo;s dream can come true if you just stick to it and work hard.&rdquo; <br /> &mdash;Serena Williams',
        '&ldquo;I don&rsquo;t care what is written about me so long as it isn&rsquo;t true.&rdquo; <br /> &mdash;Dorothy Parker',
        '&ldquo;Each person must live their life as a model for others.&rdquo; <br /> &mdash;Rosa Parks',
        '&ldquo;My fears came true: people called me fat and hideous, and I lived. And now I keep living.&rdquo; <br /> &mdash;Lena Dunham',
        '&ldquo;I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too.&rdquo; <br /> &mdash;Queen Elizabeth I',
        '&ldquo;You don&rsquo;t get something for nothing and you have to work hard for what you want in life.&rdquo; <br /> &mdash;Sarah Storey',
        '&ldquo;If you don&rsquo;t like something, change it. If you can&rsquo;t change it, change your attitude. Don&rsquo;t complain.&rdquo; <br /> &mdash;Maya Angelou',
        '&ldquo;I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.&rdquo; <br /> &mdash;Virginia Woolf',
        '&ldquo;You&rsquo;re only young once, but you can be immature forever.&rdquo; <br /> &mdash;Germaine Greer',
        '&ldquo;Above all, be the heroine of your life, not the victim.&rdquo; <br /> &mdash;Nora Ephron',
        '&ldquo;The most common way people give up their power is by thinking they don&rsquo;t have any.&rdquo; <br /> &mdash;Alice Walker',
        '&ldquo;Every man I meet wants to protect me. I can&rsquo;t figure out what from.&rdquo; <br /> &mdash;Mae West',
        '&ldquo;Life is either a daring adventure or nothing.&rdquo; <br /> &mdash;Helen Keller',
    ]

    let feministQuotes = feministArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let feministQuote = feministQuotes[0]

    let feminist = `<p>${feministQuote}</p>`

    $('#feminist').html(feminist)
})