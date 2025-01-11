import Nav from '@components/navbar.component'
import Hero from '@components/hero.component'
import Whyus from '@components/whyus.component'
import Details from '@components/details.component'
import Projects from '@components/project.component'
import Contact from '@components/contact.component'


export default function Homepage() {
    return (
        <>

            <Hero />
            <Whyus />
            <Details />
            <Projects />

        </>
    )
}