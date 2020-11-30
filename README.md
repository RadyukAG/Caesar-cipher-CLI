# Node.js Caesar cipher CLI tool

The application is used to encrypt and decrypt using the Caesar cipher.
It transform only latin letters.

## How to install

1. Download or clone this repository
2. Change directory to `"caesar-cipher-cli"`
3. Install dependencies.

`npm i` or `npm install`

## How to use

$ node caesar_cipher_cli/index.js --action <encode|decode> --shift <number> [--input <input>] [--output <output>]

Options:

* `-s, --shift`: Shift value. Positive number.
* `-a, --action`: action to perform.
* `-i, --input`: input file. (Optional)
* `-o, --output`: output file. (Optional)

## Examples:

`$ node caesar --action encode --shift 7 --input input.txt --output output.txt`

`$ node caesar -a encode -s 7 -i input.txt -o output.txt`

`$ node caesar -a encode --shift 7 -o output.txt`

`$ node caesar -a decode --shift 7 -i input.txt`

`$ node caesar -a decode -s 7`

## Result examples

input.txt: This is secret. Message about "_" symbol!

output.txt: Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!