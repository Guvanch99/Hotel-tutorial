import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
function Error() {
    return (
        <div>
            <Hero hero='defaultHero'>
                <Banner title="404" subtitle="page not found">
                    <Link to='/' className='btn-primary'>
                        return to home page
                    </Link>
                </Banner>

            </Hero>
        </div>
    )
}

export default Error
