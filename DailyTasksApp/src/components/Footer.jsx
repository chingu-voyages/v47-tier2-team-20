import '../index.css'
import github from '../img/github.png'

function Footer() {
  return (
    <div className="footer">
        <div className="link">
            <a href="https://github.com/chingu-voyages/v47-tier2-team-20/tree/main">
                <img className="github" src={github}></img>
                Chingu Team 20 Repo
            </a>
        </div>
    </div>
  )
}

export default Footer