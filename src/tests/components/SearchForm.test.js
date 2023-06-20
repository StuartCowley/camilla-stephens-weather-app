import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    setSearchText: () => {},
    handleCitySearch: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText="Manchester"
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text in the button element", () => {
    const { getByText } = render(
      <SearchForm
        searchText="Manchester"
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );
    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
