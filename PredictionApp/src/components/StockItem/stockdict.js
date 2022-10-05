const availableStock = ["MMM", "AMZN","AXP", "AAPL", "BA", "CAT",
  "CVX", "CSCO", "KO", "DIS", "XOM", "GE", "GS", "HD", "IBM",
  "INTC", "JNJ", "JPM", "MCD", "MRK", "MSFT", "NKE", "PFE", "PG",
  "TRV", "UNH", "VZ", "V", "WMT", "TSLA", "META"]

const availableStock2= [
  {
    ticker: 'AMZN',
    name: 'Amazon',
    image: 'https://s3-symbol-logo.tradingview.com/amazon--600.png'
  },
  {
    ticker: 'AAPL',
    name: 'Apple',
    image: 'https://s3-symbol-logo.tradingview.com/apple--600.png'
  },
  {
    ticker: 'CVX',
    name: 'Chevron',
    image: 'https://s3-symbol-logo.tradingview.com/chevron--600.png'
  },
  {
    ticker: 'XOM',
    name: 'Exxon Mobil',
    image: 'https://s3-symbol-logo.tradingview.com/exxon--600.png'
  },
  {
    ticker: 'INTC',
    name: 'Intel',
    image: 'https://s3-symbol-logo.tradingview.com/intel--600.png'
  },
  {
    ticker: 'JNJ',
    name: 'Johnson & Johnson',
    image: 'https://s3-symbol-logo.tradingview.com/johnson-and-johnson--600.png'
  },
  {
    ticker: 'JPM',
    name: 'JPMorgan Chase & Co.',
    image: 'https://s3-symbol-logo.tradingview.com/jpmorgan-chase--600.png'
  },
  {
    ticker: 'MCD',
    name: "McDonald's",
    image: 'https://s3-symbol-logo.tradingview.com/mcdonalds--600.png'
  },
  {
    ticker: 'MRK',
    name: 'Merck & Co.',
    image: 'https://s3-symbol-logo.tradingview.com/merck-and-co--600.png'
  },
  {
    ticker: 'META',
    name: 'Meta Platforms Inc',
    image: 'https://s3-symbol-logo.tradingview.com/meta--600.png'
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft',
    image: 'https://s3-symbol-logo.tradingview.com/microsoft--600.png'
  },
  {
    ticker: 'NKE',
    name: 'Nike, Inc.',
    image: 'https://s3-symbol-logo.tradingview.com/nike--600.png'
  },
  {
    ticker: 'PFE',
    name: 'Pfizer',
    image: 'https://s3-symbol-logo.tradingview.com/pfizer--600.png'
  },
  {
    ticker: 'TSLA',
    name: 'Tesla',
    image: 'https://s3-symbol-logo.tradingview.com/tes;a--600.png'
  },
  {
    ticker: 'BA',
    name: 'The Boeing Company',
    image: 'https://s3-symbol-logo.tradingview.com/boeing--600.png'
  },
  {
    ticker: 'KO',
    name: 'The Coca-Cola Company',
    image: 'https://s3-symbol-logo.tradingview.com/coca-cola--600.png'
  },
  {
    ticker: 'V',
    name: 'Visa Inc.',
    image: 'https://s3-symbol-logo.tradingview.com/visa--600.png'
  },
  {
    ticker: 'WMT',
    name: 'Walmart',
    image: 'https://s3-symbol-logo.tradingview.com/walmart--600.png'
  }
]


const ImageDictionary=
{"AMZN" : "https://s3-symbol-logo.tradingview.com/amazon--600.png",
"TSLA": "https://s3-symbol-logo.tradingview.com/tesla--600.png",
"META":"https://s3-symbol-logo.tradingview.com/meta--600.png",
 "AAPL": "https://s3-symbol-logo.tradingview.com/apple--600.png",
  "WMT":"https://s3-symbol-logo.tradingview.com/walmart--600.png",
"INTC": "https://s3-symbol-logo.tradingview.com/intel--600.png",
 "MSFT":"https://s3-symbol-logo.tradingview.com/microsoft--600.png",
"PFE":"https://s3-symbol-logo.tradingview.com/pfizer--600.png",
 "MCD":"https://s3-symbol-logo.tradingview.com/mcdonalds--600.png",
 "NKE": "https://s3-symbol-logo.tradingview.com/nike--600.png",
 "KO":"https://s3-symbol-logo.tradingview.com/coca-cola--600.png",
 "XOM":"https://s3-symbol-logo.tradingview.com/exxon--600.png",  
"V":"https://s3-symbol-logo.tradingview.com/visa--600.png",
"BA": "https://s3-symbol-logo.tradingview.com/boeing--600.png",
 "JNJ": "https://s3-symbol-logo.tradingview.com/johnson-and-johnson--600.png",
 "CVX":"https://s3-symbol-logo.tradingview.com/chevron--600.png",
"JPM":   "https://s3-symbol-logo.tradingview.com/jpmorgan-chase--600.png",
"MRK": "https://s3-symbol-logo.tradingview.com/merck-and-co--600.png"
}
  
const stockLists= {
    "MMM": "3M Company",
    "AXP": "American Express Company",
    "AMZN": "Amazon",
    "AAPL": "Apple",
    "BA": "The Boeing Company",
    "CVX": "Chevron",
    "CSCO": "Cisco Systems",
    "KO": "The Coca-Cola Company",
    "DIS": "The Walt Disney Company",
    "XOM": "Exxon Mobil",
    "GE": "General Electric Company",
    "GS": "The Goldman Sachs Group",
    "HD": "The Home Depot",
    "IBM": "International Business Machines",
    "INTC": "Intel",
    "JNJ": "Johnson & Johnson",
    "JPM": "JPMorgan Chase & Co.",
    "MCD": "McDonald's",
    "MRK": "Merck & Co.",
    "META": "Meta Platforms Inc",
    "MSFT": "Microsoft",
    "NKE": "Nike, Inc.",
    "PFE": "Pfizer",
    "PG": "The Procter & Gamble Company",
    "TRV": "The Travelers Companies",
    "TSLA":"Tesla",
    "UNH": "UnitedHealth Group",
   
    "V": "Visa Inc.",
    "WMT": "Walmart",
}



export { availableStock, stockLists , availableStock2, ImageDictionary}