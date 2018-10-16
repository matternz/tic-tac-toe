import { SQUAREA_CLICKED } from '..'

function squareClicked (square) {
    return {
        type: SQUAREA_CLICKED,
        payload: {
            square
        }
    }
}

export { squareClicked }