const imgLike = (curtiu) => {
  if (curtiu) {
    return require("../../res/img/s2-checked.png");
  }
  return require("../../res/img/s2.png");
};

const curtirFoto = (curtiu, likes) => {
  let qtd = likes;
  if (curtiu) {
    qtd--;
  } else {
    qtd++;
  }
  return {
    curtido: !curtiu,
    qtd: qtd,
  };
};

export { imgLike, curtirFoto };
