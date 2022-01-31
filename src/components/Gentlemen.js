const Gentlemen = ({ imagen, name, jobTag, job }) => {
  return (
    <>
      <li>
        <div class="gentleman__avatar-container">
          <img
            class="gentleman__avatar"
            src={imagen}
            alt="The Fary pointing at you"
          />
          <span class="gentleman__initial">F</span>
        </div>
        <div class="gentleman__data-container">
          <h2 class="gentleman__name">{name}</h2>
          <ul class="gentleman__data-list">
            <li class="gentleman__data">
              <span class="gentleman__data-label">Profession:</span>
              {job}
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Status:</span> RIP
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Twitter:</span> Pending
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
