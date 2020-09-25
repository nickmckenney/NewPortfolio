import React from 'react';

import Card from '../components/Card';

import Calander from '../images/calendar.png';
import CoTripper from '../images/CoTripper.png';
import Gov from '../images/gov.png';
import Nasa from '../images/nasaPic.png';
import Tower from '../images/Tower.png';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Google calendar Mock',
                    subTitle: 'Create an API then Frontend gets information using React',
                    imgSrc: Calander,
                    link: 'https://github.com/nickmckenney/calanderprojectMERN',
                    website:'https://calanderproject.netlify.app/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'CoTripper',
                    subTitle: 'Agile project with a team of 24 people. I was responsible for frontend login',
                    imgSrc: CoTripper,
                    link: 'https://github.com/CotripperPlatform/CoTrip',
                    website:'https://www.cotripper.co/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Government Funding API',
                    subTitle: "Used API and Mongoose/express to create full CRUD functionality.",
                    imgSrc: Gov,
                    link: 'https://github.com/nickmckenney/Building-a-JSON-API',
                    website:'https://frontendapi.mckenney2001.now.sh',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Nasa Pictures',
                    subTitle: 'Frontend projected intended as a refresher for creating apps',
                    imgSrc: Nasa,
                    link: 'https://github.com/nickmckenney/nasaFrontend',
                    website:'https://nasapictures.netlify.com/',
                    selected: false
                }, {
                    id: 4,
                    title: 'Tower of Hanoi',
                    subTitle: 'First project at coding bootcamp. Just DOM manipulation',
                    imgSrc: Tower ,
                    link: 'https://github.com/nickmckenney/TowerOfHanoi',
                    website:'https://nickmckenney.github.io/TowerOfHanoi/',
                    selected: false
                },
                
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
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


    render() {
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