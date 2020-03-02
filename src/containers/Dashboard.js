import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard.js'


const mapStateToProps = (state) => {
    return {
        username: 'test-user-1',
        email: 'test-user@example.com'
    }
}

export default connect (mapStateToProps)(Dashboard)
