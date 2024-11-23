document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('p');
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.5}s`; 
  });

  createSnowflakes(100); // 雪の生成

  function createSnowflakes(num) {
    const body = document.body;
    for (let i = 0; i < num; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.width = `${Math.random() * 10 + 5}px`;
      snowflake.style.height = `${Math.random() * 10 + 5}px`;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      body.appendChild(snowflake);
    }
  }
});
