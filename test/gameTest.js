var expect = require('chai').expect;


var Game = require('../app/game');

describe('Game', function() {
  var simon = new Game();

  describe('Constructor', function() {
    if('should have won set to false', function() {
      expect(simon).to.have.property('won').to.be.equal.null;
    })
    it('should have power set to false.', function() {
      expect(simon).to.have.property('power').to.be.equal.false;
    });
    it('should have strictMode set to false.', function() {
      expect(simon).to.have.property('strictMode').to.be.equal.false;
    });
    it('should have currentCount set to 1.', function() {
      expect(simon).to.have.property('currentCount').to.be.equal(1);
    });
    it('should have currentPlayer set to null', function() {
      expect(simon).to.have.property('currentPlayer').to.be.null;
    });
    it('should have empty list of audio', function() {
      expect(simon).to.have.property('audio').to.be.empty;
    });
    it('should have empty list of players.', function() {
      expect(simon).to.have.property('players').to.be.empty;
    });

    it('should have getPower method.', function() {
      expect(simon).to.have.property('getPower').to.be.a('function');
    });
    it('should have togglePower method.', function() {
      expect(simon).to.have.property('togglePower').to.be.a('function');
    });

    it('should have getStrictMode method.', function() {
      expect(simon).to.have.property('getStrictMode').to.be.a('function');;
    });
    it('should have toggleStrictMode method.', function() {
      expect(simon).to.have.property('toggleStrictMode').to.be.a('function');
    });

    it('should have toggleRestart method.', function() {
      expect(simon).to.have.property('toggleRestart').to.be.a('function');
    });
    it('should have getCurrentCount method.', function() {
      expect(simon).to.have.property('getCurrentCount').to.be.a('function');
    });
    it('should have clearCurrentCount method.', function() {
      expect(simon).to.have.property('clearCurrentCount').to.be.a('function');
    });
    it('should have addCurrentCount method.', function() {
      expect(simon).to.have.property('addCurrentCount').to.be.a('function');
    });

    it('should have getCurrentPlayer method.', function() {
      expect(simon).to.have.property('getCurrentPlayer').to.be.a('function');
    });
    it('should have setCurrentPlayer method.', function() {
      expect(simon).to.have.property('setCurrentPlayer').to.be.a('function');
    });

    it('should have bindEvents method.', function() {
      expect(simon).to.have.property('bindEvents').to.be.a('function');
    });
    it('should have init method.', function() {
      expect(simon).to.have.property('init').to.be.a('function');
    });
    it('should have addPlayer method.', function() {
      expect(simon).to.have.property('addPlayer').to.be.a('function');
    });
    it('should have addAudioTrack method.', function() {
      expect(simon).to.have.property('addAudioTrack').to.be.a('function');
    });
    it('should have gameWon method.', function() {
      expect(simon).to.have.property('gameWon').to.be.a('function');
    });
    it('should have gameOver method.', function() {
      expect(simon).to.have.property('gameOver').to.be.a('function');
    });
  });

  describe('#getPower', function() {
    it('should return true from power property.', function() {
      simon.power = true;
      expect(simon.getPower()).to.be.true;
    });
    it('should return false from power property.', function() {
      simon.power = false;
      expect(simon.getPower()).to.be.false;
    });
  });

  describe('#togglePower', function() {
    it('should set true to power property.', function() {
      simon.power = false;
      simon.togglePower();
      expect(simon.getPower()).to.be.true;
    });
    it('should set false to power property.', function() {
      simon.power = true;
      simon.togglePower();
      expect(simon.getPower()).to.be.false;
    });
  });

  describe('#getStrictMode', function() {
    it('should return true from strictMode property.', function() {
      simon.strictMode = true;
      expect(simon.getStrictMode()).to.be.true;
    });
    it('should return false from strictMode property', function() {
      simon.strictMode = false;
      expect(simon.getStrictMode()).to.be.false;
    });
  });

  describe('#toggleStrictMode', function() {
    it('should set true to strictMode property', function() {
      simon.strictMode = false;
      simon.toggleStrictMode();
      expect(simon.getStrictMode()).to.be.true;
    });
    it('should set false to strictMode property.', function() {
      simon.strictMode = true;
      simon.toggleStrictMode();
      expect(simon.getStrictMode()).to.be.false;
    });
  });

  describe('#getCurrentCount', function() {
    it('should return 1 from currentCount property.', function() {
      simon.strictMode = 1;
      expect(simon.getCurrentCount()).to.be.equal(1);
    });
  });

  describe('#clearCurrentCount', function() {
    it('should set 1 to currentCount property.', function() {
      simon.currentCount = 3;
      simon.clearCurrentCount();
      expect(simon.getCurrentCount()).to.be.equal(1);
    });
  });

  describe('#addCurrentCount', function() {
    it('should add 1 to currentCount property so it can equal to 2.', function() {
      simon.clearCurrentCount();
      simon.addCurrentCount();
      expect(simon.getCurrentCount()).to.be.equal(2);
    });
  });

  describe('#getCurrentPlayer', function() {
    it('should return "human" from currentPlayer.', function() {
      simon.currentPlayer = "human";
      expect(simon.getCurrentPlayer()).to.be.equal('human');
    });
    it('should return "computer" from currentPlayer.', function() {
      simon.currentPlayer = "computer";
      expect(simon.getCurrentPlayer()).to.be.equal('computer');
    });
  });

  describe('#setCurrentPlayer', function() {
    it('should set "human" to currentPlayer', function() {
      simon.setCurrentPlayer('human');
      expect(simon.getCurrentPlayer()).to.be.equal('human');
    });
    it('should set "computer" to currentPlayer.', function() {
      simon.setCurrentPlayer('computer');
      expect(simon.getCurrentPlayer()).to.be.equal('computer');
    });
  });

  describe('#addPlayer', function() {
    it('should add a player to players.', function() {
      simon.addPlayer('human');
      expect(simon.players).not.to.be.empty;
    });
  });


});
