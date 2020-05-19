$(document).ready(function() {
    let loveArray = [
		// January Quotes
        '&ldquo;The giving of love is an education in itself.&rdquo; <br /> &mdash;Eleanor Roosevelt',
        '&ldquo;Dear Lord, I&rsquo;m so grateful I&rsquo;m still loved.&rdquo; <br /> &mdash;Vivien Leigh',
        '&ldquo;Love means to commit yourself without guarantee.&rdquo; <br /> &mdash;Anne Campbell',
        '&ldquo;Oh, love will make a dog howl in rhyme.&rdquo; <br /> &mdash;Francis Beaumont',
        '&ldquo;Love is when you meet someone who tells you something new about yourself.&rdquo; <br /> &mdash;Andre Breton',
        '&ldquo;When we are in love we often doubt that which we most believe.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        '&ldquo;If fear is the great enemy of intimacy, love is its true friend.&rdquo; <br /> &mdash;Henri Nouwen',
        '&ldquo;The only abnormality is the incapacity to love.&rdquo; <br /> &mdash;Anais Nin',
        '&ldquo;Love is like the measles; we all have to go through it.&rdquo; <br /> &mdash;Jerome K. Jerome',
        '&ldquo;I can live without money, but I cannot live without love.&rdquo; <br /> &mdash;Judy Garland',
        '&ldquo;The inner reality of love can be recognized only by love.&rdquo; <br /> &mdash;Hans Urs von Balthasar',
        '&ldquo;Lovers have a right to betray you&hellip;friends don&rsquo;t.&rdquo; <br /> &mdash;Judy Holliday',
        '&ldquo;Love is when he gives you a piece of your soul, that you never knew was missing.&rdquo; <br /> &mdash;Torquato Tasso',
        '&ldquo;If there&rsquo;s delight in love, &rsquo;Tis when I see that heart, which others bleed for, bleed for me.&rdquo; <br /> &mdash;William Congreve',
        '&ldquo;We cease loving ourselves if no one loves us.&rdquo; <br /> &mdash;Madame de Stael',
        '&ldquo;To love and win is the best thing. To love and lose, the next best.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        '&ldquo;Looking back, I have this to regret, that too often when I loved, I did not say so.&rdquo; <br /> &mdash;Ray Stannard Baker',
        '&ldquo;The only love affair I have ever had was with music.&rdquo; <br /> &mdash;Maurice Ravel',
        '&ldquo;Age does not protect you from love. But love, to some extent, protects you from age.&rdquo; <br /> &mdash;Jeanne Moreau',
        '&ldquo;Love is space and time measured by the heart.&rdquo; <br /> &mdash;Marcel Proust',
        '&ldquo;At the center of non-violence stands the principle of love.&rdquo; <br /> &mdash;Martin Luther King, Jr.',
        '&ldquo;To fear love is to fear life, and those who fear life are already three parts dead.&rdquo; <br /> &mdash;Bertrand Russell',
        '&ldquo;Marriage may be the closest thing to Heaven or Hell any of us will know on this earth.&rdquo; <br /> &mdash;Edwin Louis Cole',
        '&ldquo;A kiss that is never tasted, is forever and ever wasted.&rdquo; <br /> &mdash;Billie Holiday',
        '&ldquo;Loved. You can&rsquo;t use it in the past tense. Death does not stop that love at all.&rdquo; <br /> &mdash;Ken Kesey',
        '&ldquo;Who is wise in love, love most, say least.&rdquo; <br /> &mdash;Alfred Lord Tennyson',
        '&ldquo;In every man&rsquo;s heart there is a secret nerve that answers to the vibrations of beauty.&rdquo; <br /> &mdash;Christopher Morley',
        '&ldquo;When we lose one we love, our bitterest tears are called forth by the memory of hours when we loved not enough.&rdquo; <br /> &mdash;Maurice Maeterlinck',
        '&ldquo;At the touch of love everyone becomes a poet.&rdquo; <br /> &mdash;Plato',
        '&ldquo;Accustom yourself continually to make many acts of love, for they enkindle and melt the soul.&rdquo; <br /> &mdash;Saint Teresa of Avila',
        '&ldquo;I was adored once too.&rdquo; <br /> &mdash;William Shakespeare',
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

    let loveQuotes = loveArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let loveQuote = loveQuotes[0]

    let love = `<p>${loveQuote}</p>`

    $('#love').html(love)
})