export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    this._sqft = sqft; // Store sqft in a private variable
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
