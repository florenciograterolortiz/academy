var controller;
var select = false;
var cellFromTo = [
  [0, 0],
  [0, 0]
];

$(document).ready(function() {
  $('#info').animate({
    top: '-=10px',
    opacity: '0'
  }, 0);
  controller = Object.create(dsopa);
  controller.genTable();
  controller.loadWords(dsopa.choseWords());
  controller.fillEmptyCells();
  controller.probabilityWords();

  $('td').mousedown(function(e) {
    select = true;
    var col = $(this).attr('data-col');
    var row = $(this).attr('data-row');
    e.preventDefault();
    cellFromTo[0] = [parseInt(col), parseInt(row)];
  });

  $('td').mousemove(function(e) {
    $('.bl').removeClass('selected');
    if (select) {
      var col = $(this).attr('data-col');
      var row = $(this).attr('data-row');
      cellFromTo[1] = [parseInt(col), parseInt(row)];
      controller.select(cellFromTo);
    }
  });

  $('td').mouseup(function(e) {
    select = false;
    var col = $(this).attr('data-col');
    var row = $(this).attr('data-row');
    cellFromTo[1] = [parseInt(col), parseInt(row)];
    controller.marcaRespuesta(0, controller.isGood(controller.select(cellFromTo)));
    $('.bl').removeClass('selected');
  });
});

/**
 * Objeto que tiene la logica de la sopa de letras.
 * @class
 */
