// Reto: https://adventjs.dev/challenges/13

function wrapGifts(gifts) {
  if (gifts.length <= 0) return [];

  const wrappedGifts = [];
  const giftsPerLevel = gifts[0].length;
  let wrap = '';

  for (let i = 0; i < giftsPerLevel + 2; i++) wrap += '*';

  gifts.forEach(gift => wrappedGifts.push(`*${gift}*`));

  return [wrap, ...wrappedGifts, wrap];
}

// ______________________________________________________________________

wrapGifts(['📷', '⚽️']);
/* 
[
  '****',
  '*📷*',
  '*⚽️*',
  '****'
] 
*/

wrapGifts(['🏈🎸', '🎮🧸']);
/*
[
  '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/
