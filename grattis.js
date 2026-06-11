(() => {
   const birthdayEls = document.querySelectorAll('.sv-lbr-bday-list');

   function getRandomMessage(name) {
      const MESSAGE = [
         `Grattis!`,
         `Stort grattis 🥂`,
         `Grattis ${name}! 🥳`,
         `Hip hip hurra ${name}! 🎈🎈🎈`,
         `Grattis ${name}! 🤩🍻`,
         `Grattis ${name}!`,
         `Grattis på dagen! 🥳`,
         `Grattis ${name}! 🥳🎉`,
         `Grattis!! 🥳`,
         `Grattis ${name}!`,
         `Hipp hipp HURRA!`,
         `Stort grattis på stora dagen! 🥳`,
         `Grattis! :)`,
         `Grattis på födelsedagen! 🎉`,
         `Stort grattis ${name}`,
         `Stort Grattis ${name}!!`,
         `Grattis!!`,
         `Stort grattis på födelsedagen!`
      ];
      return MESSAGE[Math.floor(Math.random() * MESSAGE.length)];
   }

   birthdayEls.forEach((birthdayEl) => {

      const birthdayNameEl = birthdayEl.querySelector('.env-card .env-card .env-card__body > div:first-child');
      const name           = birthdayNameEl.querySelector('strong').textContent;
      if (birthdayNameEl) {
         const inputCommentEl = birthdayEl.querySelector(
            'input[type="text"]'
         );
         const likeEl         = birthdayEl.querySelector(
            '.env-card .env-card .env-card__body > div:last-child button:last-child'
         );
         if (name && inputCommentEl) {
            inputCommentEl.value = getRandomMessage(name);
            setTimeout(() => {
               const sendCommentEl  = birthdayEl.querySelector(
                  '[type="submit"]'
               );
               sendCommentEl && sendCommentEl.click();
            }, 1);
         }
         if (likeEl) {
            likeEl.click();
         }
      }

   });
})();
