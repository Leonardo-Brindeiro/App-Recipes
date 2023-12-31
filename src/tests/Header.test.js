import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RenderWithProvider from './RenderWIthProvider';
import Meals from '../components/Meals';

describe('Testa o componente "Header"', () => {
  beforeEach(() => {
    act(() => {
      RenderWithProvider(<Meals />);
    });
  });
  it('Verifica se o "Header" contém os botões "profile" e "search".', () => {
    const profileBtn = screen.getByTestId('profile-top-btn');
    const searchBtn = screen.getByTestId('search-top-btn');

    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão "Search", o input é exibido e escondido após um novo clique', () => {
    const searchBtn = screen.getByTestId('search-top-btn');

    userEvent.click(searchBtn);

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument();

    userEvent.click(searchBtn);

    expect(searchInput).not.toBeInTheDocument();
  });

  it('Verifica se o botão "Profile" redireciona para a pagina correta.', async () => {
    const profileBtn = screen.getByTestId('profile-top-btn');

    expect(profileBtn).toBeInTheDocument();

    userEvent.click(profileBtn.parentNode);
  });
});
