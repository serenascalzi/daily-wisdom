$(document).ready(function() {
    let variedArray = [
		// January Quotes
        '&ldquo;I think in terms of the day&rsquo;s resolutions, not the years&rsquo;.&rdquo; <br /> &mdash;Henry Moore',
        '&ldquo;The sweetest of all sounds is praise.&rdquo; <br /> &mdash;Xenophon',
        '&ldquo;We must be willing to let go of the life we have planned, so as to have the life that is waiting for us.&rdquo; <br /> &mdash;E. M. Forster',
        '&ldquo;If youth knew; if age could.&rdquo; <br /> &mdash;Sigmund Freud',
        '&ldquo;The art of being happy lies in the power of extracting happiness from common things.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;There is nothing which we receive with so much reluctance as advice.&rdquo; <br /> &mdash;Joseph Addison',
        '&ldquo;Believe and act as if it were impossible to fail.&rdquo; <br /> &mdash;Charles Kettering',
        '&ldquo;Defeat may serve as well as victory to shake the soul and let the glory out.&rdquo; <br /> &mdash;Edwin Markham',
        '&ldquo;The person who can bring the spirit of laughter into a room is indeed blessed.&rdquo; <br /> &mdash;Bennett Cerf',
        '&ldquo;Our character is what we do when we think no one is looking.&rdquo; <br /> &mdash;H. Jackson Brown, Jr.',
        '&ldquo;We cannot put off living until we are ready.&rdquo; <br /> &mdash;Jose Ortega y Gasset',
        '&ldquo;Millions saw the apple fall, but Newton was the one who asked why.&rdquo; <br /> &mdash;Bernard Baruch',
        '&ldquo;Anger cannot be dishonest.&rdquo; <br /> &mdash;Marcus Aurelius',
        '&ldquo;If you find it in your heart to care for somebody else, you will have succeeded.&rdquo; <br /> &mdash;Maya Angelou',
        '&ldquo;Wherever there is a human being, there is an opportunity for a kindness.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;The price of greatness is responsibility.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;Thousands of geniuses live and die undiscovered &ndash; either by themselves or by others.&rdquo; <br /> &mdash;Mark Twain',
        '&ldquo;There are those who give with joy, and that joy is their reward.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;A certain amount of opposition is a great help to a man. Kites rise against, not with, the wind.&rdquo; <br /> &mdash;Lewis Mumford',
        '&ldquo;Failure is success if we learn from it.&rdquo; <br /> &mdash;Malcolm Forbes',
        '&ldquo;We are not makers of history. We are made by history.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        '&ldquo;And that&rsquo;s the way it is.&rdquo; <br /> &mdash;Walter Cronkite',
        '&ldquo;It&rsquo;s better to be a lion for a day than a sheep all your life.&rdquo; <br /> &mdash;Elizabeth Kenny',
        '&ldquo;Don&rsquo;t think, just do.&rdquo; <br /> &mdash;Horace',
        '&ldquo;It is not how old you are, but how you are old.&rdquo; <br /> &mdash;Jules Renard',
        '&ldquo;Without wearing any mask we are conscious of, we have a special face for each friend.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        '&ldquo;Our entire life &ndash; consists ultimately in accepting ourselves as we are.&rdquo; <br /> &mdash;Jean Anouilh',
        '&ldquo;Peace is its own reward.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;Music is moonlight in the gloomy night of life.&rdquo; <br /> &mdash;Jean Paul',
        '&ldquo;A man who gives his children habits of industry provides for them better than by giving them fortune.&rdquo; <br /> &mdash;Richard Whately',
        '&ldquo;We must make the best of those ills which cannot be avoided.&rdquo; <br /> &mdash;Clarence Day',
        // February Quotes
        // March Quotes
        // April Quotes
        // May Quotes
        // June Quotes
        // July Quotes
        // August Quotes
        // September Quotes
        // October Quotes
        // November Quotes
        // December Quotes
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)
})