function sendMail() {
    emailjs.send('service_w1vqcjn', 'template_5z3phtu').then(
        (response) => {
          alert('YEYY, aku udah kasih tau Natan yaa... Have fun!');
        },
        (error) => {
          alert('Aku belum kabarin Natan... Jadi kau aja ya, HAVE FUN!!!', error);
        },
      );
}