// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, id, teamImageURL} = teamDetails
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
