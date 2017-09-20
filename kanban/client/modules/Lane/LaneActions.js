import cuid from 'cuid';
import callApi from '../../util/apiCaller';
import { lanes } from '../../util/schema';
import { normalize } from 'normalizr';
import { createNotes } from '../Note/NoteActions';
// Export Constants
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const CREATE_LANES = 'CREATE_LANES';

// Export Actions

export function createLanes(lanes) {
    return {
        type: CREATE_LANES,
        lanes
    };
}

export function fetchLanes() {
    return (dispatch) => {
        return callApi('lanes').then(res => {
            const normalized = normalize(res.lanes, lanes);
            const { lanes, notes } = normalized.entities;
            dispatch(createLanes(lanes));
            dispatch(createNotes(notes));
        });
    };
}

export function createLane(lane) {
    return (dispatch) => {
        return callApi('lanes', 'post', lane).then(res => {
            dispatch(createLanes({
                type: CREATE_LANE,
                lane: res
            }));
        });
    };
}

export function updateLane(updatedLane) {
    return {
        type: UPDATE_LANE,
        ...updatedLane
    };
}

export function deleteLane(id) {
    return {
        type: DELETE_LANE,
        id
    };
}
