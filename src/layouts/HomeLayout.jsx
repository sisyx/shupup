import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeCardsList from "../components/HomeCardsList"
import HomeDownload from "../components/HomeDownload"
import HomePlus from "../components/HomePlus"
import HomeSweaper from "../components/HomeSweaper"

function HomeLayout() {
    return (
        <>
            <Header />
            <HomeSweaper />
            <HomeCardsList />
            <HomePlus />
            <HomeDownload />
            <Footer />
        </>
    )
}

export default HomeLayout
