import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App/>)

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi,i'm/i,
        exact: false,
        level: 1,
      });
      expect(topLevelHeading).toBeInTheDocument();
  });

  test("display image of yourself with alt text",()=>{
    render(<App/>)

    const idImage = screen.getByAltText(/ID image/i)
    expect(idImage).toBeInTheDocument()
  })

  test("displays a second-level heading with the text 'About Me' ", () => {
    render(<App/>)

    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/i,
        exact: false,
        level: 2,
      });
      expect(secondLevelHeading).toBeInTheDocument();
  });

  test("displays a biography paragraph  ", () => {
    render(<App/>)

    const biographyParagraph = screen.getByText(/this is a biography about me/i);
      expect(biographyParagraph).toBeInTheDocument();
  }); 

  test("displays a github link ", () => {
    render(<App/>)

    const githubLink = screen.getByRole("link",{
        name:/Github/i,
    });
      expect(githubLink).toBeInTheDocument();
  });

  test("displays a linkedIn link ", () => {
    render(<App/>)

    const linkedInLink = screen.getByRole("link",{
        name:/LinkedIn/i,
    });
      expect(linkedInLink).toBeInTheDocument();
  });