function Article({ title, date = "January 1, 1970", preview, minutes }) {
    
    const coffee = "☕️";
    const bento = "🍱";
  
    let emoji = "";
    if (minutes < 30) {
      emoji = coffee.repeat(Math.ceil(minutes / 5));
    } else {
      emoji = bento.repeat(Math.ceil(minutes / 10));
    }
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{emoji} {minutes} min read</p>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;
  
  