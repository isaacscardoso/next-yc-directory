import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: 'Isaac Cardoso Silva',
      },
      _id: 1,
      description: 'This is a description',
      image: 'https://b3747556.smushcdn.com/3747556/wp-content/uploads/2024/06/5-2.jpg?lossy=2&strip=1&webp=1',
      category: 'Robots',
      title: 'We Robots',
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 2,
        name: 'Moema Cardoso Silva',
      },
      _id: 2,
      description: 'This is a description',
      image: 'https://b3747556.smushcdn.com/3747556/wp-content/uploads/2024/06/5-2.jpg?lossy=2&strip=1&webp=1',
      category: 'Robots',
      title: 'We Robots',
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br/>
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={ query }/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          { query ? `Search results for "${ query }"` : 'All Startups' }
        </p>

        <ul className="mt-7 card_grid">
          { posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={ post?._id } post={ post }/>
            ))
          ) : (
            <p className="no-results">No startups found!</p>
          ) }
        </ul>
      </section>
    </>
  );
}
