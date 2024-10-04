import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(floors, sqft) {
    super(sqft);
    this.floors = floors;
  }

  get floors() { return this._floors; }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new Error('floor mus be a number');
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
export default SkyHighBuilding;
