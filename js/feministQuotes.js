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
        // Feminist Quotes
        '&ldquo;A girl should be two things: who and what she wants.&rdquo; <br /> &mdash;Coco Chanel',
        '&ldquo;Somebody&rsquo;s negativity dumped on you is a bigger commentary on how they feel about themselves than you.&rdquo; <br /> &mdash;Kelly Ripa',
        '&ldquo;Take advantage of every opportunity that comes your way, with grace and humility. Be a sponge &ndash; and absorb and learn.&rdquo; <br /> &mdash;Chita Rivera',
        '&ldquo;Speak! It&rsquo;s a revolution for women to have voices.&rdquo; <br /> &mdash;Jill Soloway',
        '&ldquo;Don&rsquo;t play a supporting role in your own life.&rdquo; <br /> &mdash;Robin Roberts',
        '&ldquo;The trouble with some women is they get all excited about nothing &ndash; and then they marry him.&rdquo; <br /> &mdash;Cher',
        '&ldquo;A feminist is anyone who recognizes the equality and full humanity of women and men.&rdquo; <br /> &mdash;Gloria Steinem',
        '&ldquo;I do not wish [women] to have power over men; but over themselves.&rdquo; <br /> &mdash;Mary Wollstonecraft',
        '&ldquo;When a woman becomes her own best friend life is easier.&rdquo; <br /> &mdash;Diane Von F&uuml;rstenberg',
        '&ldquo;Fitting in is boring. But it takes you nearly your whole life to work that out.&rdquo; <br /> &mdash;Clare Balding',
        '&ldquo;Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.&rdquo; <br /> &mdash;Marie Curie',
        '&ldquo;It&rsquo;s better to look ahead and prepare than to look back and regret.&rdquo; <br /> &mdash;Jackie Joyner-Kersee',
        '&ldquo;Treating women with respect should not be contingent on whether or not it &lsquo;gets you somewhere&rsquo;.&rdquo; <br /> &mdash;Lindy West',
        '&ldquo;You don&rsquo;t know a woman until you have had a letter from her.&rdquo; <br /> &mdash;Ada Leverson',
        '&ldquo;I never lose sight of the fact that just being is fun.&rdquo; <br /> &mdash;Katharine Hepburn',
        '&ldquo;In a time of destruction, create something.&rdquo; <br /> &mdash;Maxine Hong Kingston',
        '&ldquo;Love and kindness go hand in hand.&rdquo; <br /> &mdash;Marian Keyes',
        '&ldquo;Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.&rdquo; <br /> &mdash;Amelia Earhart',
        '&ldquo;One hour of right-down love is worth an age of dully living on.&rdquo; <br /> &mdash;Aphra Behn',
        '&ldquo;The more you practice, the better. But in any case, practice more than you play.&rdquo; <br /> &mdash;Babe Didrikson Zaharias',
        '&ldquo;Your victory is right around the corner. Never give up.&rdquo; <br /> &mdash;Nicki Minaj',
        '&ldquo;We are not interested in the possibilities of defeat; they do not exist.&rdquo; <br /> &mdash;Queen Victoria',
        '&ldquo;Dare to be as physically robust and varied as you always were.&rdquo; <br /> &mdash;Susie Orbach',
        '&ldquo;I don&rsquo;t focus on what I&rsquo;m up against. I focus on my goals and I try to ignore the rest.&rdquo; <br /> &mdash;Venus Williams',
        '&ldquo;Personal size and mental sorrow have certainly no necessary proportions. A large bulky figure has as good a right to be in deep affliction, as the most graceful set of limbs in the world.&rdquo; <br /> &mdash;Jane Austen',
        '&ldquo;Be brutally frank with yourself. It&rsquo;s safer.&rdquo; <br /> &mdash;Nellie Bly',
        '&ldquo;We are the hero of our own story.&rdquo; <br /> &mdash;Mary McCarthy',
        '&ldquo;We ask ourselves, &lsquo;Who am I to be brilliant, gorgeous, talented, fabulous?&rsquo; Actually, who are you not to be?&rdquo; <br /> &mdash;Marianne Williamson',
        '&ldquo;Many receive advice, only the wise profit from it.&rdquo; <br /> &mdash;Harper Lee',
    ]

    let feministQuotes = feministArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let feministQuote = feministQuotes[0]

    let feminist = `<p>${feministQuote}</p>`

    $('#feminist').html(feminist)
})