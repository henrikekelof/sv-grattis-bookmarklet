(() => {
   const birthdayEls = document.querySelectorAll('.birthdays-item-holder');

   function getRandomMessage(name) {
      const MESSAGE = [
         `Grattis!`,
         `Stort grattis 🥂`,
         `Grattis ${name}! 🥳`,
         `Hip hip hurra ${name}! 🎈🎈🎈`,
         `Grattis ${name}! 🤩🍻`
      ];
      return MESSAGE[Math.floor(Math.random() * MESSAGE.length)];
   }


   birthdayEls.forEach((birthdayEl) => {

      const birthdayNameEl = birthdayEl.querySelector('.birthdays-item-name-holder');
      const name           = birthdayNameEl.querySelector('b').textContent;
      if (birthdayNameEl) {
         const inputCommentEl = birthdayEl.querySelector(
            '.birthdays-item-input input[type="text"]'
         );
         const sendCommentEl  = birthdayEl.querySelector(
            '.birthdays-item-input [data-send-comment]'
         );
         const likeEl         = birthdayEl.querySelector(
            '.birthdays-item-thumbsup-holder [data-send-like]'
         );
         if (name && inputCommentEl && sendCommentEl) {
            inputCommentEl.value = getRandomMessage(name);
            sendCommentEl.click();
         }
         if (likeEl) {
            likeEl.click();
         }
      }

   });
})();