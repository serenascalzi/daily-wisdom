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
        '&ldquo;Every failure is a step to success.&rdquo; <br /> &mdash;William Whewell',
        '&ldquo;Kites rise highest against the wind &ndash; not with it.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;When your work speaks for itself, don&rsquo;t interrupt.&rdquo; <br /> &mdash;Henry J. Kaiser',
        '&ldquo;You may delay, but time will not.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;Dreams are necessary to life.&rdquo; <br /> &mdash;Anais Nin',
        '&ldquo;What sculpture is to a block of marble, education is to the soul.&rdquo; <br /> &mdash;Joseph Addison',
        '&ldquo;I am still learning.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;Curiosity will conquer fear even more than bravery will.&rdquo; <br /> &mdash;James Stephens',
        '&ldquo;Words are but the signs of ideas.&rdquo; <br /> &mdash;Samuel Johnson',
        '&ldquo;Be faithful to that which exists within yourself.&rdquo; <br /> &mdash;Andre Gide',
        '&ldquo;Man is so made that when anything fires his soul, impossibilities vanish.&rdquo; <br /> &mdash;Jean de La Fontaine',
        '&ldquo;Just as a candle cannot burn without fire, men cannot live without a spiritual life.&rdquo; <br /> &mdash;Buddha',
        '&ldquo;The only way to discover the limits of the possible is to go beyond them into the impossible.&rdquo; <br /> &mdash;Arthur C. Clarke',
        '&ldquo;Love the giver more than the gift.&rdquo; <br /> &mdash;Brigham Young',
        '&ldquo;Friendship is Love without his wings!&rdquo; <br /> &mdash;Lord Byron',
        '&ldquo;It&rsquo;s always too early to quit.&rdquo; <br /> &mdash;Norman Vincent Peale',
        '&ldquo;A man is but the product of his thoughts what he thinks, he becomes.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;There are many ways of going forward, but only one way of standing still.&rdquo; <br /> &mdash;Franklin D. Roosevelt',
        '&ldquo;Little minds are tamed and subdued by misfortune; but great minds rise above them.&rdquo; <br /> &mdash;Washington Irving',
        '&ldquo;I didn&rsquo;t think; I experimented.&rdquo; <br /> &mdash;Anthony Burgess',
        '&ldquo;Ideas shape the course of history.&rdquo; <br /> &mdash;John Maynard Keynes',
        '&ldquo;Reason is God&rsquo;s crowning gift to man.&rdquo; <br /> &mdash;Sophocles',
        '&ldquo;The world of reality has its limits; the world of imagination is boundless.&rdquo; <br /> &mdash;Jean-Jacques Rousseau',
        '&ldquo;It is the fight alone that pleases us, not the victory.&rdquo; <br /> &mdash;Blaise Pascal',
        '&ldquo;They can conquer who believe they can.&rdquo; <br /> &mdash;Virgil',
        '&ldquo;A cloudy day is no match for a sunny disposition.&rdquo; <br /> &mdash;William Arthur Ward',
        '&ldquo;Time passes irrevocably.&rdquo; <br /> &mdash;Virgil',
        '&ldquo;You can never plan the future by the past.&rdquo; <br /> &mdash;Edmund Burke',
        '&ldquo;You grow up the day you have the first real laugh at yourself.&rdquo; <br /> &mdash;Ethel Barrymore',
        // March Quotes
        '&ldquo;Everything&rsquo;s got a moral, if only you can find it.&rdquo; <br /> &mdash;Lewis Carroll',
        '&ldquo;The whole secret of life is to be interested in one thing profoundly and in a thousand things well.&rdquo; <br /> &mdash;Horace Walpole',
        '&ldquo;Everything has been figured out, expect how to live.&rdquo; <br /> &mdash;Jean-Paul Sartre',
        '&ldquo;The more refined and subtle our minds, the more vulnerable they are.&rdquo; <br /> &mdash;Paul Tournier',
        '&ldquo;When you doubt, abstain.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;The art of writing is the art of discovering what you believe.&rdquo; <br /> &mdash;Gustave Flaubert',
        '&ldquo;Prosperity tries the fortunate, adversity the great.&rdquo; <br /> &mdash;Rose Kennedy',
        '&ldquo;What is called genius is the abundance of life and health.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;A good laugh is sunshine in the house.&rdquo; <br /> &mdash;William Makepeace Thackeray',
        '&ldquo;Never in the field of human conflict was so much owed by so many to so few.&rdquo; <br /> &mdash;Winston Churchill',
        '&ldquo;At times I think and at times I am.&rdquo; <br /> &mdash;Paul Valery',
        '&ldquo;Courage is the ladder on which all the other virtues mount.&rdquo; <br /> &mdash;Clare Boothe Luce',
        '&ldquo;To live is to think.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;Every burden is a blessing.&rdquo; <br /> &mdash;Walt Kelly',
        '&ldquo;The secret of happiness is something to do.&rdquo; <br /> &mdash;John Burroughs',
        '&ldquo;The true art of memory is the art of attention.&rdquo; <br /> &mdash;Samuel Johnson',
        '&ldquo;Think where man&rsquo;s glory most begins and ends, and say my glory was I had such friends.&rdquo; <br /> &mdash;William Butler Yeats',
        '&ldquo;Peace and justice are two sides of the same coin.&rdquo; <br /> &mdash;Dwight D. Eisenhower',
        '&ldquo;Plodding wins the race.&rdquo; <br /> &mdash;Aesop',
        '&ldquo;To hold a pen is to be at war.&rdquo; <br /> &mdash;Voltaire',
        '&ldquo;Pennies do not come from heaven. They have to be earned here on earth.&rdquo; <br /> &mdash;Margaret Thatcher',
        '&ldquo;In fair weather prepare for foul.&rdquo; <br /> &mdash;Thomas Fuller',
        '&ldquo;The man who is swimming against the stream knows the strength of it.&rdquo; <br /> &mdash;Woodrow Wilson',
        '&ldquo;There is nothing like a dream to create the future.&rdquo; <br /> &mdash;Victor Hugo',
        '&ldquo;Never forget the three powerful resources you always have available to you: love, prayer, and forgiveness.&rdquo; <br /> &mdash;H. Jackson Brown, Jr.',
        '&ldquo;Silence is the mother of truth.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;The best way to keep your friends is not to give them away.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;Everything that is beautiful and noble is the product of reason and calculation.&rdquo; <br /> &mdash;Charles Baudelaire',
        '&ldquo;The more things change, the more they are the same.&rdquo; <br /> &mdash;Alphonse Karr',
        '&ldquo;Words are, of course, the most powerful drug used by mankind.&rdquo; <br /> &mdash;Rudyard Kipling',
        '&ldquo;Tact is the ability to describe others as they see themselves.&rdquo; <br /> &mdash;Abraham Lincoln',
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