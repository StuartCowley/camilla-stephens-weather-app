import { render } from "@testing-library/react";
import axios from "axios";
import App from "../../components/App";

describe("App", () => {
  it("renders correctly", async () => {
    const mockData = {
      data: {
        location: {
          city: "Stub city",
          country: "Stub country",
        },
        forecasts: [
          {
            date: 11111111,
            temperature: {
              max: 10,
              min: 2,
            },
            wind: {
              speed: 5,
              direction: "n",
            },
            humidity: 20,
            description: "Stub description",
            icon: 800,
          },
        ],
      },
    };
    jest.spyOn(axios, "get").mockResolvedValue(mockData);
    const { asFragment } = await render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
