import React from 'react';
import { storiesOf } from '@storybook/react';
import CardList from '../components/Landing/CardList/CardList';
import HorizontalCard from '../components/Landing/HorizontalCard/HorizontalCard';
import explore from '../data/explore';
import experiences from '../data/experiences';
import destinations from '../data/destinations';
import '../pages/index.css';
import StoryBlock from './StoryBlock/StoryBlock';
import VerticalCard from '../components/Landing/VerticalCard/VerticalCard';
import HeaderWithCategoryAndPlace
  from '../components/Landing/VerticalCard/HeaderWithCategoryAndPlace/HeaderWithCategoryAndPlace';
import FooterWithRating from '../components/Landing/VerticalCard/FooterWithRating/FooterWithRating';

storiesOf('CardList', module)
  .add('with Vertical columns', () => (
    <div>
      <StoryBlock>
        <CardList title="Experiences" columnCount={4}>
          {experiences.map(exp => (
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
      </StoryBlock>
      <StoryBlock>
        <CardList title="Featured destinations" columnCount={6}>
          {destinations.map(dest => (
            <VerticalCard img={dest.img} name={dest.name} />
          ))}
        </CardList>
      </StoryBlock>
    </div>
  ))
  .add('with different columns', () => (
    <div>
      <StoryBlock>
        <CardList title="Explore Airbnb" columnCount={4}>
          {explore.map(exp => (
            <HorizontalCard img={exp.img} name={exp.name} />
          ))}
        </CardList>
      </StoryBlock>
      <StoryBlock>
        <CardList title="Explore Airbnb" columnCount={2}>
          {explore.map(exp => (
            <HorizontalCard img={exp.img} name={exp.name} />
          ))}
        </CardList>
      </StoryBlock>
      <StoryBlock>
        <CardList title="Explore Airbnb" columnCount={5} seeAllLink="ololo">
          {explore.map(exp => (
            <HorizontalCard img={exp.img} name={exp.name} />
          ))}
        </CardList>
      </StoryBlock>
      <StoryBlock>
        <CardList title="Text Large Images" columnCount={4} seeAllLink="test">
          <HorizontalCard name="Text #1" img="https://images.unsplash.com/photo-1554181167-9cb58ddcc56c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
          <HorizontalCard name="Text #1" img="https://images.unsplash.com/photo-1554181167-9cb58ddcc56c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </CardList>
      </StoryBlock>
    </div>
  ));
