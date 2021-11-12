/* eslint-disable prettier/prettier */
/* eslint-disable operator-assignment */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
async function sFact(num) {
  var rval = 1;
  // eslint-disable-next-line operator-assignment
  // eslint-disable-next-line no-plusplus
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
}
module.exports = sFact;
