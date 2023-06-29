

export async function GET(request) {

    const testimonials = [
        {
          heading: '10/10 Girlfriend',
          text: 'Happy Birthday Jordan! I am so lucky to be with you! I hope your birthday is epic :D',
          name: 'Jackson',
          title: 'Author of this website',
        },
        {
          heading: 'Great Friend',
          text: 'Bla bla bla something something happy birthday something',
          name: 'John Doe',
          title: 'Imaginary Friend',
        },
        {
          heading: 'She aight I guess',
          text: 'She let me borrow a pencil once',
          name: 'Harry Potter',
          title: 'Imaginary Friend',
        },
      ];

    return new Response(JSON.stringify(testimonials));
}