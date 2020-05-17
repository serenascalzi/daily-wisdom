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
    ]

    let feministQuotes = feministArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let feministQuote = feministQuotes[0]

    let feminist = `<p>${feministQuote}</p>`

    $('#feminist').html(feminist)
})