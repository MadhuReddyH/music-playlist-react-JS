import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicPlaylist = props => {
  const {PlaylistDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = PlaylistDetails

  const deleteTheSong = () => {
    deleteSong(id)
  }

  return (
    <li>
      <div className="image-container">
        <img className="image" src={imageUrl} alt="track" />
        <div className="name-genre-con">
          <p className="song-name">{name} </p>
          <p className="song-genre"> {genre} </p>
        </div>
      </div>

      <div className="delete-container">
        <p className="duration"> {duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={deleteTheSong}
          data-testid="delete"
        >
          <AiOutlineDelete className="icon" />
        </button>
      </div>
    </li>
  )
}

export default MusicPlaylist
