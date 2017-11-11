import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'

import RepDetailCard from '../RepDetailCard'
import MediaCard from '../MediaCard'

import { fetchRepData, fetchTimesData } from '../../actions'

class RepDetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params


    this.props.fetchRepData(id)

  }

  // componentDidUpdate() {
  //   const { id } = this.props.match.params
  //
  //   const { first_name, last_name } = this.props.reps[id]
  //
  //   this.props.reps[id].first_name &&
  //     !this.props.news[id] &&
  //       this.props.fetchTimesData(first_name, last_name, id)
  // }

  renderNews() {
    const { id } = this.props.match.params
    const { docs } = this.props.news[id].nyt.response

    return docs.map(story => (
      <Grid item xs={12} sm={4} key={story.web_url}>
        <MediaCard
          url={story.web_url}
          snippet={story.snippet}
          headline={story.headline.main}
        />
      </Grid>
    ))
  }

  renderRep() {
    const { id } = this.props.match.params

    return (

        <Grid item xs={12}>
          <RepDetailCard
            state='NJ'
            { ...this.props.reps[id] }
          />
        </Grid>
    )
  }

  render() {
    const { id } = this.props.match.params

    return (
      <div>
        <Grid container spacing={24} justify='center'>
          {this.props.reps && this.props.reps[id] && this.renderRep()}
        </Grid>
        <div style={{ marginTop: 30 }}></div>
        <Grid container spacing={24} justify='center'>
          {this.props.news && this.props.news[id] && this.renderNews()}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ reps, news }) => ({ reps, news })

export default connect(mapStateToProps, {
  fetchRepData,
  fetchTimesData,
})(RepDetailPage)
