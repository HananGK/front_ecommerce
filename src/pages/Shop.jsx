import Hero from "../components/Hero/Hero"
import NewColllections from "../components/NewCollections/NewCollections"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Offers from "../components/Offers/Offers"
import Popular from "../components/Popular/Popular"

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewColllections />
            <NewsLetter/>
        </div>
    )
}

export default Shop