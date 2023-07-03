

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

export async function GET() {

    return new Response(JSON.stringify(testimonials));
}

export async function POST(request) {

    try {
        const requestBody = await request.json();
        const newTestimonial = {
          heading: requestBody.heading,
          text: requestBody.text,
          name: requestBody.name,
          title: requestBody.title,
        };
        testimonials.push(newTestimonial);
        return new Response('Testimonial added successfully', { status: 201 });
    } catch (error) {
        console.error('Error adding testimonial:', error);
        return new Response('Failed to add testimonial', { status: 500 });
    }
    
}