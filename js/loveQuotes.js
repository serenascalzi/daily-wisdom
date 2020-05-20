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
        '&ldquo;Love implies anger. The man who is angered by nothing cares about nothing.&rdquo; <br /> &mdash;Edward Abbey',
        '&ldquo;I wonder what fool it was that first invented kissing.&rdquo; <br /> &mdash;Jonathan Swift',
        '&ldquo;Gestures, in love, are incomparably more attractive, effective and valuable than words.&rdquo; <br /> &mdash;Francois Rabelais',
        '&ldquo;Love is a better teacher than duty.&rdquo; <br /> &mdash;Albert Einstein',
        '&ldquo;My little dog &ndash; a heartbeat at my feet.&rdquo; <br /> &mdash;Edith Wharton',
        '&ldquo;Love in its essence is spiritual fire.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
        '&ldquo;Woe to the man whose heart has not learned while young to hope, to love &ndash; and to put its trust in life.&rdquo; <br /> &mdash;Joseph Conrad',
        '&ldquo;Only do what your heart tells you.&rdquo; <br /> &mdash;Princess Diana',
        '&ldquo;True love is quiescent, except in the nascent moments of true humility.&rdquo; <br /> &mdash;Bryant H. McGill',
        '&ldquo;Love is metaphysical gravity.&rdquo; <br /> &mdash;R. Buckminster Fuller',
        '&ldquo;Love is always being given where it is not required.&rdquo; <br /> &mdash;E. M. Forster',
        '&ldquo;Love shall be our token; love be yours and love be mine.&rdquo; <br /> &mdash;Christina Rossetti',
        '&ldquo;To love one that is great, is almost to be great one&rsquo;s self.&rdquo; <br /> &mdash;Samuel Johnson',
        '&ldquo;Whatever our souls are made of, his and mine are the same.&rdquo; <br /> &mdash;Emily Bronte',
        '&ldquo;The love that lasts longest is the love that is never returned.&rdquo; <br /> &mdash;W. Somerset Maugham',
        '&ldquo;I am in you and you in me, mutual in divine love.&rdquo; <br /> &mdash;William Blake',
        '&ldquo;Because of a great love, one is courageous.&rdquo; <br /> &mdash;Lao Tzu',
        '&ldquo;To fail to love is not to exist at all.&rdquo; <br /> &mdash;Mark Van Doren',
        '&ldquo;So the lover must struggle for words.&rdquo; <br /> &mdash;T. S. Eliot',
        '&ldquo;Love is a sacred reserve of energy; it is like the blood of spiritual evolution.&rdquo; <br /> &mdash;Pierre Teilhard de Chardin',
        '&ldquo;First love is only a little foolishness and a lot of curiosity.&rdquo; <br /> &mdash;George Bernard Shaw',
        '&ldquo;Love takes up where knowledge leaves off.&rdquo; <br /> &mdash;Thomas Aquinas',
        '&ldquo;A kiss is a rosy dot over the &lsquo;i&rsquo; of loving.&rdquo; <br /> &mdash;Cyrano de Bergerac',
        '&ldquo;The sound of a kiss is not so loud as that of a cannon, but its echo lasts a great deal longer.&rdquo; <br /> &mdash;Oliver Wendell Holmes, Sr.',
        '&ldquo;One forgives to the degree that one loves.&rdquo; <br /> &mdash;Francois de La Rochefoucauld',
        '&ldquo;Love possesses not nor will it be possessed, for love is sufficient unto love.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;I think you have to pay for love with bitter tears.&rdquo; <br /> &mdash;Edith Piaf',
        '&ldquo;Try as you will, you cannot annihilate that eternal relic of the human heart, love.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Love is the flower you&rsquo;ve got to let grow.&rdquo; <br /> &mdash;John Lennon',
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