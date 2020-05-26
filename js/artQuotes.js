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
        '&ldquo;The rule in the art world is: you cater to the masses or you kowtow to the elite; you can&rsquo;t have both.&rdquo; <br /> &mdash;Ben Hecht',
        '&ldquo;I cry out for order and find it only in art.&rdquo; <br /> &mdash;Helen Hayes',
        '&ldquo;Fiction reveals truths that reality obscures.&rdquo; <br /> &mdash;Jessamyn West',
        '&ldquo;Art washes away from the soul the dust of everyday life.&rdquo; <br /> &mdash;Pablo Picasso',
        '&ldquo;Culture is the arts elevated to a set of beliefs.&rdquo; <br /> &mdash;Thomas Wolfe',
        '&ldquo;An artist cannot fail; it is a success to be one.&rdquo; <br /> &mdash;Charles Horton Cooley',
        '&ldquo;The excellency of every art is its intensity, capable of making all disagreeable evaporate.&rdquo; <br /> &mdash;John Keats',
        '&ldquo;Just as the bird sings or the butterfly soars, because it is his natural characteristic, so the artist works.&rdquo; <br /> &mdash;Alma Gluck',
        '&ldquo;An empty canvas is a living wonder... far lovelier than certain pictures.&rdquo; <br /> &mdash;Wassily Kandinsky',
        '&ldquo;What is art but a way of seeing?&rdquo; <br /> &mdash;Saul Bellow',
        '&ldquo;Art consists of limitation. The most beautiful part of every picture is the frame.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;Things are beautiful if you love them.&rdquo; <br /> &mdash;Jean Anouilh',
        '&ldquo;It&rsquo;s a moment that I&rsquo;m after, a fleeting moment, but not a frozen moment.&rdquo; <br /> &mdash;Andrew Wyeth',
        '&ldquo;Only through art can we emerge from ourselves and know what another person sees.&rdquo; <br /> &mdash;Marcel Proust',
        '&ldquo;You begin with the possibilities of the material.&rdquo; <br /> &mdash;Robert Rauschenberg',
        '&ldquo;The artist must bow to the monster of his own imagination.&rdquo; <br /> &mdash;Richard Wright',
        '&ldquo;A photograph is usually looked at &ndash; seldom looked into.&rdquo; <br /> &mdash;Ansel Adams',
        '&ldquo;Art is the unceasing effort to compete with the beauty of flowers &ndash; and never succeeding.&rdquo; <br /> &mdash;Gian Carlo Menotti',
        '&ldquo;I am an artist... I am here to live out loud.&rdquo; <br /> &mdash;Emile Zola',
        '&ldquo;Impressionism; it is the birth of Light in painting.&rdquo; <br /> &mdash;Robert Delaunay',
        '&ldquo;Paint the essential character of things.&rdquo; <br /> &mdash;Camille Pissarro',
        '&ldquo;When I draw something, the brain and the hands work together.&rdquo; <br /> &mdash;Tadao Ando',
        '&ldquo;I have no fear of making changes, destroying the image, etc., because the painting has a life of its own.&rdquo; <br /> &mdash;Jackson Pollock',
        '&ldquo;I will preach with my brush.&rdquo; <br /> &mdash;Henry Ossawa Tanner',
        '&ldquo;I put my heart and my soul into my work, and have lost my mind in the process.&rdquo; <br /> &mdash;Vincent Van Gogh',
        '&ldquo;With color one obtains an energy that seems to stem from witchcraft.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;I paint as if I were Rothschild.&rdquo; <br /> &mdash;Paul Cezanne',
        '&ldquo;Painting is a source of endless pleasure, but also of great anguish.&rdquo; <br /> &mdash;Balthus',
        '&ldquo;Don&rsquo;t pay any attention to what they write about you. Just measure it in inches.&rdquo; <br /> &mdash;Andy Warhol',
        // March Quotes
        '&ldquo;Every picture shows a spot with which the artist has fallen in love.&rdquo; <br /> &mdash;Alfred Sisley',
        '&ldquo;An empty canvas is full.&rdquo; <br /> &mdash;Robert Rauschenberg',
        '&ldquo;Rationalism is the enemy of art, though necessary as a basis for architecture.&rdquo; <br /> &mdash;Arthur Erickson',
        '&ldquo;A great artist can paint a great picture on a small canvas.&rdquo; <br /> &mdash;Charles Dudley Warner',
        '&ldquo;Photograph: a picture painted by the sun without instruction in art.&rdquo; <br /> &mdash;Ambrose Bierce',
        '&ldquo;A man paints with his brains and not with his hands.&rdquo; <br /> &mdash;Michelangelo',
        '&ldquo;Filmmaking can be a fine art.&rdquo; <br /> &mdash;Terri Windling',
        '&ldquo;The philistine provides the best definition of art. Anything that makes him rage is first class.&rdquo; <br /> &mdash;Louis Dudek',
        '&ldquo;Creativity takes courage.&rdquo; <br /> &mdash;Henri Matisse',
        '&ldquo;Minimalism wasn&rsquo;t a real idea &ndash; it ended before it started.&rdquo; <br /> &mdash;Sol LeWitt',
        '&ldquo;Art is the final cunning of the human soul which would rather do anything than face the gods.&rdquo; <br /> &mdash;Iris Murdoch',
        '&ldquo;To curb the machine and limit art to handicraft is a denial of opportunity.&rdquo; <br /> &mdash;Lewis Mumford',
        '&ldquo;What I didn&rsquo;t know was I was deeply attracted to the big space.&rdquo; <br /> &mdash;David Hockney',
        '&ldquo;Life beats down and crushes the soul and art reminds you that you have one.&rdquo; <br /> &mdash;Stella Adler',
        '&ldquo;I don&rsquo;t believe in art. I believe in artists.&rdquo; <br /> &mdash;Marcel Duchamp',
        '&ldquo;No great art has even been made without the artist having known danger.&rdquo; <br /> &mdash;Rainer Maria Rilke',
        '&ldquo;No heirloom of humankind captures the past as do art and language.&rdquo; <br /> &mdash;Theodore Bikel',
        '&ldquo;To paint is a possessing rather than a picturing.&rdquo; <br /> &mdash;Philip Guston',
        '&ldquo;Painting is the passage from the chaos of the emotions to the order of the possible.&rdquo; <br /> &mdash;Balthus',
        '&ldquo;There is nothing new in art except talent.&rdquo; <br /> &mdash;Anton Chekhov',
        '&ldquo;There is a role and function for beauty in our time.&rdquo; <br /> &mdash;Tadao Ando',
        '&ldquo;Rules and models destroy genius and art.&rdquo; <br /> &mdash;William Hazlitt',
        '&ldquo;A drawing is simply a line going for a walk.&rdquo; <br /> &mdash;Paul Klee',
        '&ldquo;I hope to live all my life for my art, without abandoning my principles one iota.&rdquo; <br /> &mdash;Gustave Courbet',
        '&ldquo;Photography is a major force in explaining man to man.&rdquo; <br /> &mdash;Edward Steichen',
        '&ldquo;I never paint dreams or nightmares. I paint my own reality.&rdquo; <br /> &mdash;Frida Kahlo',
        '&ldquo;Painting from nature is not copying the object; it is realizing one&rsquo;s sensations.&rdquo; <br /> &mdash;Paul Cezanne',
        '&ldquo;Art must take reality by surprise.&rdquo; <br /> &mdash;Francoise Sagan',
        '&ldquo;Artistic temperament is the disease that afflicts amateurs.&rdquo; <br /> &mdash;Gilbert K. Chesterton',
        '&ldquo;The artist vocation is to send light into the human heart.&rdquo; <br /> &mdash;George Sand',
        '&ldquo;From now on, I&rsquo;ll connect the dots my own way.&rdquo; <br /> &mdash;Bill Watterson',
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