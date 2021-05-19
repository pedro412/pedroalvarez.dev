import React from 'react';

const Articles = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h2>
        Últimos artículos{' '}
        <span role="img" aria-label="notes">
          📝
        </span>
      </h2>

      {posts.length < 1 && <p>No posts found</p>}

      {posts.map(({ frontmatter }) => {
        const { date, description, title } = frontmatter;
        return (
          <div key={date}>
            <h2>
              {title} - {date}
            </h2>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
