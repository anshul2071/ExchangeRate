# ExchangeRate
# Currency Converter

## Description

This is a simple web-based currency converter that allows users to convert currencies in real-time using an external exchange rate API. Users can select a base currency and a target currency from dropdowns, enter an amount, and fetch the conversion rate. The application dynamically updates flags based on the selected currencies.

## Features

- Converts currency values using real-time exchange rates.
- Dynamically updates country flags when currency is selected.
- Allows users to input any amount for conversion.
- Uses **ExchangeRate-API** to fetch real-time exchange rates.
- Responsive UI with a clean and simple design.

## Technologies Used

- **HTML** for structuring the webpage.
- **CSS** for styling the UI.
- **JavaScript** for handling API requests and DOM manipulation.
- **ExchangeRate-API** for fetching live exchange rates.

## Project Structure

```
📦 Currency Converter
├── 📜 index.html          # Main HTML file
├── 📜 styles.css          # CSS file for styling
├── 📜 code.js             # JavaScript file handling logic
├── 📜 FetchApi.js         # JavaScript file for API fetching
├── 📜 README.md           # Project documentation
```

## How It Works

1. Users enter an amount in the input field.
2. Users select a **From** and **To** currency from the dropdowns.
3. The selected currencies automatically update their respective country flags.
4. When the user clicks the **Convert** button:
   - The application fetches the latest exchange rate from the API.
   - It calculates the converted amount and displays it.
5. The conversion result is shown in a message below the form.

## API Used

The application uses the **ExchangeRate-API** to fetch exchange rates. API endpoint:

```
https://api.exchangerate-api.com/v4/latest/{FROM_CURRENCY}
```

### Example API Response

```json
{
  "base": "USD",
  "date": "2024-02-28",
  "rates": {
    "NPR": 140.17,
    "EUR": 1.04,
    "INR": 87.35
  }
}

## How to Run

1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/currency-converter.git
   ```
2. Open `index.html` in your browser.
3. Ensure you have an active internet connection to fetch exchange rates.
4. Enter the amount, select currencies, and click **Convert** to get the result.

## Customization

- Modify the API key in `FetchApi.js` to use your own key if needed.
- Update styles in `styles.css` to change the UI.
- Add more currencies to `countryList` if needed.

## Screenshots



## Credits

- ExchangeRate-API for real-time exchange rates.
- Font Awesome for icons.
- Flags API for country flags.

## License

This project is licensed under the MIT License.

