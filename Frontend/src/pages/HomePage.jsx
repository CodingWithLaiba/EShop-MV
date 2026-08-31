import Header from "../components/Layout/Header"
import Hero from "../components/Routes/Hero/Hero"
import Categories from "../components/Routes/Categories/Categories"

export default function HomePage() {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero/>
        <Categories/>
    </div>
  )
}
