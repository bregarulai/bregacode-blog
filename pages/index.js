import Head from 'next/head'

const posts = [
  {
    title: 'React Testing',
    excerpt: 'Learn React Testing.'
  },
  {
    title: 'React with Tailwind',
    excerpt: 'Learn React with Tailwind.'
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bregacode Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>

        {
          posts.map((post, index) => (
            <div key={index}>
             {post.title}
            {post.excerpt}
             
            </div>

          ))
        }
        </div>
        <div className='lg:cols-span-4 cols-span-1'>

        </div>
      </div>
    </div>
  )
}
