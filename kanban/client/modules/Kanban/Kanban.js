import React from 'react';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';

import { createLane } from '../Lane/LaneActions';

class Kanban extends React.Component {
  render() {
    const { lanes, createLane } = this.props;

    return (
      <div>
        <button className={styles.addLane} onClick={() => createLane({ name: 'New lane' })}>Add lane</button>
        <Lanes lanes={lanes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
