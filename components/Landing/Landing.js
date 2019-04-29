import React from 'react';
import styles from './Landing.module.css';
import Header from './Header/Header';
import Container from './Container/Container';
import Hero from './Hero/Hero';
import CardList from './CardList/CardList';
import HorizontalCard from './HorizontalCard/HorizontalCard';
import VerticalCard from './VerticalCard/VerticalCard';
import explore from '../../data/explore';
import experiences from '../../data/experiences';
import HeaderWithCategoryAndPlace
  from './VerticalCard/HeaderWithCategoryAndPlace/HeaderWithCategoryAndPlace';
import FooterWithRating from './VerticalCard/FooterWithRating/FooterWithRating';
import destinations from "../../data/destinations";
import StoryBlock from "../../stories/StoryBlock/StoryBlock";

class Landing extends React.Component {
  state = {
    explore,
    experiences,
    destinations,
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Hero />
          <div className={styles.blockWrapper}>
            <CardList title="Explore Airbnb" columnCount={4}>
              {this.state.explore.map(exp => (
                <HorizontalCard img={exp.img} name={exp.name} />
              ))}
            </CardList>
          </div>
          <div className={styles.blockWrapper}>
            <CardList title="Experiences" seeAllLink="http://google.com" columnCount={4}>
              {this.state.experiences.map(exp => (
                <VerticalCard
                  img={exp.img}
                  name={exp.name}
                  prepend={() => (
                    <HeaderWithCategoryAndPlace category={exp.category} place={exp.place} />
                  )}
                  append={() => (
                    <FooterWithRating commentsCount={exp.commentsCount} rating={exp.rating} price={exp.pricePerPerson} />
                  )}
                />
              ))}
            </CardList>
          </div>
          <div className={styles.blockWrapper}>
            <CardList title="Featured destinations" columnCount={6}>
              {this.state.destinations.map(dest => (
                <VerticalCard img={dest.img} name={dest.name} />
              ))}
            </CardList>
          </div>
        </Container>
      </div>
    );
  }
}

export default Landing;