var dsopa = {
  palabras: [
    'PHP', 'SOFTWARE', 'VARIABLES',
    'ELSE', 'IF', 'CONSTANTES',
    'INSTALACION', 'SISTEMA', 'OPERADORES',
    'TECNOLOGIA', 'LOGICA', 'EDUCATIVO'
  ],

  palabrasToFind: [],

  // "final static attributes"
  finalY: 10,
  finalX: 10,
  finalNPalabras: 5,

  /**
   * Carga la tabla con la proporcion indicada.
   */
  genTable: function() {
    $('.sopa tbody').empty();
    for (var c1 = 0; c1 < this.finalY; c1++) {
      $('.sopa tbody').append('<tr>');
      for (var c2 = 0; c2 < this.finalX; c2++)
        $('.sopa tbody').append('<td data-row="' + c1 + '" data-col="' + c2 + '" class="bl"></tr>');
      $('.sopa tbody').append('</td>');
    }
  },

  /**
   * Seleciona un numero de palabras que usar en la sopa de letras.
   * @return {array} palabrasRandom - Palabras que utilizaremos.
   */
  choseWords: function() {
    var palabrasRandom = [];
    for (var c = 0; c < this.finalNPalabras; c++) {
      var n = Math.floor(Math.random() * this.palabras.length);
      palabrasRandom.push(this.palabras[n]);
      this.palabrasToFind.push(this.palabras[n]);
      this.palabras.splice(n, 1);
    }

    return palabrasRandom;
  },

  /**
   * Determina si las palabras estaran en horizontal o no.
   * @param {array} list - Palabras que determinar.
   */
  loadWords: function(list) {
    do {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          this.setWord(list.pop(), true);
          break;
        case 1:
          this.setWord(list.pop(), false);
          break;
      }
    }
    while (list.length != 0);
  },

  /**
   * Mira que la palabra se puede poner, si puede la inserta.
   * @param {string} palabra - palabra para poner.
   * @param {boolean} vertical - indica si es vertical.
   */
  setWord: function(palabra, vertical) {
    var x, y, n, c = 0;
    var b = false;
    do {
      b = false;
      vertical = c == 20 ? false : true;
      if (vertical == true) {
        x = Math.floor(Math.random() * this.finalX);
        y = Math.floor(Math.random() * ((this.finalY + 1) - palabra.length));
      } else {
        x = Math.floor(Math.random() * ((this.finalX + 1) - palabra.length));
        y = Math.floor(Math.random() * this.finalY);
      }

      for (n = 0; n < palabra.length; n++) {
        if (b == true) break;
        if (vertical == true)
          b = $('.bl').eq(x + (y + n) * 10).html() == '' ? false : true;
        else
          b = $('.bl').eq((x + n) + y * 10).html() == '' ? false : true;
      }
      c++;
    } while (b);

    for (n = 0; n < palabra.length; n++) {
      if (vertical == true)
        $('.bl').eq(x + (y + n) * 10).html(palabra.charAt(n).toUpperCase());
      else
        $('.bl').eq((x + n) + y * 10).html(palabra.charAt(n).toUpperCase());
    }
  },

  /**
   * Rellena los sitios en los que no tenemos palabras con letras aleatorias.
   */
  fillEmptyCells: function() {
    for (var n = 0; n < $('.bl').length; n++)
      if ($('.bl').eq(n).html() == '') $('.bl').eq(n).append(String.fromCharCode(Math.floor(Math.random() * 26 + 65)));
  },

  /**
   * Muestra al usuario las palabras restantes.
   */
  probabilityWords: function() {
    for (var n = 0; n < this.palabrasToFind.length; n++)
      $('#palabras').append('<div id="' + this.palabrasToFind[n] + '">' + this.palabrasToFind[n] + '</div>');
  },

  /**
   * Marca las letras que seleccionamos.
   * @param {array} cellsSelected - Cassilla inicial y final.
   * @return {string} palabra - palabra para verificar.
   */
  select: function(cellsSelected) {
    var cells = jQuery.extend(true, {}, cellsSelected);
    var palabra = '';

    if (cells[0][0] == cells[1][0]) {
      if (cells[0][1] < cells[1][1]) {
        for (; cells[0][1] <= cells[1][1]; cells[0][1]++)
          palabra += $('.bl').eq(cells[1][0] + cells[0][1] * this.finalX).addClass('selected').html();
      } else {
        for (; cells[0][1] >= cells[1][1]; cells[0][1]--)
          palabra += $('.bl').eq(cells[0][0] + cells[0][1] * this.finalX).addClass('selected').html();
      }
    } else if (cells[0][1] == cells[1][1]) {
      if (cells[0][0] < cells[1][0]) {
        for (; cells[0][0] <= cells[1][0]; cells[0][0]++)
          palabra += $('.bl').eq(cells[0][0] + cells[0][1] * this.finalX).addClass('selected').html();
      } else {
        for (; cells[0][0] >= cells[1][0]; cells[0][0]--)
          palabra += $('.bl').eq(cells[0][0] + cells[0][1] * this.finalX).addClass('selected').html();
      }
    }

    return palabra;
  },

  /**
   * Verifica si la palabra esta en la lista.
   * @param {string} palabra - Palabra a verificar.
   * @return {number} index - index de la palabra en el array.
   */
  isGood: function(palabra) {
    var index = $.inArray(palabra, this.palabrasToFind);
    if (index >= 0) {
      //Preparamos el mensaje del modal.
      $('#info img').attr('src', './img/glyphicons-207-ok.png')
        .attr('width', '25')
        .attr('height', '19')
        .attr('alt', 'ok');
        $('#info div').empty();
        $('#info div').append('Palabra correcta!');
      $('#info').animate({top: '+=13px', opacity: '1'}, 2000);
      $('#info').animate({top: '-=13px', opacity: '0'}, 2000);

      if (cellFromTo[0][0] == cellFromTo[1][0]) {
        if (cellFromTo[0][1] < cellFromTo[1][1]) {
          for (; cellFromTo[0][1] <= cellFromTo[1][1]; cellFromTo[0][1]++)
            $('.bl').eq(cellFromTo[1][0] + cellFromTo[0][1] * this.finalX).addClass('good');
        } else {
          for (; cellFromTo[0][1] >= cellFromTo[1][1]; cellFromTo[0][1]--)
            $('.bl').eq(cellFromTo[0][0] + cellFromTo[0][1] * this.finalX).addClass('good');
        }
      } else if (cellFromTo[0][1] == cellFromTo[1][1]) {
        if (cells[0][0] < cells[1][0]) {
          for (; cellFromTo[0][0] <= cellFromTo[1][0]; cellFromTo[0][0]++)
            $('.bl').eq(cellFromTo[0][0] + celcellFromTols[0][1] * this.finalX).addClass('good');
        } else {
          for (; cellFromTo[0][0] >= cellFromTo[1][0]; cellFromTo[0][0]--)
            $('.bl').eq(cellFromTo[0][0] + cellFromTo[0][1] * this.finalX).addClass('good');
        }
      }
    } else {
      $('#info img').attr('src', './img/glyphicons-208-remove.png')
        .attr('width', '18')
        .attr('height', '18')
        .attr('alt', 'mal');
        $('#info div').empty();
        $('#info div').append('Palabra incorrecta!');
      $('#info').animate({top: '+=13px', opacity: '1'}, 2000);
      $('#info').animate({top: '-=13px', opacity: '0'}, 2000);
    }

    return index;
  },

  /**
   * Animacion de tachado progresivo de una palara.
   * @param {number} index - index de la palabra(char).
   * @param {number} indexWord - index de la palabra en el array.
   */
  marcaRespuesta: function(index, indexWord) {
    if (indexWord < 0)
      return false;
    var _text = $('#' + this.palabrasToFind[indexWord]);
    if (index >= _text.text().length)
      return false;
    var sToStrike = _text.text().substr(0, index + 1);
    var sAfter = (index < (_text.text().length - 1)) ? _text.text().substr(index + 1, _text.text().length - index) : "";
    _text.html("<strike>" + sToStrike + "</strike>" + sAfter);
    window.setTimeout(function() {
      controller.marcaRespuesta(index + 1, indexWord);
    }, 100);
  }
}
