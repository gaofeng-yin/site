import React from 'react';

import git from '../assets/images/hub.png'
import Card from '../components/Card';
import { Container, Row } from 'react-bootstrap';
import me from '../assets/images/me.jpg';
import stack from '../assets/images/stack.jpg';

class Carousel extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'Linkdin',
                subTitle: 'My Linkdin profile',
                imgSrc: me,
                link: 'https://www.linkedin.com/in/gaofengyin/.com',
                selected: false
            },
            {
                id: 1,
                title: 'Stack overflow',
                subTitle: 'My stack',
                imgSrc: stack,
                link: 'https://stackoverflow.com/users/14255901/gaofeng',
                selected: false
            },
            {
                id: 2,
                title: 'Github',
                subTitle: 'My Github repository',
                imgSrc: git,
                link: 'https://github.com/gaofeng-yin',
                selected: false
            }
        ]

    }
}

    handleCardClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
           <Container fluid={true}>
               <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
               </Row>
           </Container> 
        );
    }
}

export default Carousel;