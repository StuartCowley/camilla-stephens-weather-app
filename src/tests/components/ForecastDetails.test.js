import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 15,
    wind: {
      speed: 10,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);
    const minTempText = getByText(
      (_, element) => element.textContent === "Min temperature: 12 °C"
    );
    const maxTempText = getByText(
      (_, element) => element.textContent === "Max temperature: 22 °C"
    );
    const humidityText = getByText(
      (_, element) => element.textContent === "Humidity: 15 %"
    );
    const windSpeedText = getByText(
      (_, element) => element.textContent === "Wind speed: 10 mph"
    );

    expect(getByText("Thu Jan 01 1970")).toBeInTheDocument();
    expect(minTempText).toBeInTheDocument();
    expect(maxTempText).toBeInTheDocument();
    expect(humidityText).toBeInTheDocument();
    expect(windSpeedText).toBeInTheDocument();
  });
});
