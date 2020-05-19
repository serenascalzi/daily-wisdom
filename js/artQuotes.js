$(document).ready(function() {
    let artArray = [
		// January Quotes
        '&ldquo;I make pictures and someone comes in and calls it art.&rdquo; <br /> &mdash;Willem de Kooning',
        '&ldquo;I think it is in collaboration that the nature of art is revealed.&rdquo; <br /> &mdash;Steve Lacy',
        '&ldquo;Art is the only way to run away without leaving home.&rdquo; <br /> &mdash;Twyla Tharp',
        '&ldquo;Art is science made clear.&rdquo; <br /> &mdash;Wilson Mizner',
        '&ldquo;Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.&rdquo; <br /> &mdash;Scott Adams',
        '&ldquo;I&rsquo;m not that obsessed with making representations of ugliness. Everything I&rsquo;ve seen is beautiful.&rdquo; <br /> &mdash;Otto Dix',
        '&ldquo;Advertising is the greatest art form of the 20th century.&rdquo; <br /> &mdash;Marshall McLuhan',
        '&ldquo;Fine art is that in which the hand, the head, and the heart of man go together.&rdquo; <br /> &mdash;John Ruskin',
        '&ldquo;An original artist is unable to copy. So he has only to copy in order to be original.&rdquo; <br /> &mdash;Jean Cocteau',
        '&ldquo;The modern work of art, as I have said, is a symbol.&rdquo; <br /> &mdash;Herbert Read',
        '&ldquo;If you know somethin&rsquo; well, you can always paint it but people would be better off buyin&rsquo; chickens.&rdquo; <br /> &mdash;Grandma Moses',
        '&ldquo;It may be that the deep necessity of art is the examination of self-deception.&rdquo; <br /> &mdash;Robert Motherwell',
        '&ldquo;It is only an auctioneer who can equally and impartially admire all schools of art.&rdquo; <br /> &mdash;Oscar Wilde',
        '&ldquo;Art is the stored honey of the human soul, gathered on wings of misery and travail.&rdquo; <br /> &mdash;Theodore Dreiser',
        '&ldquo;Art is the triumph over chaos.&rdquo; <br /> &mdash;John Cheever',
        '&ldquo;I&rsquo;m afraid that if you look at a thing long enough, it loses all of its meaning.&rdquo; <br /> &mdash;Andy Warhol',
        '&ldquo;Artists who seek perfection in everything are those who cannot attain it in anything.&rdquo; <br /> &mdash;Gustave Flaubert',
        '&ldquo;Art, like morality, consists in drawing the line somewhere.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;Most works of art, like most wines, ought to be consumed in the district of their fabrication.&rdquo; <br /> &mdash;Simone Weil',
        '&ldquo;If I didn&rsquo;t choose art, I would have become an astronomer.&rdquo; <br /> &mdash;Peter Max',
        '&ldquo;The artist belongs to his work, not the work to the artist.&rdquo; <br /> &mdash;Novalis',
        '&ldquo;An artist is he for whom the goal and center of life is to form his mind.&rdquo; <br /> &mdash;Karl Wilhelm Friedrich Schlegel',
        '&ldquo;In art the best is good enough.&rdquo; <br /> &mdash;Johann Wolfgang von Goethe',
        '&ldquo;All art is a struggle to be, in a particular sort of way, virtuous.&rdquo; <br /> &mdash;Iris Murdoch',
        '&ldquo;Artists are, above all, men who want to become inhuman.&rdquo; <br /> &mdash;Guillaume Apollinaire',
        '&ldquo;I decided that if I could paint that flower in a huge scale, you could not ignore its beauty.&rdquo; <br /> &mdash;Georgia O&rsquo;Keeffe',
        '&ldquo;I really believe there are things nobody would see if I didn&rsquo;t photograph them.&rdquo; <br /> &mdash;Diane Arbus',
        '&ldquo;The great artist is a slave to his ideals.&rdquo; <br /> &mdash;Christian Nestell Bovee',
        '&ldquo;Art is a collaboration between God and the artist, and the less the artist does the better.&rdquo; <br /> &mdash;Andre Gide',
        '&ldquo;It is the addition of strangeness to beauty that constitutes the romantic character in art.&rdquo; <br /> &mdash;Walter Hagen',
        '&ldquo;Art is Art. Everything else is everything else.&rdquo; <br /> &mdash;Ad Reinhardt',
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

    let artQuotes = artArray.sort(function(a,b) {
    	return 0.5 - Math.random()
    })

    let artQuote = artQuotes[0]

    let art = `<p>${artQuote}</p>`

    $('#art').html(art)
})