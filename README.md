# Number System Converter

A simple and responsive number system converter built with **HTML**, **CSS**, and **Vanilla JavaScript**.

## Live Demo
🔗 https://lyncxxx.github.io/number-system-converter/

This application allows users to convert numbers between different numeral systems in real time:

* Binary (Base 2)
* Decimal (Base 10)
* Octal (Base 8)
* Hexadecimal (Base 16)

---

## Preview

The interface was designed with a clean dark theme and responsive layout, providing a good experience on both desktop and mobile devices.

### Features

* Real-time conversion between number systems
* Input validation for each base
* Responsive design
* Clean and modern UI
* Bidirectional conversion

---

## Supported Conversions

The converter supports conversions between:

* Binary ↔ Decimal
* Decimal ↔ Octal
* Decimal ↔ Hexadecimal
* Binary ↔ Octal
* Binary ↔ Hexadecimal
* Octal ↔ Hexadecimal

All conversions are internally handled through decimal representation.

---

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**

---

## Project Structure

```bash
number-system-converter/
│── index.html
│── style.css
│── script.js
└── design/
```

---

## How It Works

The application uses custom conversion logic instead of JavaScript built-in methods like:

```javascript
number.toString(base)
parseInt(value, base)
```

This project manually implements:

### Validation Functions

* Binary validation
* Octal validation
* Hexadecimal validation

### Conversion Functions

* Decimal → Binary
* Decimal → Octal
* Decimal → Hexadecimal
* Binary → Decimal
* Octal → Decimal
* Hexadecimal → Decimal

This approach helps reinforce understanding of:

* Number systems
* Base conversion
* Mathematical logic
* Algorithms

---

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/Lyncxxx/number-system-converter.git
```

2. Navigate to the project folder:

```bash
cd number-system-converter
```

3. Open `index.html` in your browser.

---

## Learning Goals

This project was built to practice:

* DOM manipulation
* Event listeners
* Input validation
* Algorithm implementation
* Responsive UI design

---

## Future Improvements

Possible future features:

* Error messages for invalid input
* Negative number support
* Floating-point conversions
* Additional numeral systems
* Copy-to-clipboard functionality

---

## License

This project is open source and available under the MIT License.
