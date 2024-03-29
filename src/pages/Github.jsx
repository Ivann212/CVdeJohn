import React, { useState, useEffect } from 'react';

export default function Github() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await fetch('https://api.github.com/users/github-john-doe');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      setUser(json);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <article className="d-flex flex-column align-items-center py-5">
          <h2 className="pb-3">{user.name}</h2>
          <img className="pb-3" src={user.avatar_url} alt="User Avatar" width={"200px"} />
          <p className="pb-3">{user.bio}</p>
          <p className="pb-3">Abonnés : {user.followers}</p>
          <p className="pb-3">Abonnements : {user.following}</p>
          <p className="pb-3">Créé le : {user.created_at}</p>
          <p className="pb-3">Modifié le : {user.updated_at}</p>
          <a className="pb-3" href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.html_url}
          </a>
        </article>
      )}
    </>
  );
}


 