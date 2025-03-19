
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CharacterCard from "../src/app/components/CharacterCard";
import { useFavorites } from "../src/app/context/FavoritesContext";
import { useRouter } from "next/router";

jest.mock("../context/FavoritesContext");
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockUseFavorites = useFavorites as jest.MockedFunction<typeof useFavorites>;
const mockRouter = useRouter as jest.MockedFunction<typeof useRouter>;

describe("CharacterCard", () => {
  const characterProps = {
    id: "1",
    name: "Harry Potter",
    image: "/harry.jpg",
    house: "Gryffindor",
  };

  beforeEach(() => {
    mockUseFavorites.mockReturnValue({
      favorites: [],
      toggleFavorite: jest.fn(),
    });
    mockRouter.mockReturnValue({
      push: jest.fn(),
    } as any);
  });

  test("renders character details", () => {
    render(<CharacterCard {...characterProps} />);
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("Gryffindor")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Harry Potter" })).toBeInTheDocument();
  });

  test("renders 'No House' when house is not provided", () => {
    render(<CharacterCard {...characterProps} house={undefined} />);
    expect(screen.getByText("No House")).toBeInTheDocument();
  });

  test("toggles favorite status", () => {
    const toggleFavorite = jest.fn();
    mockUseFavorites.mockReturnValue({
      favorites: [],
      toggleFavorite,
    });

    render(<CharacterCard {...characterProps} />);
    const favoriteButton = screen.getByText("Favorite 🤍");
    fireEvent.click(favoriteButton);
    expect(toggleFavorite).toHaveBeenCalledWith("1");
  });

  test("navigates to character details page", () => {
    render(<CharacterCard {...characterProps} />);
    const viewDetailsButton = screen.getByText("View Details");
    fireEvent.click(viewDetailsButton);
    expect(mockRouter().push).toHaveBeenCalledWith("/characters/1");
  });
});