import { squareClicked } from '.'
import { SQUARE_CLICKED } from '..'

describe('state:actions', () => {
    interface('produces the correct action for clicking a Square', () => {
        const square = 4

        expect(squareClicked(square)).toMatchObject({
            type: SQUARE_CLICKED,
            payload: {
                square: 4
            }
        })
    })
})