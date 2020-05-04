import { mount } from 'enzyme';
import React from 'react';
import PokemonInfo from '../../components/PokemonInfo';
import PokemonInfoTypeContainer from '../../components/PokemonInfo/PokemonInfoTypeContainer';
import PokemonInfoStatsContainer from '../../components/PokemonInfo/PokemonInfoStatsContainer';

describe('PokemonInfo', () => {
  let props;

  beforeEach(() => {
    props = {
      pokemon: {
        name: 'ditto',
        id: 132,
        types: [
          {
            type: {
              name: 'normal',
            },
          },
        ],
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        },
        stats: [
          {
            base_stat: '48',
            stat: {
              name: 'speed',
            },
          },
          {
            base_stat: '48',
            stat: {
              name: 'special-defense',
            },
          },
          {
            base_stat: '48',
            stat: {
              name: 'special-attack',
            },
          },
          {
            base_stat: '48',
            stat: {
              name: 'defense',
            },
          },
          {
            base_stat: '48',
            stat: {
              name: 'attack',
            },
          },
          {
            base_stat: '48',
            stat: {
              name: 'hp',
            },
          },
        ],
      },
    };
  });
  it('should match snapshot', () => {
    const wrapper = mount(<PokemonInfo {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the name and id correctly', () => {
    const wrapper = mount(<PokemonInfo {...props} />);

    expect(wrapper.find('h2').text()).toBe(props.pokemon.name);
    expect(wrapper.find('span').text()).toBe(`#${props.pokemon.id}`);
  });

  it('should render PokemonInfoTypeContainer', () => {
    const wrapper = mount(<PokemonInfo {...props} />);

    expect(wrapper.find(PokemonInfoTypeContainer)).toBeTruthy();
  });

  it('should render each type properly', () => {
    const wrapper = mount(<PokemonInfo {...props} />);

    wrapper.find(PokemonInfoTypeContainer).forEach((node, index) => {
      expect(node.text()).toContain(props.pokemon.types[index].type.name);
    });
  });

  it('should render PokemonInfoStatsContainer', () => {
    const wrapper = mount(<PokemonInfo {...props} />);

    expect(wrapper.find(PokemonInfoStatsContainer)).toBeTruthy();
  });

  it('should render each stat properly', () => {
    const wrapper = mount(<PokemonInfo {...props} />);

    wrapper.find(PokemonInfoStatsContainer).forEach((node, index) => {
      expect(node.text()).toContain(props.pokemon.stats[index].stat.name);
    });
  });
});
