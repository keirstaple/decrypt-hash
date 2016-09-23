var h = 244575039849066;
function decrypt(h) {
  var position = [];
  var remainder = 0;
  var word = [];
  var hashvalue = h;
  var letters = 'acdekilmnoprstuy';
    for (i = 7; i > 0; i --){
      debugger
      remainder = (hashvalue % 83);
      position[i] = remainder;
      hashvalue = (hashvalue - remainder)/83;
      word[i-1] = letters.charAt(position[i]);
    }
    return word.join('');
}
