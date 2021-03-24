import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaHiking,FaShuttleVan, FaBeer } from 'react-icons/fa'
class Services extends Component {
    state={
        services:[

        {icon:<FaCocktail/>,
        title:'Free Cocktail',
        info:'Lorem ipsum smth'
        },
        {icon:<FaHiking/>,
            title:'Free Cocktail',
            info:'Lorem ipsum smth'
            },
            {icon:<FaShuttleVan/>,
                title:'Free Cocktail',
                info:'Lorem ipsum smth'
                },
                {icon:<FaBeer/>,
                    title:'Free Cocktail',
                    info:'Lorem ipsum smth'
                    }
        
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/> 
               <div className="services-center">
                   {this.state.services.map(items=>{
                       return(
                           <article className="service">
                            <span>{items.icon}</span>
                       <h6>{items.title}</h6>
                       <p>{items.info}</p>
                           </article>
                       );
                   })}

               </div>
            </section>
        )
    }
}
export default Services