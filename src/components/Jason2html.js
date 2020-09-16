import React from 'react';
import parser from '../assets/images/parser.png';
import giticon from '../assets/images/giticon.svg';
function Json2html(){
    return(
        <div className="card">
            <h3>Json to html table</h3>
            <img className="site-image" src={parser} alt="img" />
            <p><br></br>Compiler built using YACC&LEX which translate json file, containing Google calendar info, into HTML table cotent.
                This may help better visualization of the data.</p>
            <a href="https://github.com/gaofeng-yin/language_processor" target="_blank" rel="noopener noreferrer">
             <img className="link" src={giticon} alt="img" /></a>
        </div>
    );
}

export default Json2html;