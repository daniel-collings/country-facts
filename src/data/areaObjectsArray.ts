interface AreaObject {
  name: string
  areaInSquareMeters: number
}

const areaObjects: AreaObject[] = [
  { name: 'Football field', areaInSquareMeters: 7140 },
  { name: 'Standard city bus', areaInSquareMeters: 30 },
  { name: 'Boeing 747 airplane', areaInSquareMeters: 541 },
  { name: 'Average parking space', areaInSquareMeters: 16 },
  { name: 'Olympic swimming pool', areaInSquareMeters: 1250 },
  { name: 'Tennis court', areaInSquareMeters: 261 },
  { name: 'Basketball court', areaInSquareMeters: 420 },
  { name: 'Soccer pitch', areaInSquareMeters: 7140 },
  { name: 'Standard shipping container', areaInSquareMeters: 14 },
  { name: 'Central Park, New York City', areaInSquareMeters: 3410000 },
  { name: 'Vatican City', areaInSquareMeters: 440000 },
  { name: 'Average house in the USA', areaInSquareMeters: 201 },
  { name: 'Typical office desk', areaInSquareMeters: 1.5 },
  { name: 'Large concert stage', areaInSquareMeters: 400 },
  { name: 'Typical smartphone screen', areaInSquareMeters: 0.01 },
  { name: 'Eiffel Tower base', areaInSquareMeters: 1000 },
  { name: 'Standard beach towel', areaInSquareMeters: 1.5 },
  { name: 'Average refrigerator', areaInSquareMeters: 1.8 },
  { name: 'Typical classroom', areaInSquareMeters: 70 },
  { name: 'Baseball diamond', areaInSquareMeters: 1675 },
  { name: 'Typical elevator', areaInSquareMeters: 2.2 },
  { name: 'London Eye capsule', areaInSquareMeters: 30 },
  { name: 'Standard billboard', areaInSquareMeters: 40 },
  { name: 'Typical public bathroom stall', areaInSquareMeters: 3 },
  { name: 'Average dining table', areaInSquareMeters: 2 },
  { name: 'Typical yoga mat', areaInSquareMeters: 1.5 },
  { name: 'Standard garage parking spot', areaInSquareMeters: 20 },
  { name: 'Average king-size bed', areaInSquareMeters: 4.2 },
  { name: 'Typical vending machine', areaInSquareMeters: 1 },
  { name: 'Standard shipping pallet', areaInSquareMeters: 1 },
  { name: 'Average backyard swimming pool', areaInSquareMeters: 72 },
  { name: 'Typical hotel room', areaInSquareMeters: 30 },
  { name: 'Standard ping pong table', areaInSquareMeters: 4.5 },
  { name: 'Average compact car', areaInSquareMeters: 8 },
  { name: 'Typical movie theater screen', areaInSquareMeters: 170 },
  { name: 'Standard shipping palette', areaInSquareMeters: 1 },
  { name: 'Average studio apartment', areaInSquareMeters: 37 },
  { name: 'Typical ATM machine', areaInSquareMeters: 1 },
  { name: 'Standard door', areaInSquareMeters: 1.6 },
  { name: 'Average bathtub', areaInSquareMeters: 1.5 },
  { name: 'Typical coffee table', areaInSquareMeters: 1 },
  { name: 'Standard twin bed', areaInSquareMeters: 2 },
  { name: 'Average kitchen countertop', areaInSquareMeters: 3 },
  { name: 'Typical bookshelf', areaInSquareMeters: 0.8 },
  { name: 'Standard washing machine', areaInSquareMeters: 0.5 },
  { name: 'Average flatscreen TV', areaInSquareMeters: 0.5 },
  { name: 'Typical laptop screen', areaInSquareMeters: 0.1 },
  { name: 'Standard sheet of paper (A4)', areaInSquareMeters: 0.06 },
  { name: 'Average credit card', areaInSquareMeters: 0.005 },
  { name: 'Typical computer mouse', areaInSquareMeters: 0.01 },
  { name: 'Standard keyboard', areaInSquareMeters: 0.05 },
  { name: 'Average dinner plate', areaInSquareMeters: 0.07 },
  { name: 'Typical magazine page', areaInSquareMeters: 0.06 },
  { name: 'Standard envelope', areaInSquareMeters: 0.02 },
  { name: 'Average postage stamp', areaInSquareMeters: 0.0004 },
  { name: 'Typical sticky note', areaInSquareMeters: 0.003 },
  { name: 'Standard business card', areaInSquareMeters: 0.005 },
  { name: 'Average CD/DVD', areaInSquareMeters: 0.015 },
  { name: 'Typical smartphone', areaInSquareMeters: 0.01 },
  { name: 'Standard playing card', areaInSquareMeters: 0.005 },
  { name: 'Average hardcover book', areaInSquareMeters: 0.05 },
  { name: 'Typical tablet screen', areaInSquareMeters: 0.04 },
  { name: 'Standard dollar bill', areaInSquareMeters: 0.01 },
  { name: 'Average computer monitor', areaInSquareMeters: 0.3 },
  { name: 'Typical mousepad', areaInSquareMeters: 0.06 },
  { name: 'Standard sheet of plywood', areaInSquareMeters: 2.9 },
  { name: 'Average welcome mat', areaInSquareMeters: 0.5 },
  { name: 'Typical ceiling fan', areaInSquareMeters: 1 },
  { name: 'Standard window', areaInSquareMeters: 2 },
  { name: 'Average floor tile', areaInSquareMeters: 0.09 },
  { name: 'Typical shower stall', areaInSquareMeters: 2 },
  { name: 'Standard toilet', areaInSquareMeters: 0.4 },
  { name: 'Average kitchen sink', areaInSquareMeters: 0.3 },
  { name: 'Typical bathroom vanity', areaInSquareMeters: 0.6 },
  { name: 'Standard doormat', areaInSquareMeters: 0.3 },
  { name: 'Average throw pillow', areaInSquareMeters: 0.2 },
  { name: 'Typical area rug', areaInSquareMeters: 4 },
  { name: 'Standard coat hanger', areaInSquareMeters: 0.1 },
  { name: 'Average shoebox', areaInSquareMeters: 0.06 },
  { name: 'Typical trash can', areaInSquareMeters: 0.2 },
  { name: 'Standard file cabinet drawer', areaInSquareMeters: 0.3 },
  { name: 'Average ceiling light fixture', areaInSquareMeters: 0.2 },
  { name: 'Typical wall clock', areaInSquareMeters: 0.1 },
  { name: 'Standard electrical outlet', areaInSquareMeters: 0.01 },
  { name: 'Average light switch plate', areaInSquareMeters: 0.005 },
  { name: 'Typical smoke detector', areaInSquareMeters: 0.02 },
  { name: 'Standard thermostat', areaInSquareMeters: 0.01 },
  { name: 'Average picture frame (8x10)', areaInSquareMeters: 0.05 },
  { name: 'Typical wall mirror', areaInSquareMeters: 1 },
  { name: 'Standard shower curtain', areaInSquareMeters: 2 },
  { name: 'Average bath towel', areaInSquareMeters: 1 },
  { name: 'Typical hand towel', areaInSquareMeters: 0.3 },
  { name: 'Standard washcloth', areaInSquareMeters: 0.06 },
  { name: 'Average soap dispenser', areaInSquareMeters: 0.02 },
  { name: 'Typical toothbrush holder', areaInSquareMeters: 0.01 },
  { name: 'Standard toilet paper roll', areaInSquareMeters: 0.01 },
  { name: 'Average tissue box', areaInSquareMeters: 0.03 },
  { name: 'Typical floor lamp base', areaInSquareMeters: 0.1 },
  { name: 'Standard coaster', areaInSquareMeters: 0.01 }
]

export default areaObjects
