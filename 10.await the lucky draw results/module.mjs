function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  const getLuckyDraw = async () => {
    const players = [{name: "Tina"}, { name: "Jorge" }, { name: "Julien"}];
  
    players.forEach(async (player) => {
      try {
        const result = await luckyDraw(player.name);
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    });
  }
  
  getLuckyDraw();