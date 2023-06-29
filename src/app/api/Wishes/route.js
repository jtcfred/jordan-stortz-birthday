

export async function GET(request) {

    const testimonials = [
        {
          heading: '10/10 Girlfriend',
          text: 'Happy Birthday Jordan! I am so lucky to be with you! I hope your birthday is epic B)',
          name: 'Jackson',
          title: 'Author of this website',
        },
        {
          heading: 'Intuitive Design',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
          name: 'John Doe',
          title: 'Designer',
        },
        {
          heading: 'Mindblowing Service',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
          name: 'Emily Smith',
          title: 'Customer Support',
        },
      ];

    return new Response(JSON.stringify(testimonials));
}