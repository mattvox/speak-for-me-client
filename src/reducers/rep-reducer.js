// import { mapKeys as _mapKeys } from 'lodash'

import {
  FETCH_REP_DATA,
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_REP_DATA:
      const { member_id: id, roles, ...rest } = action.payload

      const role = roles[0]

      return {
        ...state,
        [id]: { id, ...rest, ...role }
      }

    default:
      return state
  }
}

/*

id(pin): "N000188" (member_id is same)
name(pin): "Donald W. Norcross" (first and last name)

role(pin): "Representative" (in roles)
party(pin): "D" (in roles)

twitter_id(pin): "DonaldNorcross" (as twitter_account)
youtube_id(pin): null (as youtube_account)

seniority(pin): "6" (in roles)

next_election(pin): "2018"
api_uri(pin): "https://api.propublica.org/congress/v1/members/N000188.json"

district(pin): "1" (in roles)
at_large(pin): false (in roles)

member_id(pin): "M000639"
first_name(pin): "Robert"
middle_name(pin): null
last_name(pin): "Menendez"
date_of_birth(pin): "1954-01-01"
gender(pin): "M"
url(pin): "https://www.menendez.senate.gov/"
times_topics_url(pin): "http://topics.nytimes.com/top/reference/timestopics/people/m/robert_menendez/index.html"
times_tag(pin): "Menendez, Robert (Per)"
govtrack_id(pin): "400272"
cspan_id(pin): "29608"
votesmart_id(pin): "26961"
icpsr_id(pin): "29373"
twitter_account(pin): "SenatorMenendez"
facebook_account(pin): "senatormenendez"
youtube_account(pin): "SenatorMenendezNJ"
crp_id(pin): "N00000699"
google_entity_id(pin): "/m/033d3p"
rss_url(pin): "https://www.menendez.senate.gov/rss/feeds/?press"
in_office(pin): true
current_party(pin): "D"
most_recent_vote(pin): "2017-10-25"

*/
