import React from 'react';
import BookContext from './BookContext';

export default function BookListing(){

    let context=React.useContext(BookContext)

    return(
        <React.Fragment>
            <ul className="list-group">
                {context.getBooks().map(b=>
                    <li className="list-group-item mb-2">
                        {'Title: ' + b.title} 
                        <br />
                        {'Author: ' + b.author}
                        
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}