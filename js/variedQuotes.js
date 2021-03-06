$(document).ready(function() {
    let variedArray = [
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
        '&ldquo;Here cometh April again, and as far as I can see the world hath more fools in it than ever.&rdquo; <br /> &mdash;Charles Lamb',
        '&ldquo;Worry never robs tomorrow of its sorrow, it only saps today of its joy.&rdquo; <br /> &mdash;Leo Buscaglia',
        '&ldquo;The wisdom of the wise and the experience of the ages are perpetuated by quotations.&rdquo; <br /> &mdash;Benjamin Disraeli',
        '&ldquo;A pure hand needs no glove to cover it.&rdquo; <br /> &mdash;Nathaniel Hawthorne',
        '&ldquo;They always say time changes things, but you actually have to change them yourself.&rdquo; <br /> &mdash;Andy Warhol',
        '&ldquo;The most effective way to do it, is to do it.&rdquo; <br /> &mdash;Amelia Earhart',
        '&ldquo;If you can&rsquo;t feed a hundred people, then feed just one.&rdquo; <br /> &mdash;Mother Teresa',
        '&ldquo;The present time has one advantage over every other &ndash; it is our own.&rdquo; <br /> &mdash;Charles Caleb Colton',
        '&ldquo;Life is but thought.&rdquo; <br /> &mdash;Sara Teasdale',
        '&ldquo;Every charitable act is a stepping stone toward heaven.&rdquo; <br /> &mdash;Henry Ward Beecher',
        '&ldquo;Progress lies not in enhancing what is, but in advancing toward what will be.&rdquo; <br /> &mdash;Khalil Gibran',
        '&ldquo;We are no longer happy so soon as we wish to be happier.&rdquo; <br /> &mdash;Walter Savage Landor',
        '&ldquo;All the art of living lies in a fine mingling of letting go and holding on.&rdquo; <br /> &mdash;Havelock Ellis',
        '&ldquo;The boisterous sea of liberty is never without a wave.&rdquo; <br /> &mdash;Thomas Jefferson',
        '&ldquo;We have a system that increasingly taxes work and subsidizes nonwork.&rdquo; <br /> &mdash;Milton Friedman',
        '&ldquo;Never retreat. Never explain. Get it done and let them howl.&rdquo; <br /> &mdash;Benjamin Jowett',
        '&ldquo;The mystery of government is not how Washington works but how to make it stop.&rdquo; <br /> &mdash;P. J. O&rsquo;Rourke',
        '&ldquo;A penny saved is a penny earned.&rdquo; <br /> &mdash;Benjamin Franklin',
        '&ldquo;Experience is simply the name we give our mistakes.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.&rdquo; <br /> &mdash;Robert H. Goddard',
        '&ldquo;Easter is meant to be a symbol of hope, renewal, and new life.&rdquo; <br /> &mdash;Janine di Giovanni',
        '&ldquo;This is the most joyful day that ever I saw in my pilgrimage on earth.&rdquo; <br /> &mdash;Donald Cargill',
        '&ldquo;It is better to know some of the questions than all of the answers.&rdquo; <br /> &mdash;James Thurber',
        '&ldquo;Sweet mercy is nobility&rsquo;s true badge.&rdquo; <br /> &mdash;William Shakespeare',
        '&ldquo;Honest disagreement is often a good sign of progress.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;He has achieved success who has worked well, laughed often, and loved much.&rdquo; <br /> &mdash;Elbert Hubbard',
        '&ldquo;Perfection itself is imperfection.&rdquo; <br /> &mdash;Vladimir Horowitz',
        '&ldquo;How little do they see what really is, who frame their hasty judgment upon that which seems.&rdquo; <br /> &mdash;Daniel Webster',
        '&ldquo;I imagine that yes is the only living thing.&rdquo; <br /> &mdash;e. e. cummings',
        '&ldquo;People seldom refuse help, if one offers it in the right way.&rdquo; <br /> &mdash;A. C. Benson',
        '&ldquo;Forgiveness is a funny thing. It warms the heart and cools the sting.&rdquo; <br /> &mdash;William Arthur Ward',
        '&ldquo;I hear, I know. I see, I remember. I do, I understand.&rdquo; <br /> &mdash;Confucius',
        '&ldquo;When I pray, coincidences happen, and when I don&rsquo;t, they don&rsquo;t.&rdquo; <br /> &mdash;William Temple',
        '&ldquo;More law, less justice.&rdquo; <br /> &mdash;Marcus Tullius Cicero',
        '&ldquo;Even death is not to be feared by one who has lived wisely.&rdquo; <br /> &mdash;Buddha',
        '&ldquo;It would not be possible to praise nurses too highly.&rdquo; <br /> &mdash;Stephen Ambrose',
        '&ldquo;The Soul is the voice of the body&rsquo;s interests.&rdquo; <br /> &mdash;George Santayana',
        '&ldquo;All great achievements require time.&rdquo; <br /> &mdash;Maya Angelou',
        '&ldquo;Glory is fleeting, but obscurity is forever.&rdquo; <br /> &mdash;Napoleon Bonaparte',
        '&ldquo;The love of a mother is the veil of a softer light between the heart and the heavenly Father.&rdquo; <br /> &mdash;Samuel Taylor Coleridge',
        '&ldquo;Necessity dispenseth with decorum.&rdquo; <br /> &mdash;Thomas Carlyle',
        '&ldquo;He who angers you conquers you.&rdquo; <br /> &mdash;Elizabeth Kenny',
        '&ldquo;Everything popular is wrong.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;Real happiness is cheap enough, yet how dearly we pay for its counterfeit.&rdquo; <br /> &mdash;Hosea Ballou',
        '&ldquo;It is not the mountain we conquer but ourselves.&rdquo; <br /> &mdash;Edmund Hillary',
        '&ldquo;Words are often seen hunting for an idea, but ideas are never seen hunting for words.&rdquo; <br /> &mdash;Josh Billings',
        '&ldquo;Trouble shared is trouble halved.&rdquo; <br /> &mdash;Lee Iacocca',
        '&ldquo;If you can&rsquo;t stand the heat, get out of the kitchen.&rdquo; <br /> &mdash;Harry S. Truman',
        '&ldquo;Nothing makes one feel so strong as a call for help.&rdquo; <br /> &mdash;Pope Paul VI',
        '&ldquo;Fear is the mother of foresight.&rdquo; <br /> &mdash;Thomas Hardy',
        '&ldquo;We are all gifted. That is our inheritance.&rdquo; <br /> &mdash;Ethel Waters',
        '&ldquo;It&rsquo;s easy to make a buck. It&rsquo;s a lot tougher to make a difference.&rdquo; <br /> &mdash;Tom Brokaw',
        '&ldquo;Time is but the stream I go a-fishing in.&rdquo; <br /> &mdash;Henry David Thoreau',
        '&ldquo;Either move or be moved.&rdquo; <br /> &mdash;Ezra Pound',
        '&ldquo;You must be the change you wish to see in the world.&rdquo; <br /> &mdash;Mahatma Gandhi',
        '&ldquo;Courage is fear holding on a minute longer.&rdquo; <br /> &mdash;George S. Patton',
        '&ldquo;A friend may well be reckoned the masterpiece of nature.&rdquo; <br /> &mdash;Ralph Waldo Emerson'
    ]

    let variedQuotes = variedArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let variedQuote = variedQuotes[0]

    let varied = `<h3>${variedQuote}</h3>`

    $('#varied').html(varied)
})