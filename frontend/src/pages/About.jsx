import Title from "../components/Title";

const About = () => {
  return (
    <div className="mt-24 mx-8">
      <div className="text-2xl mb-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="max-w-3xl mx-auto text-gray-700">
        <p className="mb-4">
          Welcome to our fashion boutique, where style meets sustainability. We are passionate about delivering high-quality, trendy clothing while maintaining a commitment to ethical and eco-friendly practices.
        </p>
        <p className="mb-4">
          Our journey began in 2010 with a simple vision: to create a fashion brand that not only looks good but also feels good to wear and support. Since then, we've grown into a beloved destination for fashion-forward individuals who care about the impact of their choices.
        </p>
        <p className="mb-4">
          We carefully curate our collections to bring you the latest trends and timeless classics. Our team works closely with ethical manufacturers to ensure fair labor practices and uses sustainable materials wherever possible.
        </p>
        <p className="mb-4">
          At our core, we believe that fashion should be accessible, responsible, and empowering. We're committed to continuous improvement and transparency in our practices, and we're grateful for every customer who joins us on this journey.
        </p>
        <p>
          Thank you for choosing us. Together, we're not just wearing great clothes – we're making a positive impact on the fashion industry and the world.
        </p>
      </div>
    </div>
  )
}

export default About
