const Gentlemen = (gentleman) => {
  return (
    <>
      <li className="gentleman">
        <div class="gentleman__avatar-container">
          <img
            class="gentleman__avatar"
            src={`/img/${gentleman.picture}`}
            alt={`${gentleman.name} pointing at you`}
          />
          <span class="gentleman__initial">
            {gentleman.name[0].toUpperCase()}
          </span>
        </div>
        <div class="gentleman__data-container">
          <h2 class="gentleman__name">{gentleman.name}</h2>
          <ul class="gentleman__data-list">
            <li class="gentleman__data">
              <span class="gentleman__data-label">Profession:</span>
              {gentleman.profession}
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Status:</span>{" "}
              {gentleman.status}
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Twitter:</span>{" "}
              {gentleman.status}
            </li>
          </ul>
        </div>
        <i class="icon gentleman__icon fas fa-check"></i>
        <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
      </li>
    </>
  );
};
export default Gentlemen;
